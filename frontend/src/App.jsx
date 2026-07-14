import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import CreateOrder from "./pages/CreateOrder";
import SubmitOrder from "./pages/SubmitOrder";
import CompleteOrder from "./pages/CompleteOrder";
import RejectOrder from "./pages/RejectOrder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/create-order" element={<CreateOrder />} />
      <Route path="/submit-order/:id" element={<SubmitOrder />} />
      <Route path="/complete-order/:id" element={<CompleteOrder />} />
      <Route path="/reject-order/:id" element={<RejectOrder />} />
    </Routes>
  );
}

export default App;