import { Route,Routes } from 'react-router-dom';
import React from 'react'
import HomePage from './pages/HomePage.jsx';
// import ComparePage from './pages/ComparePage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
// import CoinPage from './pages/CoinPage.jsx';
import WatchlistPage from './pages/WatchlistPage.jsx';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        {/* <Route path='/Compare' element={<ComparePage/>}></Route> */}
        <Route path='/Dashboard' element={<DashboardPage/>}></Route>
        {/* <Route path='/Coin/:id' element={<CoinPage/>}></Route> */}
        <Route path='/Watchlist' element={<WatchlistPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App