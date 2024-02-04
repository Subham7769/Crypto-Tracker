import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Common/Header/Header.jsx";
import TabComponent from "../Components/Dashboard/TabComponent/TabComponent.jsx";
import Search from "../Components/Dashboard/Search/Search.jsx";
import PaginationComponent from "../Components/Dashboard/Pagination/Pagination.jsx";
import Loader from "../Components/Common/Loader/Loader.jsx";
import BacktoTop from "../Components/Common/BacktoTop/BacktoTop.jsx";
import {CoinsContext} from "../Context/CoinsProvider.jsx";
import Footer from "../Components/Common/Footer/Footer.jsx";

const DashboardPage = () => {
  const {coins,isLoading,paginatedCoins,search} = useContext(CoinsContext)


  var filteredCoins = coins.filter(
    (coin) =>
      coin.id.toLowerCase().includes(search.toLowerCase()) ||
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
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
      <Footer/>
    </section>
  );
};

export default DashboardPage;
