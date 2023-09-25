import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoodPage from './Pages/FoodPage';
import FoodDetail from './Pages/FoodDetail';
import ScrollToTop from './Utils/ScrollToTop';
import FoodCart from './Pages/FoodCart';

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<FoodPage />}></Route>
          <Route path='/food-detail/:id' element={<FoodDetail />}></Route>
          <Route path='/food-cart' element={<FoodCart/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
