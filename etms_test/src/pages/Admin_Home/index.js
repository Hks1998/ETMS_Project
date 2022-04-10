import { useLocation,useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Employee from '../../components/Employee'
import { URL } from '../../config'

import axios from 'axios'
const Admin_Home = () => {
  const [employee, setEmployees] = useState([])
  const id = sessionStorage['empId']
  const Name = sessionStorage['Name']

  const searchEmployees = () => {
      const url = `${URL}/admin/list_employees`
      axios.get(url).then((response) => {
          const result = response.data
          if (result['status'] == 'success') {
              setEmployees(result['data'])
          } else {
              toast.error(result['error'])
          }
      })
  }



  const navigate = useNavigate()

  const logoutUser = () => {
    // remove the logged users details from session storage
    sessionStorage.removeItem('empId')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('deptId')
    sessionStorage.removeItem('loginStatus')

    navigate('/signin')
  }
  const addEmployee = () => {
    
    navigate('/addemployee')

  }
  const employeeProfile = () => {
    navigate('/employee_profile')
  }
  const changePassword = () => {
    navigate('/changepassword')
  }
  useEffect(() => {
    searchEmployees()
}, [])
 

  return (
    <>
      <hr />


      <div className="row">

        <div className="col">
          <h3>Admin Home Page</h3>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">

          <div class="btn-group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Welcome,{Name}
  </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#"><button onClick={employeeProfile} className="dropdown-item">
                  My Profile</button></a></li>
              <li><a class="dropdown-item" href="#"><button onClick={changePassword} className="dropdown-item">
                  Change Password</button></a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">
                <button onClick={logoutUser} className="dropdown-item">
                  Logout
                </button></a></li>
            </ul>
          </div>

        </div>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col"></div>
          <div className="col"><button onClick={addEmployee} type="button" class="btn btn-primary"><h3>Add New Employee</h3></button></div>
          <div className="col"></div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Password</th>
              <th scope="col"> Department ID</th>
              <th scope="col"> Manager ID</th>
              <th scope="col"> Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <th scope="row">101</th>
              <td>Harsh</td>
              <td>harsh@test.com</td>
              <td>9833423323</td>
              <td>1</td>
              <td>102</td>
              <td><div className="row">
                <div className="col">
                  <button type="button" className="btn btn-primary">Update</button></div>
                <div className="col">
                  <button type="button" className="btn btn-primary">Delete</button>
                </div></div></td>
            </tr>
            <tr>
              <th scope="row">102</th>
              <td>Darshan</td>
              <td>darshan@test.com</td>
              <td>9833423323</td>
              <td>2</td>
              <td>104</td>
              <td><div className="row">
                <div className="col">
                  <button type="button" clasclassNames="btn btn-primary">Update</button></div>
                <div className="col">
                  <button type="button" className="btn btn-primary">Delete</button>
                </div></div></td>
            </tr> */}
            {employee.map((tempEmployee) => {
                                return <Employee employee = {tempEmployee} />
                            })}


          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin_Home
