import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export function AdminLogin(){
    const[user,setUser]=useState({UserId:"",Password:""})
    const [error,setError]=useState('');
    const navigate=useNavigate();


    function handleIdChange(e){
        setUser({
            UserId:parseInt(e.target.value),
            Password:user.Password
        })
    }
    function handlePwdChange(e){
        setUser({
            UserId:user.UserId,
            Password:e.target.value
        })
    }
    function handleSumbmit(e){
        e.preventDefault();
        axios({
            method:"get",
            url:"http://127.0.0.1:5000/admin"
        }).then(response=>{
            for(var vuser of response.data){
                if(vuser.UserId===user.UserId&&vuser.Password===user.Password){ 
                navigate("/dashboard");
                break;
            } else{
                setError("Invalid credentials");
            }
        }
    })
}
    
    return(
        <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleSumbmit}>
                <dl>
                    <dt>Admin ID</dt>
                    <dd><input type="text" onChange={handleIdChange} className="form-control"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={handlePwdChange} className="form-control"/></dd>
                </dl>
                <button className="btn btn-primary me-2">Loign</button>
                {/* <Link to="/register">New User? Register</Link> */}
                <h4 className="text-danger">{error}</h4>
            </form>
        </div>
    )
}