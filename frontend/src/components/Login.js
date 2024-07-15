import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import login_image from '../assets/glownbloom.png';

export const Login = ({ onLogin }) => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleLogin=async(e)=>{
      e.preventDefault();
        try {
        
        const res=await axios.post("https://glowboom.onrender.com/api/login",{username,password});
      
        if(res.data.message==="login successful"){
          // alert("login success")
          onLogin();
          navigate('/admin');

        }else{
          alert('Invalid credentials');
        }
        } catch (error) {
        console.log(error)
        }
      }
      
    return (
      <div className='container'>
        <div className='login-main'>
          <div className='row'>
              <div className='col-md-2'></div>
              <div className='col-md-8'>
                  <div className='vt-main'>
                      <div className='row'>
                          <div className='col-md-6'>
                              <div className='login-image'>
                                  <img src={login_image} alt="login_image"></img>
                              </div>
                          </div>
                          <div className='col-md-6'>
                              <div className='vt-form'>
                                  <form onSubmit={handleLogin}>
                                      <span className='fields'>
                                          <label>Username</label>
                                          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                                      </span>
                                      <span className='fields'>
                                          <label>Password</label>
                                          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                      </span>
                                      <button className='login-button' type="submit">Login</button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='col-md-2'></div>
          </div>
      </div>
  </div>
    )
}


