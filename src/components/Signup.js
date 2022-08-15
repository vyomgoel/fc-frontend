import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BACKEND_URI } from "../const";
const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    mail: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    console.log(credentials);
    const response = await fetch(`${BACKEND_URI}/api/auth/createuser`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert("Acount Created Successfully", "success");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container mt-3">
        <h2>Create an acount to use FlashChat</h2>
        <form onSubmit={handleClick}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              value={credentials.name}
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={onChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={credentials.email}
              type="text"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={onChange}
              name="email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={credentials.password}
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={onChange}
              name="password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              value={credentials.cpassword}
              type="password"
              className="form-control"
              id="cpassword"
              placeholder="Password"
              onChange={onChange}
              name="cpassword"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      ;
    </>
  );
};

export default Signup;
