import './App.css'
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      
      <h1>Employee Task Management System</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
