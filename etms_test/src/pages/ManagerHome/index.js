import './index.css'

const ManagerHome = () => {
    return (
        <div>
            <div id="headerRow" className="row">
                <div className="col">
                    <h2>Manager Home Page</h2>
                </div>
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
                            <li><a class="dropdown-item" href="#">Logout</a></li>
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
                    <h3>Ongoing Tasks</h3>
                    <hr />
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Project</th>
                                <th scope="col">Task name</th>
                                <th scope="col">Start date</th>
                                <th scope="col">Due date</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>2020-05-21</td>
                                <td>2022-05-21</td>
                                <td>
                                    <div className="mb-3">
                                        <button className="btn btn-primary">Mark as complete</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>2021-03-15</td>
                                <td>2022-11-14</td>
                                <td>
                                    <div className="mb-3">
                                        <button className="btn btn-primary">Mark as complete</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>2020-12-01</td>
                                <td>2022-07-13</td>
                                <td>
                                    <div className="mb-3">
                                        <button className="btn btn-primary">Mark as complete</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <br />
                    <h3>Completed Tasks</h3>
                    <hr />
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Project</th>
                                <th scope="col">Task name</th>
                                <th scope="col">Start date</th>
                                <th scope="col">End date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>2020-05-21</td>
                                <td>2022-04-10</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>2021-03-15</td>
                                <td>2022-11-14</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManagerHome