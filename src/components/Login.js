import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URI } from "../../const";
const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BACKEND_URI}/api/auth/login`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert("Logged in Successfully", "success");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-2">
      <h2>Login to continue to FlashChat</h2>

      <form onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="email">Email address</label>
          <input
            value={credentials.email}
            onChange={onChange}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            value={credentials.password}
            onChange={onChange}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="password"
            placeholder="Password"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
