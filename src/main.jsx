import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {CoinsProvider} from './Context/CoinsProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

    <CoinsProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CoinsProvider>

)
