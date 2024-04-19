// pages
import Home from "./pages/Home";
import JobListing from "./pages/JobListing";
import JobDetails from "./pages/JobDetails";

// React Router
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-list" element={<JobListing />} />
        <Route path="/job-details" element={<JobDetails />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
