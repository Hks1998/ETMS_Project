const Add_Employee = ()=> {
    return (
        <><hr />
        <h2>Add New Employee</h2>
        <hr />
        <br />
        <form>
            <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="name" className="form-control" id="inputEmail3"></input>
                </div>
            </div>
            <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputPassword3"></input>
                </div>
            </div>
            <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputEmail3"></input>
                </div>
            </div>
            <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Designation</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputPassword3"></input>
                </div>
            </div>
            <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-10">
                    <input type="phone" className="form-control" id="inputEmail3"></input>
                </div>
            </div>
            <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Manager ID</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputPassword3"></input>
                </div>
            </div>
            <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Department ID</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputPassword3"></input>
                </div>
            </div>
            <div className="row">
                <div className="col">Role</div>
                <div className="col"><select className="form-select" aria-label="Default select example">
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
               <div className="col"> <button type="submit" className="btn btn-primary">Submit</button></div>
               <div className="col"> <button type="submit" className="btn btn-primary">Back</button></div>
           </div>
        </form></>
  
    )
}
export default Add_Employee;