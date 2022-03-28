const Add_Employee = ()=> {
    return (
        <><hr />
        <h2>Add New Employee</h2>
        <hr />
        <br />
        <form>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input type="name" class="form-control" id="inputEmail3"></input>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputPassword3"></input>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputEmail3"></input>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Designation</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword3"></input>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Phone</label>
                <div class="col-sm-10">
                    <input type="phone" class="form-control" id="inputEmail3"></input>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Manager ID</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword3"></input>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Department ID</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword3"></input>
                </div>
            </div>
            <div className="row">
                <div className="col">Role</div>
                <div className="col"><select class="form-select" aria-label="Default select example">
 <option value="1">Choose Role</option>
  <option value="2">Admin</option>
  <option value="3">Manager</option>
  <option value="4">Employee</option>
</select></div>
<div className="col"></div>
<div className="col"></div>
<div className="col"></div>
<div className="col"></div>
            </div>
<br />
<br />
           <div className="row">
               <div className="col"></div>
               <div className="col"> <button type="submit" class="btn btn-primary">Submit</button></div>
               <div className="col"> <button type="submit" class="btn btn-primary">Back</button></div>
           </div>
        </form></>
  
    )
}
export default Add_Employee;