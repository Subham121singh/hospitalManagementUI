import Signup from "./Signup";
import Login from "./Login";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import PatientDashboard from "./PatientDashboard";

function App() {
  const token = localStorage.getItem("token");
  return (
    <Router>
      <div className="container mx-auto">
        <nav className="py-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/signup" className="text-blue-500 hover:underline">
                Signup
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-blue-500 hover:underline">
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {token && <Route path="/dashboard" element={<PatientDashboard />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
