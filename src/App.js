import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import General from './components/Profile/General';
import Friends from './components/Profile/Friends';
import Payment from './components/Profile/Payment';
import Security from './components/Profile/Security';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="general" element={<General />} />
              <Route path="payment" element={<Payment />} />
              <Route path="friends" element={<Friends />} />
              <Route path="security" element={<Security />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
