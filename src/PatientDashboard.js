// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // function PatientDashboard() {
// //   const [patients, setPatients] = useState([]);

// //   // Fetch the patient data from the API
// //   useEffect(() => {
// //     const token = localStorage.getItem("token");

// //     // Set the common headers for all Axios requests
// //     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// //     axios
// //       .get("http://localhost:8080/api/patients")
// //       .then((response) => {
// //         setPatients(response.data);
// //       })
// //       .catch((error) => {
// //         console.error("Error:", error);
// //       });
// //   }, []);

// //   // Handle discharging a patient
// //   const dischargePatient = (patientId) => {
// //     const token = localStorage.getItem("token");

// //     // Set the common headers for all Axios requests
// //     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// //     axios
// //       .patch(`http://localhost:8080/api/discharge/${patientId}`)
// //       .then((response) => {
// //         // Handle the response from the server
// //         console.log(response.data); // You can perform any additional actions based on the response
// //       })
// //       .catch((error) => {
// //         console.error("Error:", error);
// //       });
// //   };

// //   return (
// //     <div>
// //       <h2>Dashboard</h2>
// //       {patients.map((patient) => (
// //         <div key={patient.patientId}>
// //           <p>Name: {patient.name}</p>
// //           <p>Age: {patient.age}</p>
// //           <p>Room: {patient.room}</p>
// //           <p>Doctor: {patient.docName}</p>
// //           <p>Admit Date: {patient.admitDate}</p>
// //           <p>Expenses: {patient.expenses}</p>
// //           <p>Status: {patient.status}</p>
// //           <button onClick={() => dischargePatient(patient.patientId)}>
// //             Discharge
// //           </button>
// //           <hr />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default PatientDashboard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function PatientDashboard() {
//   const [patients, setPatients] = useState([]);

//   // Fetch the patient data from the API
//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     // Set the common headers for all Axios requests
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//     axios
//       .get("http://localhost:8080/api/patients")
//       .then((response) => {
//         setPatients(response.data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, []);

//   // Handle discharging a patient
//   const dischargePatient = (patientId) => {
//     const token = localStorage.getItem("token");

