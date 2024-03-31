import React, { useEffect, useState } from "react";
import {Navigate, useNavigate,useParams} from 'react-router-dom'
function Login(props) {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const {uname} = useParams()
  const addUser = (e) => {
    e.preventDefault();
    const userData = localStorage.getItem('gfg')
    const data = JSON.parse(userData)
    console.log(data);
    if(data.uname === formData.uname && data.email === formData.email){
      const un = data.uname
      navigate('/portfolio/un')
    }
    else{
      navigate('/login')
    }
  };
  const handleData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };
  return (
    
    <div className="container">
      
    <form onSubmit={addUser}>
    <div class="card" style={{width:18+'rem',margin:'100px auto',padding:'50 px auto'}}>
  
  <div class="card-body">
    <h5 class="card-title" >Log in</h5>
    <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          onChange={handleData}
          required
          style={{margin:'10px auto'}}
        ></input>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleData}
          required
          style={{margin:'10px auto'}}
        ></input>

<button className="btn btn-primary" style={{margin:'10px auto',padding:'10px auto'}}>Log in</button>
  </div>
</div>
      {/* <input
        type="text"
        placeholder="Enter Username"
        name="uname"
        onChange={handleData}
        required
      ></input>

      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        onChange={handleData}
        required
      ></input>

      <button className="btn btn-primary">Log in</button> */}
    </form>
  </div>
  )
}

export default Login
