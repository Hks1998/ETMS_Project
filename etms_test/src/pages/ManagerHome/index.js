import './index.css'
import { useNavigate } from 'react-router'


const ManagerHome = () => {

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
        <div>
            <div id="headerRow" className="row">
                <div className="col">
                    <h2>Manager Home Page</h2>
                </div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Welcome, username
                    </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">My Profile</a></li>
                            <li><a class="dropdown-item" href="#">Change password</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">
                                <button onClick={logoutUser} className="dropdown-item">
                                Logout
                                </button></a></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>

            <div id="btnRow" className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="mb-3">
                        <button id="ManageBtn" className="btn btn-primary">View Projects</button>
                    </div>
                    <div className="mb-3">
                        <button id="ManageBtn" className="btn btn-primary">Create Projects</button>
                    </div>
                    <div className="mb-3">
                        <button id="ManageBtn" className="btn btn-primary">Assign Tasks</button>
                    </div>
                </div>
                <div className="col"></div>
                <div>
                    <br />
                    <h3>Task List</h3>
                    <hr />
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Project ID</th>
                                <th scope="col">Task name</th>
                                <th scope="col">Start date</th>
                                <th scope="col">Due date</th>
                                <th scope="col">Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>2</td>
                                <td>Work distribution</td>
                                <td>2020-05-21</td>
                                <td>2022-05-21</td>
                                <td>In-progress</td>
                                <td>
                                    <div className="mb-3">
                                        <button className="btn btn-primary">Mark as complete</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>4</td>
                                <td>Database review</td>
                                <td>2021-03-15</td>
                                <td>2022-11-14</td>
                                <td>In-progress</td>
                                <td>
                                    <div className="mb-3">
                                        <button className="btn btn-primary">Mark as complete</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>1</td>
                                <td>Backend review</td>
                                <td>2020-12-01</td>
                                <td>2022-07-13</td>
                                <td>Complete</td>
                                <td>
                                    <div className="mb-3">
                                        <button className="btn btn-primary">Mark as complete</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>3</td>
                                <td >Project briefing</td>
                                <td>2020-12-01</td>
                                <td>2022-07-13</td>
                                <td>Complete</td>
                                <td>
                                    <div className="mb-3">
                                        <button className="btn btn-primary">Mark as complete</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManagerHome