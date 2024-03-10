import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

function App() {
  return ( 
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HeroSection/>} />
          <Route path="/SignUpPage" element={<SignUpPage/>}></Route>
          <Route path="/LoginPage" element={<LoginPage/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
