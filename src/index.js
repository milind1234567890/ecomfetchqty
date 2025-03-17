import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Cart from './Pages/Cart';
import Nav from './Pages/Nav';
import Products from './Pages/Products';

import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
<BrowserRouter>
<Nav/>
<Routes>
  <Route path="/" element={<Products/>}/>
  <Route path="/cart" element={<Cart/>}/>

</Routes>
</BrowserRouter>
</Provider>
);


