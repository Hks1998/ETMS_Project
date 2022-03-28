import './App.css'
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Admin_Home from "./pages/Admin_Home";
import Add_Employee from "./pages/Add_Employee";
import Update_Employee from "./pages/Update_Employee";
import Change_Password from "./pages/Change_Password";
import Xyz from './pages/Xyz';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      
      <h1>Employee Task Management System</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin_home" element={<Admin_Home />} />
          <Route path ="/add_employee" element={<Add_Employee />} />
          <Route path ="/update_employee" element={<Update_Employee />} />
          <Route path ="/change_password" element={<Change_Password />} />
          <Route path ="/xyz" element={<Xyz />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
