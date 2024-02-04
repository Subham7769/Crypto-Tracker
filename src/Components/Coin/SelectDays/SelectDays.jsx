import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./styles.css";
import { InputLabel } from "@mui/material";

function SelectDays({ days, handleDaysChange }) {
  return (
    <div className="filter">
      <p className="label">Price Change in </p>
      <FormControl sx={{ m: 1, minWidth: 10, fontSize: "1rem" }} size="small">
        <InputLabel id="demo-select-small-label"  sx={{color: "var(--primary)"}}>Days</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={days}
          label="Days"
          onChange={handleDaysChange}
          sx={{
            width: "150px",
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
          }}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          <MenuItem value={365}>1 Year</MenuItem>
          <MenuItem value={"max"}>Max</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectDays;
