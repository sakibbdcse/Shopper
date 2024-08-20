import './App.css';
import Navbar from './components/navbar/Navbar';
import Shop from './page/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShopCategory from './page/ShopCategory';
import Product from './page/Product';
import Cart from './page/Cart';
import LoginSignup from './page/LoginSignup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="mens"/>}/>
        <Route path='/womens' element={<ShopCategory category="Womens"/>}/>
        <Route path='/kids' element={<ShopCategory category="Kids"/>}/>
        <Route path='product' element={<Product/>}/>
          <Route path=':productId' element={Product}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
