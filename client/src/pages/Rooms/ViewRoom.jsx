import React, { useEffect, useState } from 'react'
import AdminNavM from '../../components/NavBar/AdminNavM';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function ViewRoom() {

    const navigate = useNavigate()
    const [input,setInput] = useState({});
    const [room,setRoom] = useState([]);
    
    const edit = (id)=> {
        navigate(`/edit/${id}`)
      }
      
      const deletebtn =  (id)=>{
        console.log(id);
       
        axios.get(`http://localhost:8000/deleteroom/delete/${id}`)
        .then((res)=>{
          console.log(res);
        //   console.log(res.data);
          window.location.reload()
        })
         }
  
    useEffect(() => {
      axios.get("http://localhost:8000/viewroom/allroomdetails").then((data) => {
        console.log(data);
        setRoom(data.data.details);
        console.log(room);
      });
    }, []);
  return (
    <>
      <AdminNavM/>

      <br />
      <br />
      <br />
      
      <section class="rooms-section spad">
        <div class="container">
          <div class="row">
         { room.map((room,key) => (

            <div class="col-lg-4 col-md-6">
              <div class="room-item">
                <img src={`assets/img/room/${room.image}`}   height={"250px"} width={"50px"}/>
                <div class="ri-text">
                  <h4>{room.room}</h4>
                  <h3>
                    {room.rate}$<span>/Pernight</span>
                  </h3>
                  <table>
                    <tbody>
                      <tr>
                        <td class="r-o">Size:</td>
                        <td>{room.size}</td>
                      </tr>
                      <tr>
                        <td class="r-o">Capacity:</td>
                        <td>{room.capacity}</td>
                      </tr>
                      <tr>
                        <td class="r-o">Bed:</td>
                        <td>{room.bed}</td>
                      </tr>
                      <tr>
                        <td class="r-o">Services:</td>
                        <td>{room.services}...</td>
                      </tr>
                    </tbody>
                  </table>
                 <hr/>
                  <tr>
                        {/* <td class="r-o"><button type='submit'>Edit</button></td> */}
                        <td><i class="fa-solid fa-trash-can" onClick={()=>{deletebtn(room._id)}}
                         
                         style={{fontSize:"30px",color:"#dfa974",float:"right"}}></i> 
    

                <td> <i class="fa-sharp fa-solid fa-pen-to-square" onClick={()=>{edit(room._id)}} style={{fontSize:"30px",color:"#dfa974",float:"right"}}> 
                    </i> </td>
       
                           
                            </td>
                      </tr>
                </div>
              </div>
            </div>

            ))}
          </div>
        </div>
      </section>
    
    </>
  )
}