//     // Set the common headers for all Axios requests
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//     axios
//       .patch(`http://localhost:8080/api/discharge/${patientId}`)
//       .then((response) => {
//         // Handle the response from the server
//         console.log(response.data); // You can perform any additional actions based on the response
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       {patients.map((patient) => (
//         <div key={patient.patientId}>
//           <p>Name: {patient.name}</p>
//           <p>Age: {patient.age}</p>
//           <p>Room: {patient.room}</p>
//           <p>Doctor: {patient.docName}</p>
//           <p>Admit Date: {patient.admitDate}</p>
//           <p>Expenses: {patient.expenses}</p>
//           <p>Status: {patient.status}</p>
//           <button
//             onClick={() => dischargePatient(patient.patientId)}
//             disabled={patient.status === "DISCHARGED"} // Disable the button if the status is "Discharged"
//           >
//             Discharge
//           </button>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PatientDashboard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// function PatientDashboard() {
//   const [patients, setPatients] = useState([]);

//   // Fetch the patient data from the API
//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     // Set the common headers for all Axios requests
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//     axios
//       .get("http://localhost:8080/api/patients")
//       .then((response) => {
//         setPatients(response.data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, []);

//   // Handle discharging a patient
//   const dischargePatient = (patientId) => {
//     const token = localStorage.getItem("token");

//     // Set the common headers for all Axios requests
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//     axios
//       .patch(`http://localhost:8080/api/discharge/${patientId}`)
//       .then((response) => {
//         // Handle the response from the server
//         console.log(response.data); // You can perform any additional actions based on the response
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       {patients.map((patient) => (
//         <div key={patient.patientId}>
//           <p>Name: {patient.name}</p>
//           <p>Age: {patient.age}</p>
//           <p>Room: {patient.room}</p>
//           <p>Doctor: {patient.docName}</p>
//           <p>Admit Date: {patient.admitDate}</p>
//           <p>Expenses: {patient.expenses}</p>
//           <p>Status: {patient.status}</p>
//           <button
//             onClick={() => dischargePatient(patient.patientId)}
//             disabled={patient.status === "Discharged"}
//             className="discharge-button" // Apply the CSS class to the button
//           >
//             Discharge
//           </button>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PatientDashboard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// function PatientDashboard() {
//   const [patients, setPatients] = useState([]);
//   const [showPatient, setShowPatient] = useState(false);
//   const [newPatient, setNewPatient] = useState({
//     name: "",
//     age: 0,
//     room: 0,
//     docName: "",
//     expenses: 0,
//     status: "ADMITTED",
//   });

//   // Fetch the patient data from the API
//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     // Set the common headers for all Axios requests
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//     axios
//       .get("http://localhost:8080/api/patients")
//       .then((response) => {
//         setPatients(response.data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, []);

//   // Handle admitting a new patient
//   const admitPatient = () => {
//     const token = localStorage.getItem("token");

//     // Set the common headers for all Axios requests
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//     axios
//       .post("http://localhost:8080/api/admit", newPatient)
//       .then((response) => {
//         // Handle the response from the server
//         console.log(response.data); // You can perform any additional actions based on the response

//         // Clear the form fields after successful admission
//         setNewPatient({
//           name: "",
//           age: 0,
//           room: 0,
//           docName: "",
//           expenses: 0,
//           status: "ADMITTED",
//         });
//         setPatients([...patients, response.data]);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };
//   // Handle discharging a patient
//   const dischargePatient = (patientId) => {
//     const token = localStorage.getItem("token");

//     // Set the common headers for all Axios requests
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//     axios
//       .patch(`http://localhost:8080/api/discharge/${patientId}`)
//       .then((response) => {
//         // Handle the response from the server
//         console.log(response.data); // You can perform any additional actions based on the response
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   const handlePatientVisibility = () => {
//     setShowPatient(!showPatient);
//   };
//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <div>
//         <h3>Admit New Patient</h3>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={newPatient.name}
//             onChange={(event) =>
//               setNewPatient({ ...newPatient, name: event.target.value })
//             }
//           />
//         </div>
//         <div>
//           <label htmlFor="age">Age:</label>
//           <input
//             type="number"
//             id="age"
//             value={newPatient.age}
//             onChange={(event) =>
//               setNewPatient({ ...newPatient, age: event.target.valueAsNumber })
//             }
//           />
//         </div>
//         <div>
//           <label htmlFor="room">Room:</label>
//           <input
//             type="number"
//             id="room"
//             value={newPatient.room}
//             onChange={(event) =>
//               setNewPatient({ ...newPatient, room: event.target.valueAsNumber })
//             }
//           />
//         </div>
//         <div>
//           <label htmlFor="docName">Doctor Name:</label>
//           <input
//             type="text"
//             id="docName"
//             value={newPatient.docName}
//             onChange={(event) =>
//               setNewPatient({ ...newPatient, docName: event.target.value })
//             }
//           />
//         </div>
//         <div>
//           <label htmlFor="expenses">Expenses:</label>
//           <input
//             type="number"
//             id="expenses"
//             value={newPatient.expenses}
//             onChange={(event) =>
//               setNewPatient({
//                 ...newPatient,
//                 expenses: event.target.valueAsNumber,
//               })
//             }
//           />
//         </div>
//         <button onClick={admitPatient}>Admit</button>
//       </div>
//       <hr />
//       {patients.map((patient) => (
//         <div
//           key={patient.patientId}
//           className=" flex gap-5 justify-center items-center py-10"
//         >
//           <p className=" text-2xl font-semibold">
//             Patient Name: {patient.name}
//           </p>
//           <div className="flex gap-5">
//             <div className="">
//               <button
//                 onClick={handlePatientVisibility}
//                 className=" bg-blue-600 px-5 py-3 text-white"
//               >
//                 View Patient Details
//               </button>
//               <div>
//                 {showPatient && (
//                   <div>
//                     <p>Age: {patient.age}</p>
//                     <p>Room: {patient.room}</p>
//                     <p>Doctor: {patient.docName}</p>
//                     <p>Admit Date: {patient.admitDate}</p>
//                     <p>Expenses: {patient.expenses}</p>
//                     <p>Status: {patient.status}</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//             <button
//               onClick={() => dischargePatient(patient.patientId)}
//               disabled={patient.status === "DISCHARGED"}
//               className=" bg-green-600 px-5 py-3 text-white"
//             >
//               Discharge
//             </button>
//           </div>

//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PatientDashboard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function PatientDashboard() {
  const [patients, setPatients] = useState([]);
  const [showPatient, setShowPatient] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: 0,
    room: 0,
    docName: "",
    expenses: 0,
    status: "ADMITTED",
  });

  // Fetch the patient data from the API
  useEffect(() => {
    const token = localStorage.getItem("token");

    // Set the common headers for all Axios requests
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios
      .get("http://localhost:8080/api/patients")
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // Handle admitting a new patient
  const admitPatient = () => {
    const token = localStorage.getItem("token");

    // Set the common headers for all Axios requests
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios
      .post("http://localhost:8080/api/admit", newPatient)
      .then((response) => {
        // Handle the response from the server
        console.log(response.data); // You can perform any additional actions based on the response

        // Clear the form fields after successful admission
        setNewPatient({
          name: "",
          age: 0,
          room: 0,
          docName: "",
          expenses: 0,
          status: "ADMITTED",
        });
        setPatients([...patients, response.data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Handle discharging a patient
  const dischargePatient = (patientId) => {
    const token = localStorage.getItem("token");

    // Set the common headers for all Axios requests
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios
      .patch(`http://localhost:8080/api/discharge/${patientId}`)
      .then((response) => {
        // Handle the response from the server
        console.log(response.data); // You can perform any additional actions based on the response
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handlePatientVisibility = () => {
    setShowPatient(!showPatient);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Admit New Patient</h3>
        {/* Form fields for admitting a new patient */}
        {/* ... */}
        <div>
          <h3>Admit New Patient</h3>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={newPatient.name}
              onChange={(event) =>
                setNewPatient({ ...newPatient, name: event.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              value={newPatient.age}
              onChange={(event) =>
                setNewPatient({
                  ...newPatient,
                  age: event.target.valueAsNumber,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="room">Room:</label>
            <input
              type="number"
              id="room"
              value={newPatient.room}
              onChange={(event) =>
                setNewPatient({
                  ...newPatient,
                  room: event.target.valueAsNumber,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="docName">Doctor Name:</label>
            <input
              type="text"
              id="docName"
              value={newPatient.docName}
              onChange={(event) =>
                setNewPatient({ ...newPatient, docName: event.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="expenses">Expenses:</label>
            <input
              type="number"
              id="expenses"
              value={newPatient.expenses}
              onChange={(event) =>
                setNewPatient({
                  ...newPatient,
                  expenses: event.target.valueAsNumber,
                })
              }
            />
          </div>
          <button onClick={admitPatient}>Admit</button>
        </div>
        <button onClick={admitPatient}>Admit</button>
      </div>
      <hr />
      {patients.map((patient) => (
        <div
          key={patient.patientId}
          className="flex gap-5 justify-center items-start py-10"
        >
          <p className="text-2xl font-semibold">Patient Name: {patient.name}</p>
          <div className="flex gap-5">
            <div className="">
              <button
                onClick={handlePatientVisibility}
                className="bg-blue-600 px-5 py-3 text-white"
              >
                {showPatient ? "Hide Patient Details" : "View Patient Details"}
              </button>
              {showPatient && (
                <div>
                  {/* Patient details */}
                  <p>Age: {patient.age}</p>
                  <p>Room: {patient.room}</p>
                  <p>Doctor: {patient.docName}</p>
                  <p>Admit Date: {patient.admitDate}</p>
                  <p>Expenses: {patient.expenses}</p>
                  <p>Status: {patient.status}</p>
                </div>
              )}
            </div>
            <button
              onClick={() => dischargePatient(patient.patientId)}
              disabled={patient.status === "DISCHARGED"}
              className="bg-green-600 px-5 py-3 text-white"
            >
              Discharge
            </button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PatientDashboard;
