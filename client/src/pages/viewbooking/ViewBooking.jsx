import React, { useEffect, useState } from 'react'
import AdminNavM from '../../components/NavBar/AdminNavM'
import axios from 'axios'
import './viewbooking.css'
export default function ViewBooking() {

const [input,setInput] = useState({})
const [data,setdata] = useState([])
const token = localStorage.getItem('user')
    console.log(token);
useEffect(() => {
    
    axios.get('http://localhost:8000/profile/viewbooking',
        { headers :{ "Authorization":  `Bearer ${token}`}
        }).then((detail)=> {
    
    console.log(detail);
       setdata(detail.data.data)
      })
    }, [])
    
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
    <AdminNavM/>
    <br/><br/>
   


{/* <h2 style={{color:"#dfa974"}}> </h2> */}

    <form>
      <table>

        <tr><th>Booking Id  </th> 
        <th>Check-in Date </th>
        <th>Check-out Date </th>
        <th>Room Type </th>
        </tr>
       
        {
data.map((user,key)=>(    
        <tr>
            
        <td>{user._id}</td>
        
        <td>  {user.fromdate}</td>
      
        <td>{user.todate}</td>
        <td>{user.room}</td> 
     
        <a href="#" class="btn btn-danger" onClick={()=>{cancelbtn(user._id)}}>VACATE Room</a>
    
     
      {/* <div class="form-group button">
        <input type="submit" value="Vacate Room"/>
      </div> */}
      </tr>

))
}
      </table>
    </form>

  
    </>
  )
}
