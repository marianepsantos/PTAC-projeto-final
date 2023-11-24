import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home';
import EmDestaque from './EmDestaque/EmDestaque';
import NovoVideo from './NovoVideo/NovoVideo';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path='/emdestaque' element={<EmDestaque />}></Route>
        <Route path='/novovideo' element={<NovoVideo />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
