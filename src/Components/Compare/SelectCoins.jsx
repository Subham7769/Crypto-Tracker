import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { get100Coins } from "../../functions/get100Coins";
import "./style.css";

const SelectCoins = ({ crypto1,  crypto2, handleCoinChange}) => {
  const [allCoins, setAllCoins] = useState([]);

  const styles = {
    height: "2.5rem",
    color: "var(--black)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--blue)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--black)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "var(--blue)",
      },
    },
  };



  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const myCoins = await get100Coins();
    console.log(myCoins);
    setAllCoins(myCoins);
  }

  return (
    <div className="coin-flex">
      <p>Crypto 1</p>
      <FormControl>
        <Select
          sx={styles}
          label="Crypto1"
          value={crypto1}
          onChange={(e) => handleCoinChange(e, false)}
        >
          {allCoins.map((coin,i) => {
            return <MenuItem value={coin.id} key={i}>{coin.name}</MenuItem>;
          })}
        </Select>
      </FormControl>

      <p>Crypto 2</p>
      <FormControl>
        <Select
          sx={styles}
          label="Crypto2"
          value={crypto2}
          onChange={(e) => handleCoinChange(e, true)}
        >
          {allCoins.filter((item)=>item.id !=crypto1).map((coin,i) => {
            return <MenuItem value={coin.id} key={i}>{coin.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCoins;
