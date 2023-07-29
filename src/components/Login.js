import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Login = () => {

    const {state,dispatch} = useContext(UserContext)

    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch("https://mernserver-wsyc.onrender.com/signin",{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,password
            }) 
        });
        const data = res.json()
        if(res.status === 400 || !data){
            alert("Invalid Credentials");
            console.log("Invalid Credentials");
        }
        else{
            alert("Login Successful")
            console.log("Login Successful");
            dispatch({type:"USER",payload:true})
            console.log(state);
            navigate("/")
        }
    }

  return (
    <div>
        <div className='text-center my-3'>
            <h2>Log In Page</h2>
        </div>
        <div className='d-flex justify-content-center'>
       
        <form method='POST'>
            
            <div className="form-group my-3">
                <label htmlFor="email">
                <input type="email" className="form-control" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" autoComplete='off' />
                </label>
            </div>
            
            <div className="form-group my-3">
                <label htmlFor="password">
                <input type="password" className="form-control" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" autoComplete='off' />
                </label>
            </div>
            {/* <div className="form-group my-3">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control"  placeholder="Enter email" autoComplete='off' />
            </div> */}
          
    
            <button type="submit" onClick={loginUser} className="btn btn-primary">Log In</button>
        </form>
        </div>
        
    </div>
  )
}

export default Login
