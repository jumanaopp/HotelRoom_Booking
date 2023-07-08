import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import AdminNavM from '../../components/NavBar/AdminNavM';
// import './edit.css'
export default function Edit() {

    const [edit,setEdit] = useState([])
    const navigate = useNavigate()
    const { id } =  useParams();

    const inputChange = (e) => {
        const { name, value } = e.target;
        setEdit({ ...edit, [name]: value });
      };



      useEffect(() => {
        
      axios.get(`http://localhost:8000/viewroom/roomone/${id}`).then((res) => {
        setEdit(res.data.details);
    });
}, []);
      
    const update = (e)=>{
        axios.post(`http://localhost:8000/updateroom/update/${id}`, edit).then((res) => {
  // console.log(res.data);
  navigate('/viewrooms');
}
)}

    
  return (
    <>
    
    <AdminNavM/>

<br />
<br />
<br />

<section class="rooms-section spad">
   
  <div class="form-container">
    <div class="row">
  
        <form>
      <div class="col-lg-4 col-md-6">
        <div class="room-item">
          <img src="assets/img/room/room-1.jpg" alt="" />
          {/* <div class="ri-text"> */}

            <h3 style={{color:"#dfa974"}}><center>Edit Room Details</center></h3>
            
             
           
            <div className="form-group">
            <h5> Room: </h5>
                 <input type="text" name="room" value={edit.room} onChange={inputChange}/>
               </div>
              
               <div className="form-group">
               <h5>Rate:</h5> 
                  <input type="text" name="rate" value={edit.rate} onChange={inputChange}/>
                  </div>
                
                  <div className="form-group">
                  <h5> Size:</h5>
                <input type="text" name="size" value={edit.size} onChange={inputChange}/>
                </div>
                <h5>Capacity: </h5>
                <div className="form-group">
                <input type="text" name="capacity" value={edit.capacity} onChange={inputChange}/>
                </div>
               <h5>Bed:</h5> 
                <div className="form-group">
                  <input type="text" name="bed" value={edit.bed} onChange={inputChange}/>
                  </div>
                  <h5>Services:</h5>
                  <div className="form-group">
                  <input type="text" name="services" value={edit.services} onChange={inputChange}/>
                  </div>
                  <div className="form-group">
                 <button type='submit' onClick={update}>Update &nbsp; &rarr;</button>
                 </div>            
                
          </div>
        </div>
    </form>
    </div>
  </div>
</section>

    </>
  )
}
