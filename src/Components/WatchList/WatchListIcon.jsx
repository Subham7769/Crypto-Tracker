import React, { useEffect, useState } from "react";
import AddTaskRoundedIcon from "@mui/icons-material/AddTaskRounded";
import {getWatchList } from '../../functions/getWatchList'

const WatchListIcon = ({coinId}) => {
  const [watchListCoinIds,setWatchListCoinIds] = useState([]);
  const [added, setAdded] = useState(false);

useEffect(() =>{
  setWatchListCoinIds(getWatchList());
  setAdded(getWatchList().includes(coinId)?true:false);
},[watchListCoinIds]);

function WatchListHandle(e){
  e.preventDefault();
    let newWatchList;
    if (added) {
      newWatchList = watchListCoinIds.filter(id => id !== coinId);
    } else {
      newWatchList = [...watchListCoinIds, coinId];
    }
    localStorage.setItem("watchlist", JSON.stringify(newWatchList));
    setAdded(!added);
    setWatchListCoinIds(newWatchList);
  };





  return (
    <div onClick={(e) => WatchListHandle(e)} >
      <AddTaskRoundedIcon
        style={{
          color: added ? "var(--blue)" : "var(--grey)",
        }}
        className="IconW"
      />
    </div>
  );

      }

export default WatchListIcon;
