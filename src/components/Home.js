import React, { useState,useEffect } from 'react'

const Home = () => {

  const [userName, setUserName] = useState("")
  const [show,setShow] = useState(false)

  const userHomePage = async () => {
    try {
        const res = await fetch("/getData",{
            method:"GET",
            headers:{
                "Content-Type" : "application/json"
            },
        })
        const data = await res.json();
        console.log(data);
        setUserName(data.name)
        setShow(true)

        if(!res.status === 200){
            const error = new Error("res.error")
            throw error;
        }

    } catch (error) {
        console.log(error);
        // navigate("/login")
    }
}

useEffect(() => {
    userHomePage();
}, [])


  return (
    <div>
        {/* <div className='container-fluid' style={{"backgroundColor" : "blue"}}>
    <div className='row justify-content-center align-item-center'>
        <div className='col-5' style={{"backgroundColor" : "red"}}>
        <div className='row justify-content-center align-content-center' style={{"backgroundColor" : "yellow"}}>
            <div className='col-4' style={{"backgroundColor" : "pink"}} >Helloo</div>
            <div className='col-4' style={{"backgroundColor" : "grey"}}>Guysssss</div>
        </div>
        </div>
        <div className='col-5' style={{"backgroundColor" : "green"}}>
        <p>Welcome Home Everyone</p>
        </div>
    </div>
    </div> */}
        {/* <p>Welcome</p> */}
        <h1 className='text-center pt-5 mt-auto text-primary'>Welcome {userName}</h1>
        {/* <h1 className='text-center'>We are <span className='demo'>MERN</span> Developers</h1> */}
        <h4 className='text-center text-danger'>{show?"Happy to see U":"MERN DEVELOPERS"}</h4>
    </div>
    
  )
}

export default Home
