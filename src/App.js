import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Chat/Home";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  console.log(currentUser);
  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
