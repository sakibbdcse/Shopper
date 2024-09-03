import './App.css';
import Navbar from './components/navbar/Navbar';
import Shop from './page/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShopCategory from './page/ShopCategory';
import Cart from './page/Cart';
import LoginSignup from './page/LoginSignup';
import Footer from './components/footer/Footer';
import men_benner from './assets/banner_mens.png';
import women_benner from './assets/banner_women.png';
import kids_benner from './assets/banner_kids.png';
import Product from './page/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory benner={men_benner} category="men" />} />
          <Route path='/womens' element={<ShopCategory benner={women_benner} category="women" />} />
          <Route path='/kids' element={<ShopCategory benner={kids_benner} category="kid" />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='*' element={<p>Page not found</p>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
