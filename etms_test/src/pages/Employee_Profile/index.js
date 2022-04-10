
const Employee_Profile = () =>{
return(
    <><><><><><><><><><><><hr /><div className="row">
        <div className="col">
            <h2>Employee Profile</h2>
        </div>
    </div><hr /></>
    
    <div className="row mb-3">
            <label for="colFormLabel" className="col-sm-2 col-form-label"><h3>First Name</h3></label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="colFormLabel">
                </input>
            </div>
        </div></><div className="row mb-3">
            <label for="colFormLabel" className="col-sm-2 col-form-label"><h3>Last Name</h3></label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="colFormLabel">
                </input>
            </div>
        </div></><div className="row mb-3">
            <label for="colFormLabel" className="col-sm-2 col-form-label"><h3>Email</h3></label>
            <div className="col-sm-10">
                <input type="email" className="form-control" id="colFormLabel">
                </input>
            </div>
        </div></><div className="row mb-3">
            <label for="colFormLabel" className="col-sm-2 col-form-label"><h3>Date Of Birth</h3></label>
            <div className="col-sm-10">
                <input type="date" className="form-control" id="colFormLabel">
                </input>
            </div>
        </div></><div className="row mb-3">
            <label for="colFormLabel" className="col-sm-2 col-form-label"><h3>Phone</h3></label>
            <div className="col-sm-10">
                <input type="number" className="form-control" id="colFormLabel">
                </input>
            </div>
        </div></><div className="row mb-3">
            <label for="colFormLabel" className="col-sm-2 col-form-label"><h3>Role</h3></label>
            <div className="col-sm-10">
                <input className="form-control" type="text" placeholder="Disabled" aria-label="Disabled input example" disabled>
                </input>
            </div>
        </div></><div className="row mb-3">
            <label for="colFormLabel" className="col-sm-2 col-form-label"><h3>Designation</h3></label>
            <div className="col-sm-10">
                <input className="form-control" type="text" placeholder="Disabled" aria-label="Disabled input example" disabled>
                </input>
            </div>
        </div></><div className="row mb-3">
            <label for="colFormLabel" className="col-sm-2 col-form-label"><h3>Dept ID</h3></label>
            <div className="col-sm-10">
                <input className="form-control" type="text" placeholder="Disabled" aria-label="Disabled input example" disabled>
                </input>
            </div>
        </div></><div className="row mb-3">
            <label for="colFormLabel" className="col-sm-2 col-form-label"><h3>Manager ID</h3></label>
            <div className="col-sm-10">
                <input className="form-control" type="text" placeholder="Disabled" aria-label="Disabled input example" disabled>
                </input>
            </div>
            <hr />
            
        </div></>
        <div className="row">
            <div className="col"></div>
            <div className="col">
            <button type="button" className="btn btn-primary">Save</button>
            
            </div>
            <div className="col"><button type="button" className="btn btn-primary">Back</button></div>
        </div>
        </>
    

            
)
}
export default Employee_Profile