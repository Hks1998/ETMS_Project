const ProjectsList = () => {
  return (
    <>
      <hr />


      <div className="row">

        <div className="col">
          <h2>Projects List</h2>
        </div>
        <hr />
        <br />
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-primary me-md-2" type="button">+ Create New Project</button>
        </div>
      </div>
      <br />

      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Project</th>
              <th scope="col">Start Date</th>
              <th scope="col">Due Date</th>
              <th scope="col">Status</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Sample Project</td>
              <td>12/03/2022</td>
              <td>12/06/2022</td>
              <select class="form-select" aria-label="Default select example">
                <option selected>Select Status</option>
                <option value="1">In Progress</option>
                <option value="2">Completed</option>
              </select>
              <td><div className="row">
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button type="button" class="btn btn-primary">Add Task</button>
                </div></div></td>
            </tr>
          </tbody>
        </table>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-primary me-md-2" type="button">Save</button>
          <button class="btn btn-primary" type="button">Back</button>
        </div>
      </div>
    </>
  );
};

export default ProjectsList;
