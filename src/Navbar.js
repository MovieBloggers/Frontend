import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

const Navbar = () => {
    console.log(localStorage)
    window.addEventListener("load", function(){
        if(localStorage.getItem('loggedin') != null){
            document.getElementById('login').style.display = "none"
            document.getElementById('signup').style.display = "none"
            document.getElementById('logout').style.display = "block"
            // document.getElementsByClassName('loggedout').style.display = "none"
        }
        // else{
        //     document.getElementById('login').style.display = "block"
        //     document.getElementById('signup').style.display = "block"
        //     document.getElementById('logout').style.display = "none"

        // }
    });
    function handleLogout(){
        localStorage.clear();
        document.getElementById('login').style.display = "block"
        document.getElementById('signup').style.display = "block"
        document.getElementById('logout').style.display = "none"
        window.location.assign('/')
    }

    return (
        <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{paddingLeft:"2%",paddingRight:"2%"}}>
        <Link class="navbar-brand" to="/">BingeBlog</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            {/* <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li> */}
            <li class="nav-item">
              <Link class="nav-link" to="/editor">Edit</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blogs">Blogs</Link>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> */}
          </ul>
          <Link to="/login"  id ="login" className="loggedout btn btn-outline-success m-2 my-sm-0">Login</Link>
          {/* <Link></Link> */}
          <Link to="/signup" id ="signup" className="loggedout btn btn-outline-success m-2 my-sm-0">SignUp</Link>  
          {/* <Link to="/signup" id ="signup" className="loggedout btn btn-outline-success m-2 my-sm-0">SignUp</Link> 
                   */}
          <button id="logout" className="btn btn-outline-danger m-2 my-sm-0" style={{display:"none"}} onClick={()=>handleLogout()}>Logout</button>
          {/* <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
      
        </>
    )
}

export default Navbar
