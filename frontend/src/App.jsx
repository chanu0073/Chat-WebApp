import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { useAuth } from "./context/AuthContext";

function App() {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={currentUser ? <Home /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
