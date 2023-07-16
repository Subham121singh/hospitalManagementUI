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
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Admit New Patient</h3>
        <div className="flex flex-col space-y-4">
          <label htmlFor="name" className="font-bold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="form-input mt-1 block w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500s"
            value={newPatient.name}
            onChange={(event) =>
              setNewPatient({ ...newPatient, name: event.target.value })
            }
          />
          <label htmlFor="age" className="font-bold">
            Age:
          </label>
          <input
            type="number"
            id="age"
            className="form-input mt-1 block w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            value={newPatient.age}
            onChange={(event) =>
              setNewPatient({
                ...newPatient,
                age: event.target.valueAsNumber,
              })
            }
          />
          <label htmlFor="room" className="font-bold">
            Room:
          </label>
          <input
            type="number"
            id="room"
            className="form-input mt-1 block w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            value={newPatient.room}
            onChange={(event) =>
              setNewPatient({
                ...newPatient,
                room: event.target.valueAsNumber,
              })
            }
          />
          <label htmlFor="docName" className="font-bold">
            Doctor Name:
          </label>
          <input
            type="text"
            id="docName"
            className="form-input mt-1 block w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            value={newPatient.docName}
            onChange={(event) =>
              setNewPatient({ ...newPatient, docName: event.target.value })
            }
          />
          <label htmlFor="expenses" className="font-bold">
            Expenses:
          </label>
          <input
            type="number"
            id="expenses"
            className="form-input mt-1 block w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            value={newPatient.expenses}
            onChange={(event) =>
              setNewPatient({
                ...newPatient,
                expenses: event.target.valueAsNumber,
              })
            }
          />
          <button
            onClick={admitPatient}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Admit
          </button>
        </div>
      </div>
      <hr className="my-8" />
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
                className="bg-blue-600 px-5 py-3 text-white rounded"
              >
                {showPatient ? "Hide Patient Details" : "View Patient Details"}
              </button>
              {showPatient && (
                <div className="mt-4">
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
              className="bg-green-600 px-5 py-3 text-white rounded"
            >
              Discharge
            </button>
          </div>
          <hr className="my-8" />
        </div>
      ))}
    </div>
  );
}

export default PatientDashboard;
