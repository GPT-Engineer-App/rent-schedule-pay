import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Schedule from "./pages/Schedule.jsx";
import Reserve from "./pages/Reserve.jsx";
import Pay from "./pages/Pay.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/schedule" element={<Schedule />} />
        <Route exact path="/reserve" element={<Reserve />} />
        <Route exact path="/pay" element={<Pay />} />
      </Routes>
    </Router>
  );
}

export default App;