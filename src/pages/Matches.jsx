import { useEffect, useState } from "react";
import API from "../service/api";

const Matches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await API.get("/match/suggestions", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setMatches(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMatches();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Suggested Teammates</h1>
      {matches.length === 0 && <p>No matches found yet.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matches.map((user, idx) => (
          <div key={idx} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{user.username}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {user.skills.map((skill, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
