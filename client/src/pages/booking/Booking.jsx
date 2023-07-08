import React, { useEffect, useState } from 'react'
import UserNavM from '../../components/NavBar/UserNavM'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import moment from 'moment'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Booking() {
  const {id}= useParams()
// const {fromdate} = useParams()
// const {todate} = useParams()

console.log(id);
 const [input,setInput] = useState({room_id:id})
 const [booking,setBooking] = useState([])
// console.log(input);
// console.log(fromdate);
// console.log(todate);
 const inputChange = (e) => {
  const { name, value } = e.target;
  setInput({ ...input,[name]: value });
}

const token = localStorage.getItem('user')
console.log(token);

  const submit = async (e)=> {
    e.preventDefault();
      try {
      console.log(input);
      axios.post(`http://localhost:8000/booking/savebooking/${id}`,input,
      { headers:{"Authorization" : `Bearer ${token}`} }).then((data)=>{
       
       console.log(input);
       toast.success(data.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

        
      }).catch((error)=>{console.log(error);
      })
    } catch (error) {}

    

  };
    
  const calculationDuration = () => {
    const fromdate = new Date(booking.fromdate)
    const todate = new Date(booking.todate)
    const durationInMilliseconds = todate - fromdate;
    const durationinDays = Math.ceil(durationInMilliseconds / (1000 * 60 * 60 * 24))
    return durationinDays
  }

  let price = 0;
  const calculationprice = () => {
    const  basepayment = 600;
    
    const additionalGuestcharge = 300;
    const stayDuration = calculationDuration()
    const totalPrice = basepayment * stayDuration + additionalGuestcharge;
    price = totalPrice;
    return totalPrice;
    console.log(totalPrice);
 
  }
  useEffect(() => {
    setBooking({ ...input, payment:price})
  }, [price])
  


  
  return (
    <>
    <UserNavM/>
    <br/><br/><br/>
    {/* <div data-aos="fade-left"> */}
    <div class="form-container">
    <ToastContainer/>
    <h2 style={{color:"#dfa974"}}>Room Booking </h2>
    <form>
   
    <div class="form-group">
        <label for="checkin">Check-in Date:</label>
        <input type="date" id="checkin" name="fromdate"  onChange={inputChange} required/>
      </div>
      
      <div class="form-group">
        <label for="checkout">Check-out Date:</label>
        <input type="date"  name="todate"  onChange={inputChange} required/>
      </div>
      
      <div class="form-group">
        <label for="name">Amount</label>
        <input type="text"  name="payment"  value={calculationprice()} onChange={inputChange} required/>
      </div>
     
      <div class="form-group" >
        <button type="submit" onClick={submit}>Book Now</button>
      </div>
    </form>
  </div>
  
    </>


  )
}
