
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import UserNavM from '../components/NavBar/UserNavM'

export default function Profile() {

    const [profile,setProfile] = useState([])
    const token = localStorage.getItem('user')
    console.log(profile);

    useEffect(() => {
        axios.get('http://localhost:8000/profile/view-bookings',{
            headers :{ "Authorization":  `Bearer ${token}`}
          }).then((res)=>{
            // console.log(res);
              setProfile(res.data.data)
             
              
             
          }).catch((error)=>{
            console.log(error);
          })
         },[]) 
    
 const cancelbtn=(id) =>{
  console.log(id);
       
  axios.get(`http://localhost:8000/profile/deletebooking/${id}`)
  .then((res)=>{
    console.log(res);
  //   console.log(res.data);
    window.location.reload()
  })
 }  
  return (
    <>
<UserNavM/>
{/* <div class="card content-center text-center" style={{width:"40rem",height:"600px",marginLeft:"450px" }}> */}
<div class="row">
 {/* Hi  {profile.user}!!! <br/>  */}
 
{
   profile.map((data,key) => (
    <p class="card-text"> 
     <div class="col-md-4">
       Id:{data._id} <br/>
      
       Fromdate{data.fromdate}<br/>
       Todate: {data.fromdate}<br/>
       Room Name: {data.room} <br/>
       </div>
       <div class="col-sm-8">
       <img src={`assets/img/room/${data.image}`} class="card-img-top" alt="..." height={"250px"} width={"450px"}/><br/>
       <a href="#" class="btn btn-danger" onClick={()=>{cancelbtn(data._id)}}>Booking Cancel</a>
    
 
          </div>
          
      </p>
      ))}
   
  
  </div>
  {/* <div class="card-body">
    <h5 class="card-title text-success fw-bold">Booked</h5>
  
  </div> */}
{/* </div> */}
    </>
  )
}
