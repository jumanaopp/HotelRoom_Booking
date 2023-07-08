import React, { useState } from 'react'
import AdminNavM from '../../components/NavBar/AdminNavM'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function AddRoom() {
  const [input, setInput] = useState({});
  const [user, setUser] = useState([]);
  const [file, setFile] = useState();
console.log(input);
console.log(file);
  const inputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input,[name]: value });
  }

  const submit = async (e) => {
    e.preventDefault();
    try {
      console.log(input);
      if(file){
        const Data = new FormData()
        const filename = file.name
        Data.append('name',filename)
        Data.append('file',file) 
        
        axios.post("http://localhost:8000/addroom/upload", Data).then((data) => {
          console.log("file uploaded");
      })
      axios.post("http://localhost:8000/addroom/saveroom", input).then((data) => {
        // alert("New room added")
        console.log(data);
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
        
      }).catch((err)=>{
        console.log(err);
       
      })
    }
    }catch (error) {}
  }

  return (
     <>
    <AdminNavM/>
 <br/><br/>
<div class="form-container">
<ToastContainer/>
<h2 style={{color:"#dfa974"}}>Add Room </h2>
    <form>
    <div class="form-group">
        <label for="room">Room:</label>
        <select id="room" name="room" onChange={inputChange}>
          <option value="">Select a room</option>
          <option value="single">Single Room</option>
          <option value="double">Double Room</option>
          <option value="suite">Suite</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="rate">Rate:</label>
        <input type="text"  name="rate" onChange={inputChange}
                required/>
      </div>
      <div class="form-group">
        <label for="phno">Size:</label>
        <input type="text"  name="size" onChange={inputChange}
               />
      </div>
      
      <div class="form-group">
        <label for="name">Capacity:</label>
        <input type="text"  name="capacity" required onChange={inputChange}
               />
      </div>
      <div class="form-group">
        <label for="bed">Bed:</label>
        <input type="text"  name="bed" required onChange={inputChange}
               />
      </div>
      <div class="form-group">
        <label for="services">Services:</label>
        <input type="text"  name="services" required onChange={inputChange}
               />
      </div>
      <div class="form-group">
        <label for="services">Upload image</label>
        <input type="file" onChange={(e)=>{setFile(e.target.files[0]);setInput({ ...input,image: e.target.files[0].name })}} name="image"/>
      </div>
      <div class="form-group button">
        <input type="submit" value="Add Room"onClick={submit}/>
      </div>
    </form>
  </div>
    </>
  )
}
