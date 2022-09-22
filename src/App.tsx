import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './routes/MainPage/MainPage';
import ShopPage from './routes/ShopPage/ShopPage';
import Catalog from './routes/Catalog/Catalog';

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
