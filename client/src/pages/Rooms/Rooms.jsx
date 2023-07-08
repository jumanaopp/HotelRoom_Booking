import React, { useEffect, useState } from "react";
import UserNavM from "../../components/NavBar/UserNavM";
import axios from "axios";
import './rooms.css';
import 'antd/dist/reset.css'

import { DatePicker, Space } from 'antd';
import  moment from 'moment'
import { Link } from "react-router-dom";

export default function Rooms() {
  const [input, setInput] = useState({});
  const [Room, setRoom] = useState([]);
  const [fromdate,setfromdate] = useState()
  const [todate,setTodate] = useState()
  // const [duplicateRooms,setduplicateRooms]= useState([])
  // const { RangePicker } = DatePicker;
  
 
//   useEffect(() => {
//     axios.get(`http://localhost:8000/viewbooking/filterdata?fromdate=${fromdate}&todate=${todate}`).then((res)=>{
// console.log(res);
// setRoom(res.data.details)

//     })
// },[fromdate,todate])

// console.log(fromdate);
// console.log(todate);
    
useEffect(() => {
  axios.get("http://localhost:8000/viewroom/roomdetails").then((data) => {


// setduplicateRooms(Room) 
//   var tempRooms ;

// for (const room of duplicateRooms) {
//   var available = false;
  
//   if (room.currentBooking.length > 0) {
//     for (const booking of room.currentBooking) {
//       const checkin = moment(booking.checkin, 'DD-MM-YYYY');
//       const checkout = moment(booking.checkout, 'DD-MM-YYYY');
      
//       if (!moment(from[0]).isBetween(checkin, checkout, null, '[]') &&
//           !moment(to[1]).isBetween(checkin, checkout, null, '[]') &&
//           fromdate[0] !== checkin.format('DD-MM-YYYY') &&
//           fromdate[0] !== checkout.format('DD-MM-YYYY') &&
//           todate[1] !== checkin.format('DD-MM-YYYY') &&
//           todate[1] !== checkout.format('DD-MM-YYYY')) {
//         available = true;
//       }
//     }
//   } else {
//     available = true;
//   }

//   if (available === true) {
//     tempRooms.push(room);
//   }
// }

// setRoom(tempRooms);

    setRoom(data.data.details)
  })

},[])


  // function matchDate(from,to){
  //   console.log(from);
  // const fromDate = moment(from[0]).format('YYYY-MM-DD');
  // const toDate = moment(to[1]).format('YYYY-MM-DD');
  // setfromdate(fromDate);
  // setTodate(toDate);

  // }


  return (
    <>
      <UserNavM />
<br /><br /><br />
      
    <div className="row">
    <div className="col-md-4"></div>
    {/* <RangePicker showTime format='YYYY-MM-DD' onChange={matchDate}/> */}
    </div>
<br/><br/><br/><br/><br/>

      <section class="rooms-section spad">
        <div className="container">
          <div className="row">


         { Room.map((rooms,key) => (

 

            <div class="col-lg-4 col-md-6">
              <div class="room-item">
                <img src={`assets/img/room/${rooms.image}`}   height={"250px"} width={"50px"} alt="" />
                <div class="ri-text">
                  <h4>{rooms.room} </h4>
                 <p> {rooms.status==='0' ? 'Available' : 'Not available'}</p>
                  <h3>
                    {rooms.rate}$<span>/Pernight</span>
                  </h3>
                  <table>
                    <tbody>
                      <tr>
                        <td class="r-o">Size:</td>
                        <td>{rooms.size}</td>
                      </tr>
                      <tr>
                        <td class="r-o">Capacity:</td>
                        <td>{rooms.capacity}</td>
                        
                      </tr>
                      <tr>
                        <td class="r-o">Bed:</td>
                        <td>{rooms.bed}</td>
                      </tr>
                      <tr>
                        <td class="r-o">Services:</td>
                        <td>{rooms.services}...</td>
                      </tr>

                      
                    </tbody>
                  </table>
                
                 
                 {/* 
              {rooms.status === '0' ? <button type="submit" className="booknow">Book Now</button> : <button type="submit" className="booknow" disabled>Not Available</button>} */}
              {rooms.status === '0' ? <Link  to={`/booking/${rooms._id}`}>Book Now</Link>  : <button type="submit"  className="booknow" disabled>Not Available</button>} 

             {/* <Link  to={`/booking/${rooms._id}`} className="booknow">Book Now</Link> 
              */}
                       </div>
              </div>
            </div>

            ))}
          </div>
        </div>
      </section>
      
    </>
  );
 
}
