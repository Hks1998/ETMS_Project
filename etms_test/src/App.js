import './App.css'
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import CreateProject from './pages/CreateProject'
import AddTask from './pages/AddTask'
import ProjectsList from './pages/ProjectsList'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      
      <h1>Employee Task Management System</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/projects-list" element={<ProjectsList />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
