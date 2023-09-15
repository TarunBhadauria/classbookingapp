import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { ToastBar, Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Core/Cart';

function App() {
  return (
    <div className="App">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Cart />} path='/cart' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
