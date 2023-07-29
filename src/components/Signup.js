import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()

    const [user,setUser] = useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:"",
    })

    let name,value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name] : value})
    }

    const postData = async (e) => {
        e.preventDefault();
        const {name,email,phone,work,password,cpassword} = user;
        const res = await fetch("/register",{
            method: "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        })
        const data = await res.json();
        if(res.status !== 200 || !data){
            alert("Invalid Registration");
            console.log("Invalid Registration");
        } 
        else{
            alert("Registration Successfull");
            console.log("Registration Successfull");
            navigate("/login")
        }
    }

  return (
    <div>
         <div className='text-center my-3'>
            <h2>Sign Up Page</h2>
        </div>
        <div className='d-flex justify-content-center'>
       
        <form method='POST'>
            <div className="form-group my-3">
                <label htmlFor="name">
                <input type="text" className="form-control" name="name" id="name" value={user.name} onChange={handleInputs} placeholder="Enter Name" autoComplete='off' />
                </label>
            </div>
            <div className="form-group my-3">
                <label htmlFor="email">
                <input type="email" className="form-control" name="email" id="email" value={user.email} onChange={handleInputs} placeholder="Enter Email" autoComplete='off' />
                </label>
            </div>
            <div className="form-group my-3">
                <label htmlFor="phone">
                <input type="number" className="form-control" name="phone" id="phone" value={user.phone} onChange={handleInputs} placeholder="Enter Phone number" autoComplete='off' />
                </label>
            </div>
            <div className="form-group my-3">
                <label htmlFor="work">
                <input type="text" className="form-control" name="work" id="work" value={user.work} onChange={handleInputs} placeholder="Enter Profession" autoComplete='off' />
                </label>
            </div>
            <div className="form-group my-3">
                <label htmlFor="password">
                <input type="password" className="form-control" name="password" id="password" value={user.password} onChange={handleInputs} placeholder="Enter Password" autoComplete='off' />
                </label>
            </div>
            <div className="form-group my-3">
                <label htmlFor="cpassword">
                <input type="password" className="form-control" name="cpassword" id="cpassword" value={user.cpassword} onChange={handleInputs} placeholder="Confirm Password" autoComplete='off' />
                </label>
            </div>
            {/* <div className="form-group my-3">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control"  placeholder="Enter email" autoComplete='off' />
            </div> */}
          
    
            <button type="submit" onClick={postData} className="btn btn-primary">Sign Up</button>
        </form>
        </div>
    </div>
  )
}

export default Signup
