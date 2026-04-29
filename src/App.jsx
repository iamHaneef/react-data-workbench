import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/modules/auth/Login";
import Register from "./components/modules/auth/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;