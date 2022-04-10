import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from "../../config";

const Change_Password = ()=>{
    const empId = sessionStorage['EmpId']

    console.log(empId)
const navigate = useNavigate()
useEffect(() => {
  searchEmployees();
}, []);

    const [password, setPassword] = useState("");
    const searchEmployees = () => {
        console.log(empId);
        const url = `${URL}/admin/employeeProfile/${empId}`;
        axios.get(url).then((response) => {
          const result = response.data;
          setPassword(result.data.password);
        });
    }
    const updatePassword = () => {
        let body={}
        if (password.length == 0) {
            toast.warning('please enter password')
            console.log("4")
            }
            else {
      
                body = {
                 
                 password,
                 
               }
             
               const url = `${URL}/change_password/${empId}`
               axios.patch(url, body).then((response) => {
                 const result = response.data
                 debugger
                 if (result['status'] == 'success') {
                   toast.success('password changed')
                   navigate('/admin_home')
                 } else {
                   toast.error()
                 }
               })
             }
    }       
return (
        <><hr /><><h2>Change Password</h2><hr /><form>

            <div class="row g-3 align-items-center">
                <div className="col"></div>
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Old Password</label>
                </div>
                <div class="col-auto">
                    <input type="password" id="inputPassword5" defaultValue={password}
             class="form-control" aria-describedby="passwordHelpInline">
                    </input></div>
                <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text">
                        Must be 8-20 characters long.
                    </span>
                </div>
                <div className="col"></div>
            </div>
            <br />
            <div class="row g-3 align-items-center">
                <div className="col"></div>
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">New Password</label>
                </div>
                <div class="col-auto">
                    <input type="password" onChange={e => setPassword(e.target.value)} id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
                    </input></div>
                <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text">
                        Must be 8-20 characters long.
                    </span>
                </div>
                <div className="col"></div>
            </div>
            <br />
            
            <div className="row">
                <div className="col"></div>
                <div className="col"> <button onClick={ updatePassword } type="submit"  class="btn btn-primary">Submit</button></div>
            </div>
           
        </form></></>
    )
}

export default Change_Password