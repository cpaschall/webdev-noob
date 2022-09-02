import Home from './pages/Home';
import About from './pages/About'
import Header from './components/Header';
import Navigate from './components/Nav'
import './styles/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Routes and change to Route syntax
function App() {
  return (
    <>
    <Router>
      <Navigate />
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      
    </Router>
      
      {/* <Header /> */}
      {/* <Home /> */}
    </>
   
  );
}

export default App;
