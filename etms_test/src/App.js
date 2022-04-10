import './App.css'
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import CreateProject from './pages/CreateProject'
import AddTask from './pages/AddTask'
import ProjectsList from './pages/ProjectsList'
import ManagerHome from "./pages/ManagerHome"
import TaskAssign from "./pages/TaskAssign"
import Employee_Home from "./pages/Employee_Home"
import Employee_Profile from "./pages/Employee_Profile"
import Admin_Home from "./pages/Admin_Home";
import Add_Employee from "./pages/Add_Employee";
import Update_Employee from "./pages/Update_Employee";
import Change_Password from "./pages/Change_Password";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/projects-list" element={<ProjectsList />} />
          <Route path="/managerHome" element={<ManagerHome />} />
          <Route path="/taskAssign" element={<TaskAssign />} />
          <Route path="/employee_home" element={<Employee_Home />} />
          <Route path="/employee_profile" element={<Employee_Profile />} />
          <Route path="/admin_home" element={<Admin_Home />} />
          <Route path ="/add_employee" element={<Add_Employee />} />
          <Route path ="/update_employee" element={<Update_Employee />} />
          <Route path ="/change_password" element={<Change_Password />} />

          
          
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>

  );
}

export default App;
