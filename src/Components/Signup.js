import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !address || !phoneNo) {
      alert("Fields can't be Empty");
    } else {
      const url = "http://localhost:8093/users/";
      const val = {
        name: name,
        email: email,
        password: password,
        address: address,
        phone: phoneNo,
      };
      axios.post(url, val).then(
        (res) => {
          console.log("Success");
          setName("");
          setPassword("");
          setEmail("");
          navigate("/");
        },
        (fail) => {
          alert("Error");
          console.log(fail);
        }
      );
    }
  };
  const divStyle = {
    margin: "auto",
    display: "table",
  };
  return (
    <body>
    <div className="container">
      <br />
      <h1 style={{ textAlign: "center" }}> Register yourself</h1>
      <br />
      <form class ="heading" style={divStyle}>
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
            id="Name"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="textbox"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className="form-control"
            id="address"
            placeholder="address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">phoneNo</label>
          <input
            type="tel"
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
            className="form-control"
            id="phoneNo"
            placeholder="phoneNo"
          />
          <br />
        </div>
        <span class="selectLabel" id="hotelLabel">Select role:</span>
<div class="selectWrapper">
  <select class="selectNative js-selectNative" aria-labelledby="hotelLabel" style={{ fontWeight: "8%"}} >
    <option>Admin</option>
    <option>User</option>
  </select>
  <div class="selectCustom js-selectCustom" aria-hidden="true" style={{ marginTop: "8%"}}>
  
  </div>
</div>
        <button type="submit" onClick={submit} className="btn btn-danger">
          Signup
        </button>
        <Link to="/">
          <button className="btn btn-success" style={{ marginLeft: "15px" }}>
            Login
          </button>
        </Link>
      </form>
    </div>
    </body>
  );
};

export default Signup;
