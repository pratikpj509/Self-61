import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Counter from './Counter';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/about">About Us</Link> | 
          <Link to="/contact">Contact Us</Link> | 
          <Link to="/counter">Counter</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
