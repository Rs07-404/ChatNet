import './App.css';
import Login from './pages/login/Login.js';
import SignUp from './pages/signup/SignUp.js';
import Home from './pages/home/Home.js';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
