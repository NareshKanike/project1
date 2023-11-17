import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {MainComponent} from './components/main-component/main.component';
import { Login } from './components/login/login';
import {Unregistered} from './components/unregister/unregister';
import { Register } from './components/register/register';
import { AdminLogin } from './components/Aminlogin/adminlogin';
import { Passgenerate } from './components/passgenerator/buspass';
import { Passrequest } from './components/passrequest/passrequest';
import { Lastpage } from './components/lastpage/lastpage';
import { Dashboard } from './components/admindashboard/dashboard';
import {Users } from './components/users/user';
import Contact from './components/mail/mail';
import { Payment } from './components/payment/payment';


function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
      <header className="d-flex mt-2 justify-content-between p-2 bg-dark text-white">
        <div>
          <h2><Link className='text-white text-decoration-none' to="/">Bus Pass Generation</Link></h2>
        </div>
        <div>
          <Link to='/login' className="btn btn-danger">User Signin</Link>
          {/* <button className="btn btn-danger ms-2">Admin signin</button> */}
          <Link to="/adminlogin" className="btn btn-danger ms-2">Admin signin</Link>
        </div>
      </header>
      <section className='d-flex justify-content-center align-items-center' style={{height:'90vh',backgroundColor:"rgba(60, 242, 236, 0.285)",margin:"auto"}}>
       <div>
        <Routes>
          <Route path='/' element={<MainComponent/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/unregister' element={<Unregistered/>}/>
          <Route path="/register" element={<Register/>}/>    
          <Route path="/adminlogin" element={<AdminLogin/>}    />
          <Route path="/passgenerator" element={<Passgenerate/>}/>
          <Route path="/userpassrequest" element={<Passrequest/>}/>
          <Route path="/lastpage" element={<Lastpage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/mail" element={<Contact/>}/>
          <Route path="/payment" element={<Payment/>}/>
        </Routes>
       </div>
      </section>
      </BrowserRouter>
    </div>  
  );
}

export default App;
