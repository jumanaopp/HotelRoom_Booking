import React, { useEffect, useState } from "react";
import "./login.css";
import UserNav from "../../components/NavBar/UserNav";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useState([]);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const validate = (values) => {
    var error = {};
    if (!values.username) {
      error.username = "enter  username";
    }
    if (!values.password) {
      error.password = "enter password";
    }

    return error;
  };

  const submit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(input));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
     
        console.log(input);
        axios
          .post("http://localhost:8000/login/checklogin", input)
          .then((data) => {
            console.log(data);
            const token = localStorage.setItem("user", data.data.token);

            if (data.data.success == true) {
              if (data.data.role == 0) {
                navigate("/adminindex");
              } else {
                navigate("/userindex");
              }
            }
          });
     
    }
  };

  //
  return (
    <>
      <UserNav />
      <br />
      <br />
      <div
        className="form-container"
        style={{ backgroundImage: "/assets/img/bg.jpg" }}
      >
        <h2 style={{ color: "#dfa974" }}>SignIn </h2>
        <div className="form-group">
          <span style={{ color: formErrors.username ? "red" : "" }}>
            {formErrors.username}
          </span>

          <input
            placeholder="username"
            name="username"
            onChange={inputChange}
            onClick={() => {
              setFormErrors({ ...formErrors, username: "" });
            }}
          />
        </div>

        <div className="form-group">
          <span style={{ color: formErrors.password ? "red" : "" }}>
            {formErrors.password}
          </span>

          <input
            placeholder="Password"
            name="password"
            onClick={() => {
              setFormErrors({ ...formErrors, password: "" });
            }}
            onChange={inputChange}
          />
        </div>

        <div className="form-group">
          <button type="button" onClick={submit}>
            <a href={"/userindex"}>Log In</a>
          </button>
        </div>

        <div className="form-group">
          <button type="submit">Create a New Account</button>
        </div>
      </div>
    </>
  );
}
