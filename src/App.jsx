import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Home} from "./components/Home";
import Profile from "./pages/Profile";
import Matches from "./pages/Matches";
function App() {
  return (
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/matches" element={<Matches />} />

    </Routes>
  );
}

export default App;


