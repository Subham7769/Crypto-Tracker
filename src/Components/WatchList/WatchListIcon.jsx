import React, { useState, useEffect } from "react";
import AddTaskRoundedIcon from "@mui/icons-material/AddTaskRounded";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WatchListIcon = ({ coinId }) => {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    var watchListCoinIds = JSON.parse(localStorage.getItem("watchlist")) || [];
    setAdded(watchListCoinIds.includes(coinId));
  }, [coinId]);

  function WatchListHandle(e) {
    e.preventDefault();
    let newWatchList;
    let watchListCoinIds = JSON.parse(localStorage.getItem("watchlist")) || [];
    if (added) {
      //remove
      newWatchList = watchListCoinIds.filter((id) => id !== coinId);
      toast(`${coinId} Removed from Watchlist`)
    } else {
      //add
      newWatchList = [...watchListCoinIds, coinId];
      toast(`${coinId} Added to Watchlist`)
    }
    localStorage.setItem("watchlist", JSON.stringify(newWatchList));
    setAdded(!added);

    // Dispatch a custom event
    window.dispatchEvent(new CustomEvent("watchlistUpdated"));

    
  }

  return (
    <div onClick={(e) => WatchListHandle(e)}>
      <AddTaskRoundedIcon
        style={{
          color: added ? "var(--primary)" : "var(--grey)",
        }}
        className="IconW"
      />
    </div>
  );
};

export default WatchListIcon;
