import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
