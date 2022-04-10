const Change_Password = () =>{
    return (
        <><hr /><><h2>Change Password</h2><hr /><form>

            <div className="row g-3 align-items-center">
                <div className="col"></div>
                <div className="col-auto">
                    <label for="inputPassword6" className="col-form-label">Old Password</label>
                </div>
                <div className="col-auto">
                    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline">
                    </input></div>
                <div className="col-auto">
                    <span id="passwordHelpInline" className="form-text">
                        Must be 8-20 characters long.
                    </span>
                </div>
                <div className="col"></div>
            </div>
            <br />
            <div className="row g-3 align-items-center">
                <div className="col"></div>
                <div className="col-auto">
                    <label for="inputPassword6" className="col-form-label">New Password</label>
                </div>
                <div className="col-auto">
                    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline">
                    </input></div>
                <div className="col-auto">
                    <span id="passwordHelpInline" className="form-text">
                        Must be 8-20 characters long.
                    </span>
                </div>
                <div className="col"></div>
            </div>
            <br />
            <div className="row g-3 align-items-center">
                <div className="col"></div>
                <div className="col-auto">
                    <label for="inputPassword6" className="col-form-label">Confirm New Password</label>
                </div>
                <div className="col-auto">
                    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline">
                    </input></div>
                <div className="col-auto">
                    <span id="passwordHelpInline" className="form-text">
                        Must match with new password.
                    </span>
                </div>
                <div className="col"></div>
            </div>
            <br />
            <div className="row">
                <div className="col"></div>
                <div className="col"> <button type="submit" className="btn btn-primary">Submit</button></div>
            </div>
           
        </form></></>
    )
}
export default Change_Password