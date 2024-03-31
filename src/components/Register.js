import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Register(props) {
  const [formData, setFormData] = useState({}); // curly brackets because it is object
  const navigate = useNavigate();

  const handleData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  }; //handleData() eliminates using seperate hook-useState for input component.
  //e.g. we need one more input type then instead of using useState for that we will just add new input type and onChange we will give this handleData()

  const addUser = (e) => {
    e.preventDefault();
    const data = JSON.stringify(formData);
    localStorage.setItem("gfg", data);
    navigate("/login");
  };

  return (
    <div className="container">
      
      <form onSubmit={addUser}>
      <div class="card" style={{width:18+'rem',margin:'100px auto',padding:'50 px auto'}}>
  
  <div class="card-body">
    <h5 class="card-title" >Register</h5>
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

<button className="btn btn-primary" style={{margin:'10px auto',padding:'10px auto'}}>Add User</button>
  </div>
</div>
        {/* <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          onChange={handleData}
          required
        ></input> */}

        {/* <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleData}
          required
        ></input> */}

        
      </form>
    </div>
  );
}
export default Register;
