import React, { useState } from "react";
import "./register.css";
import UserNav from "../../components/NavBar/UserNav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
export default function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name:"",
    phno:"",
    address:"",
    email:"",
    username:"",
    password:""
  })
  const [user, setUser] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const inputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input,[name]: value });
  }

  
  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^[6-9]\d{9}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
     
    
    if (!values.name) {
      errors.name = "User name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } 
    if (!values.phno) {
      errors.phno = "Contact Number is required!";
    }else if(!phoneno.test(values.phno)){
      errors.phno = "Enter valid Contact Number !";
    }
  
    if (!values.address) {
      errors.address = "Address is required!";
    }
   
   
    
    if (!values.email) {
      errors.email = "email is required!";
    }
     else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.repassword) {
      errors.repassword = "Confirmation Password is required";
    }
     else if (!strongPassword.test(values.password)){
      errors.password = "Password must contain alphabet, digit,special Charecters";
    }
    if(values.password!==values.repassword){
      errors.repassword = "Enter same password";
    }
    return errors;
  }
    


  const submit =  (e) => {
    e.preventDefault();
    setFormErrors(validate(input));
        setIsSubmit(true);
        if(Object.keys(formErrors).length === 0 && isSubmit){
     
      console.log(input);
      axios.post("http://localhost:8000/register/save", input).then((data) => {
        // alert("Registration Success")
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
        
        if (data.data.success == true) {
          navigate("/login");
        }
      }).catch((error)=>{console.log(error);
       
      })
   
  };
};
  return (
    <>
      <UserNav />
      <br />
      <div className="form-container">
      <ToastContainer/>
      <h2 style={{color:"#dfa974"}}>SignUp</h2>
      <form>
            <div className="form-group">
           
           
           
              <input
                placeholder="Name"
                name="name"
                onChange={inputChange}
                
              />
              <span style={{ color: formErrors.name ? "red" : "" }}>
              {formErrors.name}</span>
              
           </div>
        <div className="form-group">
              <input
                placeholder="Phone number"
                name="phno"
                onChange={inputChange}/>
                 <span style={{ color: formErrors.phno ? "red" : "" }}>
              {formErrors.phno}</span>
                 </div>
              
              <div className="form-group"><input
                placeholder="Address"
                name="address"
                onChange={inputChange}
               
              /></div>
             <div className="form-group">
              <input
                placeholder="Email"
                name="email"
                onChange={inputChange}
                
              />
               <span style={{ color: formErrors.email ? "red" : "" }}>
              {formErrors.email}</span>
                 
              </div>
               <div className="form-group">
              <input
                placeholder="Username"
                name="username"
                onChange={inputChange}
                
              /></div>
 <div className="form-group">
              <input
                placeholder="Password"
                name="password"
                onChange={inputChange}
                
              />
               <span style={{ color: formErrors.phno ? "red" : "" }}>
              {formErrors.phno}</span>
                 </div>
              {/* <span className='errormsg'>{formErrors.password}</span> */}
              {/* </div> */}
               <div className="form-group">
              
              <button type="submit"  onClick={submit}>
                Sign Up
              </button></div>
              <div className="form-group">
              <button type="submit">Log into Account</button>
            </div>
            </form>
          </div>
         
       
    </>
  );
}
