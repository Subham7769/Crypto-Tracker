import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import SentimentDissatisfiedRoundedIcon from "@mui/icons-material/SentimentDissatisfiedRounded";
import Header from "../Components/Common/Header/Header.jsx";
import TabComponent from "../Components/Dashboard/TabComponent/TabComponent.jsx";
import Loader from "../Components/Common/Loader/Loader.jsx";
import {CoinsContext} from "../Context/CoinsProvider.jsx";
import BacktoTop from "../Components/Common/BacktoTop/BacktoTop.jsx";
import Button from "../Components/Common/Button/Button.jsx";

const WatchlistPage = () => {
  const { coins, isLoading } = useContext(CoinsContext);
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
    <section>
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
              <SentimentDissatisfiedRoundedIcon style={{fontSize:"7rem",color:"var(--primary)"}}/>
              <NavLink to="/Dashboard">
                <Button text={"Dashboard"} outlined={false} />
              </NavLink>
            </div>
          )}
        </div>
      )}

    </section>
  );
};

export default WatchlistPage;
