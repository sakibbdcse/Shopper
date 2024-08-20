import './App.css';
import Shop from './page/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shop/>}/>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
