import React, { useContext } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.css";
import { CoinsContext } from "../../../Context/CoinsProvider.jsx";
import { InputLabel } from "@mui/material";

const SelectCoins = ({ crypto1, crypto2, handleCoinChange }) => {
  const { coins } = useContext(CoinsContext);
  const styles = {
    height: "2rem",
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
      <FormControl sx={{ m: 1, minWidth: 10, fontSize: "1rem" }} size="small">
      <InputLabel id="demo-select-small-label1"  sx={{color: "var(--primary)"}}>Crypto1</InputLabel>
        <Select
          labelId="demo-select-small-label1"
          id="demo-select-small1"
          value={crypto1}
          label="Crypto1"
          onChange={(e) => handleCoinChange(e, false)}
          sx={styles}
        >
          {coins.map((coin, i) => {
            return (
              <MenuItem value={coin.id} key={i}>
                {coin.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <p className="label">Crypto 2</p>
      <FormControl sx={{ m: 1, minWidth: 10, fontSize: "1rem" }} size="small">
      <InputLabel id="demo-select-small-label2"  sx={{color: "var(--primary)"}}>Crypto2</InputLabel>
        <Select
          labelId="demo-select-small-label2"
          id="demo-select-small2"
          value={crypto2}
          label="Crypto2"
          onChange={(e) => handleCoinChange(e, true)}
          sx={styles}
        >
          {coins
            .filter((item) => item.id != crypto1)
            .map((coin, i) => {
              return (
                <MenuItem value={coin.id} key={i}>
                  {coin.name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCoins;
