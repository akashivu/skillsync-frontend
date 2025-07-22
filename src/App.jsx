import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Home} from "./components/Home";
import Profile from "./pages/Profile";
import Matches from "./pages/Matches";
import MyTeams from "./pages/MyTeams";
import CreateTeam from "./pages/CreateTeam";
function App() {
  return (
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/matches" element={<Matches />} />
       <Route path="/create-team" element={<CreateTeam />} />
        <Route path="/my-teams" element={<MyTeams />} /> 
    </Routes>
  );
}

export default App;


