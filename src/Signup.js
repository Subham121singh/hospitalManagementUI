// import React, { useState } from "react";
// import axios from "axios";
// import "./App.css";
// function Signup() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Create an object with the user data
//     const userData = {
//       username,
//       password,
//       email,
//     };

//     // Send the user data to the /public/register endpoint using Axios
//     axios
//       .post("http://localhost:8080/public/register", userData)
//       .then((response) => {
//         // Handle the response from the server
//         console.log(response.data); // You can perform any additional actions based on the response
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <div className="signup-container">
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//         </div>
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;
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
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="form-input mt-1 block w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
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
              className="form-input mt-1 block w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="form-input mt-1 block w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
