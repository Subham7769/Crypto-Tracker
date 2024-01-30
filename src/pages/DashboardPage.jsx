import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import TabComponent from "../Components/Dashboard/TabComponent";
import axios from "axios";
import Search from "../Components/Dashboard/Search";
import PaginationComponent from "../Components/Dashboard/Pagination";
import Loader from "../Components/Common/Loader";
import BacktoTop from "../Components/Common/BacktoTop";
import { get100Coins } from "../functions/get100Coins";

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
    getData();
  }, []);


  const getData = async ()=>{
    const myCoins = await get100Coins();
    if (myCoins) {
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
      }
  }

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
