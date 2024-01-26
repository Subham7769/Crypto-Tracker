import React from 'react';
import './style.css';
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { useState,useEffect } from 'react'

const Toggle = () => {

  const getTheme = () => {
    return window.localStorage.getItem('theme') 
    ? window.localStorage.getItem('theme')
    : "light";
}
const getThemeStatus = () => {
    return window.localStorage.getItem('themestatus') === 'true';
}

const [theme , setTheme] = useState(getTheme())
const [themestatus , setThemeStatus] = useState(getThemeStatus())

const changeTheme = ()=>{
    if(theme === 'dark'){
        setTheme('light');
        setThemeStatus(!themestatus);
    }
    else{
        setTheme('dark');  
        setThemeStatus(!themestatus);
    }
    console.log(document.documentElement);
}

useEffect(()=>{
    if(theme === 'light'){
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light'); 
    }
    else{
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark');
    }
    localStorage.setItem('theme',theme)       
    localStorage.setItem('themestatus',themestatus)       

},[theme,themestatus]);


  return (
    <div className="toggle" onClick={changeTheme}>
        <Moon/>
        <Sun/>
        <div className="t-button" style={themestatus?{left:'2px'}:{right:'2px'}}  >
        </div>
    </div>
  )
}

export default Toggle;