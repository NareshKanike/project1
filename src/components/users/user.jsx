import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./users.css";

export function Users(){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/newpassrequest')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])
    return(
        <div>
            <div>
                <h3>New pass application details</h3>
                <table className="table">
                    <thead>
                        <tr>
                                <th>name</th>
                                <th>DOB</th>
                                <th>Age</th>
                                <th>Mobile number</th>
                                <th>Gender</th>
                                <th>Aadhar no</th>
                                <th>city</th>
                                <th>generate pass</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user,index)=>{
                                return <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.DateOfBirth}</td>
                                    <td>{user.Age}</td>
                                    <td>{user.Mobile_number}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.aadhar_no}</td>
                                    <td>{user.city}</td>
                                    <td><Link to="/passgenerator">generate</Link></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

   