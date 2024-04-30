// pages
import Home from "./pages/Home";
import JobSearch from "./pages/JobSearch";
import JobDetails from "./pages/JobDetails";

// React Router
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-search" element={<JobSearch />} />
        <Route path="/job-details" element={<JobDetails />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
