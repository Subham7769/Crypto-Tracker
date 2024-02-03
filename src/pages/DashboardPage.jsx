import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import TabComponent from "../Components/Dashboard/TabComponent";
import Search from "../Components/Dashboard/Search";
import PaginationComponent from "../Components/Dashboard/Pagination";
import Loader from "../Components/Common/Loader";
import BacktoTop from "../Components/Common/BacktoTop";
import coinsContext from "../Context/coinsContext";

const DashboardPage = () => {
  const {coins,isLoading,paginatedCoins,search} = useContext(coinsContext)


  var filteredCoins = coins.filter(
    (coin) =>
      coin.id.toLowerCase().includes(search.toLowerCase()) ||
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header /> 
      <BacktoTop/>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search/>
          <TabComponent coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <PaginationComponent/>
          )}{" "}
        </div>
      )}
    </>
  );
};

export default DashboardPage;
