import React, { useState,useEffect } from 'react'

const Contact = () => {

  // const navigate = useNavigate();
  const [userData, setUserData] = useState({name:"",email:"",phone:"",message:""})
  const userContact = async () => {
      try {
          const res = await fetch("/getData",{
              method:"GET",
              headers:{
                  "Content-Type" : "application/json"
              },
          })
          const data = await res.json();
          console.log(data);
          setUserData({...userData,name:data.name,email:data.email,phone:data.phone})

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
      userContact();
  }, [])

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({...userData,[name]:value})
  }

  const contactForm = async (e) => {
    e.preventDefault();
    const {name,email,phone,message} = userData; 
    const res = await fetch("/contact",{
      method:"POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        name,email,phone,message
      })
    })
    const data = await res.json();
    if(!data){
      console.log("Message not Send");
    }else{
      alert("Message Send");
      setUserData({...userData,message:""})
    }
  }

  return (
    <>
      <div className='container my-4'>
        <div className='row justify-content-evenly text-center'>
            <div className='col-3'>
                <h6>Phone</h6>
                <p>+91 1234567089</p>
            </div>
            <div className='col-3'>
                <h6>Email</h6>
                <p>contact@gmail.com</p>
            </div>
            <div className='col-3'>
                <h6>Address</h6>
                <p>Ahmedabad, India</p>
            </div>
        </div>
      </div> 
      <div className='container'>
        <div className='row' >
            <div className='col text-center'>
                <h2>Contact Form</h2>
            </div>
        </div>
        <div className='row justify-content-evenly'>
            <form className='row justify-content-evenly' method='POST' >
                <div className='col-3 my-3' >
                    <input type="text" placeholder='Name' name='name' onChange={handleInputs} value={userData.name} />
                </div>
                <div className='col-3 my-3' >
                <input type="email" placeholder='Email' name='email' onChange={handleInputs} value={userData.email} />
                </div>
                <div className='col-3 my-3' >
                <input type="number" placeholder='Phone' name='phone' onChange={handleInputs} value={userData.phone} />
                </div>
                <div className='col-11 my-3'>
                <textarea rows="10" cols="100" placeholder='Enter Message' name='message' onChange={handleInputs} value={userData.message} />
                </div>
                <div className='col-2 my-3'>
                    <button type='submit' onClick={contactForm} className='btn btn-primary'>Send Message</button>
                </div>
            </form>    
        </div>
      </div>
    </>
  )
}

export default Contact
