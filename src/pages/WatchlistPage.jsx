import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import TabComponent from "../Components/Dashboard/TabComponent";
import Search from "../Components/Dashboard/Search";
import PaginationComponent from "../Components/Dashboard/Pagination";
import Loader from "../Components/Common/Loader";
import BacktoTop from "../Components/Common/BacktoTop";
import { get100Coins } from "../functions/get100Coins";
import {getWatchList } from '../functions/getWatchList';
import { NavLink } from "react-router-dom";
import Button from "../Components/Common/Button";


const WatchlistPage = () => {
  const [coins, setCoins] = useState([]);
  const [watchListCoinIds,setWatchListCoinIds] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  var WatchListItems = [];

  const handleChange = (event, value) => {
    setPage(value);
    var previousIndex = value - 1;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

    
  var filteredCoins = WatchListItems.filter(
    (coin) =>
      coin.id.toLowerCase().includes(search.toLowerCase()) ||
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
      );
      
  useEffect(() => {
    getData();
  }, []);
  
  
  const getData = async ()=>{
    setWatchListCoinIds(getWatchList());
    console.log(getWatchList());
    const myCoins = await get100Coins();
    if (myCoins) {
      setCoins(myCoins);
      WatchListItems = myCoins.filter((coin) => getWatchList().includes(coin.id));
      setPaginatedCoins(getWatchList().slice(0, 10));
      setIsLoading(false);
      }
      setIsLoading(false);
      console.log(WatchListItems.length);
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
        </div>)
      
        
      }
    </>
  );
};

export default WatchlistPage;
