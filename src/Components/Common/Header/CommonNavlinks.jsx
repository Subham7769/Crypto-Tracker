import React from 'react'
import { NavLink } from 'react-router-dom'
import Toggle from '../Toggle/Toggle.jsx'
import Button from '../Button/Button.jsx'

const Navlinks = ({className}) => {
  return (
    <div>
    <ul className={className}>
        <li>
            <Toggle/>
        </li>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/Compare">Compare</NavLink>
        </li>
        <li>
            <NavLink to="/Watchlist">Watchlist</NavLink>
        </li>
        <li>
            <NavLink to="/Dashboard" ><Button text={"Dashboard"} outlined={false}/></NavLink>
        </li>
    </ul>
    
</div>
  )
}

export default Navlinks