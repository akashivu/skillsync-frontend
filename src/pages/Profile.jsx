import { useState } from "react";
import API from "../service/api";

const Profile = () => {
  const [skills, setSkills] = useState([]);
  const [input, setInput] = useState("");

  const addSkill = () => {
    if (input.trim() !== "") {
      setSkills([...skills, input]);
      setInput("");
    }
  };

  const submitSkills = async () => {
    try {
      await API.post("/profile/skills", { skills }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("Skills saved!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Your Skills</h1>
      <div className="flex gap-2">
        <input
          className="border p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. Java, React"
        />
        <button onClick={addSkill} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>

      <div className="mt-4">
        {skills.map((skill, idx) => (
          <span key={idx} className="bg-gray-200 px-3 py-1 rounded m-1 inline-block">
            {skill}
          </span>
        ))}
      </div>

      <button onClick={submitSkills} className="mt-4 bg-green-600 text-white px-6 py-2 rounded">
        Save Skills
      </button>
    </div>
  );
};

export default Profile;
