import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export function MainComponent(){
   const [users,setUsers]=useState([]);
   const [userEmail,setUserEmail]=useState('');
   const navigate=useNavigate();

   function handleEmailChange(e){
      setUserEmail(e.target.value);
   }

function handleGetStartedClick(){
   axios({
      method:'get',
      url:'http://127.0.0.1:5000/users'
   }).then((response=>{
     // setUsers(response.data);
     for(var user of response.data){
      if(user.Email===userEmail){
         navigate('/login')
         break;
      }else{
         navigate('/unregister');
      }
     }
   }))
}

    return(
       <div>
          <main>
        <h1>Student bus pass</h1>
        <p>Add details and get pass</p>
        <div>
           <div className='input-group'>
             <input type='email' onChange={handleEmailChange} placeholder='enter your email' className="form-control" /> <button onClick={handleGetStartedClick}  className='btn btn-danger'> Get Started <span className='bi bi-chevron-right'></span> </button>
           </div>
        </div>
       </main>
       </div>
    )
}