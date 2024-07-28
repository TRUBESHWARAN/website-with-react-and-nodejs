import React from "react"
import Navbar from './components/navbar.jsx'
import {BrowserRouter as Router, Route, Routes, Navigate, useNavigate} from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/register.jsx'
const App = () => {
  // const [count, setCount] = useState(0)
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };
  return (
    <>
      <div>
        <Navbar handleLogout={handleLogout} />        
      </div>
      <div>
        <Routes>
          <Route path="/Login" element={<Login />} />
            {/* {<Route path="/Register" element={<Register />} />
            <Route path="/chat" element={<chatlist />} />
            <Route path="/chat/:id" element={< chat />} />} */}
        </Routes>
      </div>
    </>
  );
};

export default App;
