import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with the login credentials
    const loginData = {
      username,
      password,
    };

    // Send the login data to the /authenticate endpoint using Axios
    axios
      .post("http://localhost:8080/authenticate", loginData)
      .then((response) => {
        // Handle the response from the server
        const token = response.data.jwt; // Assuming the JWT token is returned as "token" in the response
        console.log("Token:", token);

        // Store the token in local storage or any other desired location
        localStorage.setItem("token", token);

        // You can perform any additional actions based on the response
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
