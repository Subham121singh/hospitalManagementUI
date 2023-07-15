import React, { useState } from "react";
import axios from "axios";
import "./App.css";
function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with the user data
    const userData = {
      username,
      password,
      email,
    };

    // Send the user data to the /public/register endpoint using Axios
    axios
      .post("http://localhost:8080/public/register", userData)
      .then((response) => {
        // Handle the response from the server
        console.log(response.data); // You can perform any additional actions based on the response
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
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
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
