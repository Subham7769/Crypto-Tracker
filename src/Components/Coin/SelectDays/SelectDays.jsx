import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import "./styles.css";

function SelectDays({ days, handleDaysChange}) {
  return (
    <div className='filter'>
      {<p className="label">Price Change in </p>}
      <FormControl>
      <Select
        value={days}
        onChange={handleDaysChange}
        sx={{
          width: '150px',
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
      </Select>
      </FormControl>

    </div>
  );
}

export default SelectDays;
