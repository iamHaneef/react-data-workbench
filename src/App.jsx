import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormikLoginPage from "./components/FormikLoginPage";
import FormikRegisterPage from "./components/FormikRegisterPage";
import Charts from "./components/Charts";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<FormikLoginPage />} />
        <Route path="/register" element={<FormikRegisterPage />} />
        <Route path="/" element={<Charts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;