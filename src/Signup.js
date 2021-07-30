import React,{useState} from 'react'
import {FaTimes} from 'react-icons/fa'
import './Nav.css';
import { Link } from 'react-router-dom';
const Signup = (props) => {
  const [info, setinfo] = useState({name:'',password:'',email:''})
  function handleSignup(e,details){
    e.preventDefault()
    
    console.log(details)
    fetch('https://bingelist-backend-asfxz.run-ap-south1.goorm.io/users', {
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
    });
  //   fetch('https://bingelist-backend-asfxz.run-ap-south1.goorm.io/')
}
  return (
    <>
           <form onSubmit={e => handleSignup(e,info)}>
         <div className='form-inner'>
         <Link to='/'><FaTimes style={{color:'red' , cursor:'pointer',float:'right'}}/></Link>
         <h2 style={{color:"black",fontFamily:"Times New Roman"}} align="center"><b><u>Sign  Up</u></b></h2>
         <div className='form-group'>
         <label htmlFor="name" style={{color:"black",fontFamily:"Times New Roman",fontSize:"3vh"}}><b>Username</b></label>
         <input
          type="text"
          name="name"
          value={info.name}
          onChange={(e)=>setinfo({...info,name:e.target.value})}
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
        <div className='form-group'>
        <label htmlFor="email" style={{color:"black",fontFamily:"Times New Roman",fontSize:"3vh"}}><b>E-mail</b></label>
        <input
          type="email"
          name="email"
          value={info.email}
          onChange={(e)=>setinfo({...info,email:e.target.value})}
          required
        />
        </div>
        <input type="submit" />
        </div>
      </form>
      
    </>
  )
}

export default Signup
