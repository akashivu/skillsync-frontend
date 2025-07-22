import { useEffect, useState } from "react";
import API from "../service/api";

const MyTeams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const res = await API.get("/team/my", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
      setTeams(res.data);
    };
    fetchTeams();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Your Teams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {teams.map((team, idx) => (
          <div key={idx} className="p-4 border rounded">
            <h2 className="font-semibold text-lg">{team.name}</h2>
            <p className="text-sm text-gray-700 mb-2">{team.projectGoal}</p>
            <p className="text-sm font-bold">Members:</p>
            <ul className="list-disc ml-5 text-sm text-gray-600">
              {team.members.map((m, i) => <li key={i}>{m.username}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeams;
