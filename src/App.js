import Home from './pages/Home';
import About from './pages/About';
import Connect from './pages/Connect';
import Contribute from './pages/Contribute';
import Projects from './pages/Projects';
import Header from './components/Header';
import Navigate from './components/Nav'
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Routes and change to Route syntax
function App() {
  return (
    <>
    <Router>
      <Navigate />
      {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/projects" element={<Projects />} />

        </Routes>
      
    </Router>
      
      {/* <Header /> */}
      {/* <Home /> */}
    </>
   
  );
}

export default App;
