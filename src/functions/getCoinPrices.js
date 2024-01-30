import axios from "axios";

const getCoinPrices = (id, days,currency) => {
  let myPrice = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`)
    .then((response) => {
        console.log(response.data.prices)
        return response.data.prices;
    })
    .catch((error) => {
      console.log("EROOR>>>> ", error);
    });
  return myPrice;
};
export default getCoinPrices;
