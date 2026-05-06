import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./modules/auth/Login";
import Register from "./modules/auth/Register";

import TableComponent from "./modules/data-display/TableComponent";
import BarChart from "./modules/data-display/BarChart";
import PieChart from "./modules/data-display/PieChart";
import DonutChart from "./modules/data-display/DonutChart";
import GaugeChart from "./modules/data-display/GaugeChart";
import LineChart from "./modules/data-display/LineChart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LineChart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
