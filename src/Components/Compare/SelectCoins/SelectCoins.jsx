import React, { useContext } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.css";
import CoinsContext from "../../../Context/CoinsContext";

const SelectCoins = ({ crypto1,  crypto2, handleCoinChange}) => {

  const{coins} = useContext(CoinsContext)
  const styles = {
    height: "2.5rem",
    color: "var(--black)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--primary)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--black)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "var(--primary)",
      },
    },
  };

  return (
    <div className="coin-flex">
      <p className="label">Crypto 1</p>
      <FormControl>
        <Select
          sx={styles}
          label="Crypto1"
          value={crypto1}
          onChange={(e) => handleCoinChange(e, false)}
        >
          {coins.map((coin,i) => {
            return <MenuItem value={coin.id} key={i}>{coin.name}</MenuItem>;
          })}
        </Select>
      </FormControl>

      <p className="label">Crypto 2</p>
      <FormControl>
        <Select
          sx={styles}
          label="Crypto2"
          value={crypto2}
          onChange={(e) => handleCoinChange(e, true)}
        >
          {coins.filter((item)=>item.id !=crypto1).map((coin,i) => {
            return <MenuItem value={coin.id} key={i}>{coin.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCoins;
