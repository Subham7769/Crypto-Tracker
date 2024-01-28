import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Common/Header";
import Loader from "../Components/Common/Loader";
import axios from "axios";
import { coinObject } from "../functions/convertObject";
import List from "../Components/Dashboard/List";
import Coininfo from "../Components/Coin/Coininfo";

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
        console.log(response);
        coinObject(setCoinData, response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <>
      <Header />
      {isLoading ? <Loader /> : 
        <div className="grey-wrapper">
          <List coin={coinData}/>
    </div>
      }

         {coinData && <Coininfo heading={coinData.name} desc={coinData.desc}/>}
    </>
  );
};

export default CoinPage;
