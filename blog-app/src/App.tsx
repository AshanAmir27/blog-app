import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import SignUp from './pages/Signup'
import Blogs from './pages/Blogs';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
