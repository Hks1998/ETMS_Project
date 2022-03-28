
const Employee_Profile = () =>{
return(
    <><><><><><><><><><><><hr /><div className="row">
        <div className="col">
            <h2>Employee Profile</h2>
        </div>
    </div><hr /></>
    
    <div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label"><h3>First Name</h3></label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="colFormLabel">
                </input>
            </div>
        </div></><div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label"><h3>Last Name</h3></label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="colFormLabel">
                </input>
            </div>
        </div></><div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label"><h3>Email</h3></label>
            <div class="col-sm-10">
                <input type="email" class="form-control" id="colFormLabel">
                </input>
            </div>
        </div></><div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label"><h3>Date Of Birth</h3></label>
            <div class="col-sm-10">
                <input type="date" class="form-control" id="colFormLabel">
                </input>
            </div>
        </div></><div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label"><h3>Phone</h3></label>
            <div class="col-sm-10">
                <input type="number" class="form-control" id="colFormLabel">
                </input>
            </div>
        </div></><div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label"><h3>Role</h3></label>
            <div class="col-sm-10">
                <input class="form-control" type="text" placeholder="Disabled" aria-label="Disabled input example" disabled>
                </input>
            </div>
        </div></><div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label"><h3>Designation</h3></label>
            <div class="col-sm-10">
                <input class="form-control" type="text" placeholder="Disabled" aria-label="Disabled input example" disabled>
                </input>
            </div>
        </div></><div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label"><h3>Dept ID</h3></label>
            <div class="col-sm-10">
                <input class="form-control" type="text" placeholder="Disabled" aria-label="Disabled input example" disabled>
                </input>
            </div>
        </div></><div class="row mb-3">
            <label for="colFormLabel" class="col-sm-2 col-form-label"><h3>Manager ID</h3></label>
            <div class="col-sm-10">
                <input class="form-control" type="text" placeholder="Disabled" aria-label="Disabled input example" disabled>
                </input>
            </div>
            <hr />
            
        </div></>
        <div className="row">
            <div className="col"></div>
            <div className="col">
            <button type="button" class="btn btn-primary">Save</button>
            
            </div>
            <div className="col"><button type="button" class="btn btn-primary">Back</button></div>
        </div>
        </>
    

            
)
}
export default Employee_Profile