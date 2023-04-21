import React from 'react';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedLayout from './components/SharedLayout';
import Cart from './components/Cart';
import Product from './components/Product';
import About from './components/About';
import Account from './components/Account';
import Help from './components/Help';
import Home from './components/Home';
import Search from './components/Search';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Cart />} />
          <Route path='Product' element={<Product />} />
          <Route path='about' element={<About />} />
          <Route path='account' element={<Account />} />
          <Route path='help' element={<Help />} />
          <Route path='home' element={<Home />} />
          <Route path='search' element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
