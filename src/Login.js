import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
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
        // Navigate to the dashboard page
        navigate("/dashboard");
        // You can perform any additional actions based on the response
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="form-input mt-1 block w-full rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="form-input mt-1 block w-full rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
