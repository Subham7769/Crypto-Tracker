export  function getWatchList(){
    if (JSON.parse(localStorage.getItem('watchlist'))) {
     return JSON.parse(localStorage.getItem('watchlist'))
    } else {
      return [];
    }
  }