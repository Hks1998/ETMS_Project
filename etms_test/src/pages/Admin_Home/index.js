const Admin_Home = () => {
  return (
    <>
    <hr />
    
    
      <div className="row">
        
        <div className="col">
          <h3>Admin Home Page</h3>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">
        
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Welcome,Username
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Profile</a></li>
    <li><a class="dropdown-item" href="#">Change Password</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="#">Log Out</a></li>
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
        <div className="col"><button type="button" class="btn btn-primary"><h3>Add New Employee</h3></button></div>
        <div className="col"></div>
    </div>
    </div>
    <br />
    <br />
    <br />
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col"> Department ID</th>
              <th scope="col"> Manager ID</th>
              <th scope="col"> Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">101</th>
              <td>Harsh</td>
              <td>harsh@test.com</td>
              <td>9833423323</td>
              <td>1</td>
              <td>102</td>
              <td><div className="row">
              <div className="col">
              <button type="button" class="btn btn-primary">Update</button></div>
              <div className="col">
              <button type="button" class="btn btn-primary">Delete</button>
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
              <button type="button" class="btn btn-primary">Update</button></div>
              <div className="col">
              <button type="button" class="btn btn-primary">Delete</button>
                </div></div></td>
            </tr>
           
           
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin_Home;
