import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
import Update from './components/Update';
import Product from './components/Product';
import ProductList from './components/ProductList';
import { useState } from 'react';


function App() {
  const [product, setProduct] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Product product={product} setProduct={setProduct}  />} path="/create" />
          <Route element={<ProductList product={product} setProduct={setProduct} />} path="/" />
          <Route element={<Detail />} path="/:id" />
          <Route element={<Update />} path="/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

