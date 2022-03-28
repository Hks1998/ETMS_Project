import './App.css'
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ManagerHome from "./pages/ManagerHome"
import TaskAssign from "./pages/TaskAssign"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      
      <h1>Employee Task Management System</h1>
      <hr />
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/managerHome" element={<ManagerHome />} />
          <Route path="/taskAssign" element={<TaskAssign />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
