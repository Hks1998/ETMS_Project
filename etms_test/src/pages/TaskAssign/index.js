import './index.css'

const TaskAssign = () => {

    return (
        <div>
            <div id="headerRow" class="row">
                <div className="col">
                    <h2>Task Assignment</h2>
                </div>
                <div className="col"></div>
                <div className="col"></div>
                <hr />
            </div>
            <br />
            <h3>Employees' List</h3>
            <div>
                <br />
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Employee Name</th>
                            <th scope="col">Ongoing tasks</th>
                            <th scope="col">Available tasks</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>
                                <ul>
                                    <li>Task A</li>
                                    <li>Task B</li>
                                </ul>
                            </td>
                            <td>
                                <select style={{ width: "150px" }} class="form-select" aria-label="Default select example">
                                    <option selected>Select task</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </td>
                            <td>
                                <div className="mb-3">
                                    <button className="btn btn-primary">Assign</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>
                                <ul>
                                    <li>Task C</li>
                                    <li>Task D</li>
                                    <li>Task E</li>
                                </ul>
                            </td>
                            <td>
                                <select style={{ width: "150px" }} class="form-select" aria-label="Default select example">
                                    <option selected>Select task</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </td>
                            <td>
                                <div className="mb-3">
                                    <button className="btn btn-primary">Assign</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mb-3">
                <div className="row">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col">
                        <button id="SaveBtn" className="btn btn-primary">Save</button>
                    </div>
                    <div className="col">
                        <button id="SaveBtn" className="btn btn-secondary">Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskAssign