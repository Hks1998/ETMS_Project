import { useNavigate } from 'react-router'

const Employee_Home = () => {

    const navigate = useNavigate()

    const logoutUser = () => {
        // remove the logged users details from session storage
        sessionStorage.removeItem('empId')
        sessionStorage.removeItem('name')
        sessionStorage.removeItem('dept.deptId')
        sessionStorage.removeItem('loginStatus')

        navigate('/signin')
    }

    return (
        <><hr />
           <div id="headerRow" className="row">
                <div className="col">
                    <h2>Employee Home Page</h2>
                </div>
                <div className="col"></div>
                <div className="col">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Welcome, username
                    </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">My Profile</a></li>
                            <li><a className="dropdown-item" href="#">Change password</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">
                                <button onClick={logoutUser} className="dropdown-item">
                                Logout
                                </button></a></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>


            <><><hr /><div className="row">

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Task Id</th>
                            <th scope="col">Project Name </th>
                            <th scope="col">Task Name</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Management System</td>

                            <td>ETMS</td>
                            <td>15 oct</td>

                            <td>18 Oct</td>


                            <td>

                                <button type="button" className="btn btn-primary">Mark As Completed</button>
                                <div className="col"></div>


                            </td>

                        </tr>

                    </tbody>
                </table>


            </div>
            </>
                <br />
                <br />
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Task Id</th>
                                <th scope="col">Project Name</th>
                                <th scope="col">Task Name</th>
                                <th scope="col">Start Date</th>
                                <th scope="col">End Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Management</td>
                                <td>ETMS</td>
                                <td>15 oct</td>
                                <td>18 oct</td>
                            </tr>

                        </tbody>
                    </table>
                </div></></>
    )
}
export default Employee_Home