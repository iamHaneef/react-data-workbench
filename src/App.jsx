import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./modules/auth/Login";
import Register from "./modules/auth/Register";

import TableComponent from "./modules/data-display/TableComponent";
import BarChart from "./modules/data-display/BarChart";
import PieChart from "./modules/data-display/PieChart";
import DonutChart from "./modules/data-display/DonutChart";
import GaugeChart from "./modules/data-display/GaugeChart";
import LineChart from "./modules/data-display/LineChart";
import StackedColumnLine from "./modules/data-display/StackedColumnLine";
import SankeyChart from "./modules/data-display/SankeyChart";
import GroupedBarPlot from "./modules/data-display/GroupedBarPlot";
import BasicRosePlot from "./modules/data-display/BasicRosePlot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicRosePlot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
