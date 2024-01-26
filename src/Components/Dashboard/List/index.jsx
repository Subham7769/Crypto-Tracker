import React from "react";
import "./style.css";
import StarsIcon from "@mui/icons-material/Stars";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Tooltip } from "@mui/material";
import { convertNumber } from "../../../functions/ConverterNumber";

const List = ({ coin }) => {
  return (
    <tr className="list-row">
        <Tooltip title="Coin Logo">
        <td className="td-image"><img src={coin.image} alt="" className="coin-logo" draggable="false" /></td>
        </Tooltip>
        <Tooltip title="Coin info">
        <td>
            <p className="coinSymbol">{coin.symbol}</p>
            <p className="coinName">{coin.name}</p>
        </td>
        </Tooltip>
        {/* <td><StarsIcon /></td> */}

      <td>
        <p className={
          coin.price_change_percentage_24h > 0
            ? "price-chip"
            : "price-chip chip-red"
        }>{coin.price_change_percentage_24h.toFixed(2)}%</p>
      </td>
      <td>
        {coin.price_change_percentage_24h > 0 ? (
        <p className={
            coin.price_change_percentage_24h > 0
              ? "icon-chip center-align"
              : "icon-chip center-align chip-red"
          }><TrendingUpIcon /></p>
          
        ) : (
         <p className={
            coin.price_change_percentage_24h > 0
              ? "icon-chip center-align "
              : "icon-chip  center-align chip-red"
          }> <TrendingDownIcon /></p>
        )}
      </td>

      <Tooltip title="Current Price">
      <td>
        <p  className={
          coin.price_change_percentage_24h > 0
            ? "Coin-price  center-align "
            : "Coin-price  center-align Coin-price-red"
        }>${coin.current_price.toLocaleString()}</p>
      </td>
      </Tooltip>

      <Tooltip title="Total Volume">
      <td className="total-volume right-align Desktop">
        ${coin.total_volume.toLocaleString()}
      </td>
      </Tooltip>
      <Tooltip title="Total Volume">
      <td className="total-volume right-align Mobile">
        ${convertNumber(coin.total_volume)}
      </td>
      </Tooltip>

      <Tooltip title="Market Cap">
      <td className="mkt-Cap right-align Desktop">
        ${coin.market_cap.toLocaleString()}
      </td>
      </Tooltip>
      <Tooltip title="Market Cap">
      <td className="mkt-Cap right-align Mobile">
        ${convertNumber(coin.market_cap)}
      </td>
      </Tooltip>

    </tr>
  );
};

export default List;
