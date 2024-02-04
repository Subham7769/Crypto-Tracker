import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import SelectCoins from "../Components/Compare/SelectCoins";
import SelectDays from "../Components/Coin/SelectDays/SelectDays.jsx";
import getCoinData from "../functions/getCoinData";
import getCoinPrices from "../functions/getCoinPrices";
import { coinObject } from "../functions/convertObject";
import Loader from "../Components/Common/Loader";
import List from "../components/Dashboard/List";
import CoinInfo from "../Components/Coin/CoinInfo";
import LineChart from "../Components/Coin/LineChart";
import { settingChartData } from "../functions/settingChartData";
import Footer from "../components/Common/Footer";

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(true);
  const [currency, setcurrency] = useState("usd");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  function handleDaysChange(event) {
    setDays(event.target.value);
  }

  // fetching data based which crypto is changed
  const handleCoinChange = async (event, isCoin2) => {
    setLoading(true);
    if (isCoin2) {
      // fetching data for crypto2
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data);
    } else {
      // fetching data for crypto1
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data);
    }
    // fetching prices for both coins
    const prices1 = await getCoinPrices(crypto1, days, currency);
    const prices2 = await getCoinPrices(crypto2, days, currency);
    if (prices1.length > 0 && prices2.length > 0) {
      console.log("both prices are fetched", prices1, prices2);
      setLoading(false);
    }
  };

  // initially accessing the data for initial page render
  async function getData() {
    setLoading(true);
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);
    if (data1) {
      coinObject(setCrypto1Data, data1);
    }
    if (data2) {
      coinObject(setCrypto2Data, data2);
    }
    if (data1 && data2) {
      const prices1 = await getCoinPrices(crypto1, days, currency);
      const prices2 = await getCoinPrices(crypto2, days, currency);
      if (prices1.length > 0 && prices2.length > 0) {
        console.log("both prices are fetched", prices1, prices2);
        setLoading(false);
        settingChartData(setChartData, prices1, data1, prices2, data2);
      }
    }
  }

  useEffect(() => {
    getData();
  }, [crypto1, crypto2, days]);

  return (
    <section>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="coin-days-flex">
            <SelectCoins
              crypto1={crypto1}
              setCrypto1={setCrypto1}
              crypto2={crypto2}
              setCrypto2={setCrypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
          </div>
          <div className="grey-wrapper">
            <List coin={crypto1Data} delay={0.1} />
          </div>
          <div className="grey-wrapper">
            <List coin={crypto2Data} delay={0.1} />
          </div>
          <div className="grey-wrapper">
            <LineChart
              chartData={chartData}
              currency={currency}
              multiAxis={true}
            />
          </div>
          <CoinInfo name={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo name={crypto2Data.name} desc={crypto2Data.desc} />
          <Footer/>
        </>
      )}
    </section>
  );
};

export default ComparePage;
