import axios from "axios";

const getCoinData = (id) => {
  let myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch((error) => {
      console.log("EROOR>>>> ", error);
    });
  return myData;
};
export default getCoinData;
