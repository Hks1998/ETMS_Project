const Employee_Home = () =>{
    return (
        <><hr />
        <div className="row">
            <div className="col">
            <h3>Employee Home Page</h3>
            </div>
            <div className="col">
                
            </div>
            <div className="col"></div>
            <div className="col">
            <select class="form-select" aria-label="Default select example">
  <option selected>Profile</option>
  <option value="1">Change Password</option>
  <option value="2">Logout</option>
  
</select>

            </div>
        </div>
        
        
        <><><hr /><div className="row">

            <table class="table">
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
                       
                       <button type="button" class="btn btn-primary">Mark As Completed</button>
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
                <table class="table">
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