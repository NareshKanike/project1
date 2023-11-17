import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export function Passrequest(){

    const navigate = useNavigate();
    const [userError, setUserError] = useState('');
    const [errorClass, setErrorClass] = useState('');
     const [user, setUser] = useState({name:'', DateOfBirth:'',Age:'',Mobile_number:'',gender:'',aadhar_no:"",email:"",city:""});

    function handleNameChange(e){
        setUser({
            name: e.target.value,
            DateOfBirth:user.DateOfBirth,
            Age: user.Age,
            Mobile_number:user.Mobile_number,
            gender:user.gender,
            aadhar_no:user.aadhar_no,
            email:user.email,
            city:user.city

        })
    }

    function handlebirthChange(e){
        setUser({
            name: user.name,
            DateOfBirth:e.target.value,
            Age: user.Age,
            Mobile_number:user.Mobile_number,
            gender:user.gender,
            aadhar_no:user.aadhar_no,
            email:user.email,
            city:user.city

        })
    }

    function handleAgeChange(e){
        setUser({
            name: user.name,
            DateOfBirth:user.DateOfBirth,
            Age:e.target.value,
            Mobile_number:user.Mobile_number,
            gender:user.gender,
            aadhar_no:user.aadhar_no,
            email:user.email,
            city:user.city

        })
    }

    function handleMobileChange(e){
        setUser({
            name:user.name,
            DateOfBirth:user.DateOfBirth,
            Age: user.Age,
            Mobile_number:e.target.value,
            gender:user.gender,
            aadhar_no:user.aadhar_no,
            email:user.email,
            city:user.city

        })
    }

    function handleGenderChange(e){
        setUser({
            name:user.name,
            DateOfBirth:user.DateOfBirth,
            Age: user.Age,
            Mobile_number:user.Mobile_number,
            gender:e.target.value,
            aadhar_no:user.aadhar_no,
            email:user.email,
            city:user.city

        })
    }

    function handleAdharChange(e){
        setUser({
            name: user.name,
            DateOfBirth:user.DateOfBirth,
            Age: user.Age,
            Mobile_number:user.Mobile_number,
            gender:user.gender,
            aadhar_no:e.target.value,
            email:user.email,
            city:user.city

        })
    }

    function handleMailChange(e){
        setUser({
            name:user.name,
            DateOfBirth:user.DateOfBirth,
            Age: user.Age,
            Mobile_number:user.Mobile_number,
            gender:user.gender,
            aadhar_no:user.aadhar_no,
            email:e.target.value,
            city:user.city

        })
    }

    function handleCityChange(e){
        setUser({
            name:user.name,
            DateOfBirth:user.DateOfBirth,
            Age: user.Age,
            Mobile_number:user.Mobile_number,
            gender:user.gender,
            aadhar_no:user.aadhar_no,
            email:user.email,
            city:e.target.value

        })
    }

    function handleSubmit(){
        axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/userpassrequest',
            data: user
        })
        alert('Registered Successfully');
        navigate('/payment');
    }

    return(
        <div>
            <h2> <span className="bi bi-person-fill"></span>  Apply Student General Buspass</h2>
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" onChange={handleNameChange} /></dd>
                    <dt>Date_of_birth</dt>
                    <dd><input type="text" onChange={handlebirthChange} /></dd>
                    <dt>Age</dt>
                    <dd><input type="text" onChange={handleAgeChange} /></dd>
                    <dt>Mobile_Number</dt>
                    <dd><input type="text" onChange={handleMobileChange} /></dd>
                    <dt>Gender</dt>
                    <dd><input type="text" onChange={handleGenderChange} /></dd>
                    <dt>Aadhar</dt>
                    <dd><input type="text" onChange={handleAdharChange} /></dd>
                    <dt>email</dt>
                    <dd><input type="email" onChange={handleMailChange} /></dd>
                    <dt>city</dt>
                    <dd><input type="text" onChange={handleCityChange} /></dd>
                </dl>
                <button className="btn btn-primary">Register</button>
                <p>Existing User? <Link to="/">Login</Link> </p>
            </form>
        </div>
    )
}