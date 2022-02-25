import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import { HomePage } from '.';

  
  function Routing() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default Routing