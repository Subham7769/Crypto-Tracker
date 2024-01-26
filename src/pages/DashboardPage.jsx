import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header'
import TabComponent from '../Components/Dashboard/TabComponent'
import axios from 'axios'
import Search from '../Components/Dashboard/Search'
import PaginationComponent from '../Components/Dashboard/Pagination/PaginationComponent'

const DashboardPage = () => {
  const [coins,setCoins] = useState([]);
  const [search, setSearch] = useState('');

  var filteredCoins = coins.filter((coin)=>
  coin.id.toLowerCase().includes(search.toLowerCase()) || 
  coin.name.toLowerCase().includes(search.toLowerCase()) ||
  coin.symbol.toLowerCase().includes(search.toLowerCase()) 
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
        console.log(response);
        setCoins(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header/>
      <Search search={search} setSearch={setSearch}/>
      <TabComponent coins={filteredCoins}/>
      <PaginationComponent/>
    </div>
  )
}

export default DashboardPage