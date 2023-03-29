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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/job-list" element={<JobListing />} />
        <Route exact path="/job-details" element={<JobDetails />} />
        <Route exact path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
