import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './routes/MainPage';
import ShopPage from './routes/ShopPage';
import Catalog from './routes/Catalog';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
