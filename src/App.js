import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ComboGenerator from './pages/ComboGenerator.js';
import About from './pages/About.js';
import bgImage from './assets/images/ring.jpg'

function App() {
  return (

    <div className="App">
      <div className='bg-image'>
        <img src={bgImage} />
      </div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={
            <ComboGenerator />
          } />
          <Route path='/about' exact element={
            <About />
          } />
        </Routes>
      </Router>
      
    </div>

  );
}

export default App;
