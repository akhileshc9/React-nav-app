import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from 'react-router-dom'
function Portfolio(props) {
  const [formData, setFormData] = useState({});
  const {uname} = useParams()
  const navigate = useNavigate();
  const userData = localStorage.getItem('gfg')
    const data = JSON.parse(userData)

    const logout = ()=>{
      navigate('/login')
    }
  return (
    <div>
      Portfolio for :   {data.uname}
      <div>
      <button className="btn btn-danger" onClick={logout}>Log Out</button>
      </div>
    </div>
    
  )
}

export default Portfolio
