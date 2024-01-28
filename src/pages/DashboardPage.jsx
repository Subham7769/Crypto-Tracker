import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import TabComponent from "../Components/Dashboard/TabComponent";
import axios from "axios";
import Search from "../Components/Dashboard/Search";
import PaginationComponent from "../Components/Dashboard/Pagination";
import Loader from "../Components/Common/Loader";
import BacktoTop from "../Components/Common/BacktoTop";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const handleChange = (event, value) => {
    setPage(value);
    var previousIndex = value - 1;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  var filteredCoins = coins.filter(
    (coin) =>
      coin.id.toLowerCase().includes(search.toLowerCase()) ||
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );
        console.log(response);
        setIsLoading(false);
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
   
    <Header /> 
    <BacktoTop/>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} setSearch={setSearch} />
          <TabComponent coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <PaginationComponent
              page={page}
              setPage={setPage}
              handleChange={handleChange}
            />
          )}{" "}
        </div>
      )}
    </>
  );
};

export default DashboardPage;
