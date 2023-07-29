import React, { useEffect,useState } from 'react'
import Logo from "./images/logo4.jpg"
import {useNavigate} from "react-router-dom"

const About = () => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState({})
    const classlAboutPage = async () => {
        try {
            const res = await fetch("/about",{
                method:"GET",
                headers:{
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials:"include"
            })
            const data = await res.json();
            console.log(data);
            setUserData(data)

            if(!res.status === 200){
                const error = new Error("res.error")
                throw error;
            }

        } catch (error) {
            console.log(error);
            navigate("/login")
        }
    }

    useEffect(() => {
        classlAboutPage();
    }, [])

  return (
    <>
        <div className='container'>
            <form method='GET'>
                <div className='row'>
                    <div className='col-md-4'>
                    <div className='profile-img'>
                        <img src={Logo} alt='' width="130"  />
                    </div>
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <h5>{userData.name}</h5>
                            <h6>{userData.work}</h6>
                            <p>RANKINGS <span>1/10</span></p>
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className='nav-link active' id='home-tab' data-toggle="tab" href="#home" role="tab">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className='nav-link ' id='profile-tab' data-toggle="tab" href="#profile" role="tab">Timeline</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <input type="submit" className='profile-edit-btn' name='btnAddMore' value="Edit Profile" />
                    </div>
                </div>
                <div className='row'>
                <div className='col-md-4'>
                <div className='profile-work'>
                    <p>WORK LINK</p>
                    <a href=''>Youtube</a><br />
                    <a href=''>Instagram</a><br />
                    {/* <a href=''>Nen Tech</a><br /> */}
                    <a href=''>MERN Github Dev</a><br />
                    <a href=''>Web Developer</a><br />
                    <a href=''>Figma</a><br />
                    <a href=''>Software Engineer</a><br />
                </div>
                </div>
                <div className='col-md-8 pl-5 about-info'>
                    <div className='tab-content profile-tab' id="myTabContent">
                        <div className='tab-pane fade show active' id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className='row'>
                                <div className='col-md-6'>
                                    <label>User ID</label>
                                </div>
                                <div className='col-md-6'>
                                    <p>11234567845678</p>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-md-6'>
                                    <label>Name</label>
                                </div>
                                <div className='col-md-6'>
                                    <p>{userData.name}</p>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-md-6'>
                                    <label>Email</label>
                                </div>
                                <div className='col-md-6'>
                                    <p>{userData.email}</p>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-md-6'>
                                    <label>Phone</label>
                                </div>
                                <div className='col-md-6'>
                                    <p>{userData.phone}</p>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-md-6'>
                                    <label>Profession</label>
                                </div>
                                <div className='col-md-6'>
                                    <p>{userData.work}</p>
                                </div>
                            </div>
                        </div>
                        <div className='tab-pane fade' id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="row">
                                <div className='col-md-6'>
                                    <label>Experience</label>
                                </div>
                                <div className='col-md-6'>
                                    <p>Expert</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-md-6'>
                                    <label>Hourly Rate</label>
                                </div>
                                <div className='col-md-6'>
                                    <p>$20/hr</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-md-6'>
                                    <label>Total Projects</label>
                                </div>
                                <div className='col-md-6'>
                                    <p>230</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-md-6'>
                                    <label>English Level</label>
                                </div>
                                <div className='col-md-6'>
                                    <p>Expert</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-md-6'>
                                    <label>Avalibility</label>
                                </div>
                                <div className='col-md-6'>
                                    <p>6 months</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default About