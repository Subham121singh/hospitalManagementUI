import Signup from "./Signup";
import Login from "./Login";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import PatientDashboard from "./PatientDashboard";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PatientDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
