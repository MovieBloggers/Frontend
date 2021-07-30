import React,{useState} from 'react'
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './Nav.css';

const Login = (props) => {
  const [info, setinfo] = useState({email:'',password:''})
  function handleLogin(e,details){
      e.preventDefault()
      
      console.log(details)
      fetch('https://bingelist-backend-asfxz.run-ap-south1.goorm.io/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(details)
      })
        .then(res => (res.ok)? (res.json()):('notoksignup'))
        .then(json => {
          console.log(json)
          localStorage.setItem('token', json.token);
          localStorage.setItem('loggedin',true)
          window.location.assign('/editor')
        });
    //   fetch('https://bingelist-backend-asfxz.run-ap-south1.goorm.io/')
  }
  return (
    <div>
           <form onSubmit={(e)=>handleLogin(e,info)}>
         <div className='form-inner'>
         <Link to='/'><FaTimes style={{color:'red' , cursor:'pointer',float:'right'}}/></Link>
         <h2 style={{color:"black",fontFamily:"Times New Roman"}} align="center"><b><u>Log In</u></b></h2>
         <div className='form-group'>
        <label htmlFor="email" style={{color:"black",fontFamily:"Times New Roman",fontSize:"3vh"}}><b>Email</b></label>
         <input
          type="text"
          name="email"
          value={info.email}
          onChange={(e)=>setinfo({...info,email:e.target.value})}
          required
        />
        </div>
        <div className='form-group'>
        <label htmlFor="password" style={{color:"black",fontFamily:"Times New Roman",fontSize:"3vh"}}><b>Password</b></label>
        <input
          type="password"
          name="password"
          value={info.password}
          onChange={(e)=>setinfo({...info,password:e.target.value})}
          required
        />
        </div>
        <input type="submit" align="center"/>
        </div>
      </form>
    </div>
  )
}

export default Login
