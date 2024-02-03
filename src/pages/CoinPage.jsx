import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../Components/Coin/CoinInfo";
import LineChart from "../Components/Coin/LineChart";
import Footer from "../components/Common/Footer";
import Header from "../Components/Common/Header";
import Loader from "../Components/Common/Loader";
import List from "../components/Dashboard/List";
import { coinObject } from "../functions/convertObject";
import getCoinData from "../functions/getCoinData";
import getCoinPrices from "../functions/getCoinPrices";
import { settingChartData } from "../functions/settingChartData";
import SelectDays from "../Components/Coin/SelectDays/selectDays";
import PriceToggle from "../Components/Coin/PriceToggle/priceToggle";
import coinsContext from "../Context/coinsContext";

function CoinPage() {
  const { currency, setCurrency, isLoading, setLoading } =
    useContext(coinsContext);
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getData();
  }, [id, days]);

  const getData = async () => {
    setLoading(true);
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoin, data); //For Coin Obj being passed in the List
      const prices = await getCoinPrices(id, days, currency);
      if (prices) {
        settingChartData(setChartData, prices, data);
        setLoading(false);
      }
    }
  };

  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, currency);
    if (prices) {
      settingChartData(setChartData, prices, coin);
      setLoading(false);
    }
  };

  const handlecurrencyChange = async (event) => {
    setLoading(true);
    setCurrency(event.target.value);
    const prices = await getCoinPrices(id, days, event.target.value);
    if (prices) {
      settingChartData(setChartData, prices, coin);
    }
    setLoading(false);
  };

  return (
    <section>
      <Header />
      {isLoading || !coin?.id || !chartData ? (
        <Loader />
      ) : (
        <>
          <table className="grey-wrapper">
            <tbody className="ListView">
              <List coin={coin} delay={0.1} />
            </tbody>
          </table>
          <div className="grey-wrapper upperFilter">
            <SelectDays handleDaysChange={handleDaysChange} days={days} />
            <PriceToggle
              handlecurrencyChange={handlecurrencyChange}
              currency={currency}
            />
            <LineChart
              chartData={chartData}
              currency={currency}
              multiAxis={false}
            />
          </div>
          <CoinInfo name={coin.name} desc={coin.desc} />
        </>
      )}
      <Footer />
    </section>
  );
}

export default CoinPage;
