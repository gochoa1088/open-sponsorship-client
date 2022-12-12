import { Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import AthleteList from "./components/AthleteList";
import AthleteForm1 from "./components/AthleteForm1";
import AthleteForm2 from "./components/AthleteForm2";
import AthleteSummary from "./components/AthleteSummary";
import AthleteProfile from "./components/AthleteProfile";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="athletes" replace />} />
        <Route path="athletes" element={<AthleteList />} />
        <Route path="create/1" element={<AthleteForm1 />} />
        <Route path="create/2" element={<AthleteForm2 />} />
        <Route path="create/summary" element={<AthleteSummary />} />
        <Route path="athletes/:id" element={<AthleteProfile />} />
      </Routes>
    </div>
  );
}

export default App;
