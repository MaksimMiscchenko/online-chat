import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Chat/Home";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
