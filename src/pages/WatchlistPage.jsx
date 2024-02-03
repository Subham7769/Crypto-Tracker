import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import TabComponent from "../Components/Dashboard/TabComponent";
import Loader from "../Components/Common/Loader";
import BacktoTop from "../Components/Common/BacktoTop";
import { useContext } from "react";
import coinsContext from "../Context/coinsContext.jsx";
import { NavLink } from "react-router-dom";
import Button from "../Components/Common/Button";
import SentimentDissatisfiedRoundedIcon from "@mui/icons-material/SentimentDissatisfiedRounded";

const WatchlistPage = () => {
  const { coins, isLoading } = useContext(coinsContext);
  const [watchListItems, setWatchListItems] = useState([]);

  useEffect(() => {
    function handleStorageChange() {
      var watchListCoinIds = JSON.parse(localStorage.getItem("watchlist")) || [];
      let WatchListItems = coins.filter((coin) =>
        watchListCoinIds.includes(coin.id)
      );
      setWatchListItems(WatchListItems);
    }

    // Listen for the custom event
    window.addEventListener('watchlistUpdated', handleStorageChange);

    // Call the function once to initialize the state
    handleStorageChange();

    // Cleanup function
    return () => {
      window.removeEventListener('watchlistUpdated', handleStorageChange);
    };
  }, [coins]); // Re-run the effect when `coins` change

  return (
    <>
      <Header />
      <BacktoTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {watchListItems.length > 0 ? (
            <TabComponent coins={watchListItems} />
          ) : (
            <div className="watchlistEmpty">
              <p>No Item in Watchlist</p>
              <SentimentDissatisfiedRoundedIcon style={{fontSize:"7rem",color:"var(--blue)"}}/>
              <NavLink to="/Dashboard">
                <Button text={"Dashboard"} outlined={false} />
              </NavLink>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default WatchlistPage;
