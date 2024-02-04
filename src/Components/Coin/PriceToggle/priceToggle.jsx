import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useState } from "react";
import "./styles.css";

function PriceToggle({ currency, handlecurrencyChange }) {
  return (
    <div className="toggle-div">
      <ToggleButtonGroup
        color="primary"
        value={currency}
        exclusive
        onChange={handlecurrencyChange}
        sx={{
          "&.Mui-selected": {
            color: "var(--primary) !important",
          },
          borderColor: "var(--primary)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--primary)",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--primary)",
          },
        }}
      >
        <ToggleButton value="prices" className="toggle-btn">
          Price
        </ToggleButton>
        <ToggleButton value="total_volumes" className="toggle-btn">
          Total Volume
        </ToggleButton>
        <ToggleButton value="market_caps" className="toggle-btn">
          Market Cap
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default PriceToggle;
