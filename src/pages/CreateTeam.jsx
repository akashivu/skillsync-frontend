import { useState } from "react";
import API from "../service/api";

const CreateTeam = () => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [emails, setEmails] = useState("");

  const handleSubmit = async () => {
    try {
      await API.post("/team/create", {
        name,
        projectGoal: goal,
        memberEmails: emails.split(",").map(e => e.trim()),
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
      alert("Team created!");
    } catch (err) {
      console.error(err);
      alert("Error creating team");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Create New Team</h1>
      <input
        type="text"
        placeholder="Team Name"
        className="w-full mb-2 border p-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Project Goal"
        className="w-full mb-2 border p-2"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <input
        type="text"
        placeholder="Invite teammates (comma-separated emails)"
        className="w-full mb-4 border p-2"
        value={emails}
        onChange={(e) => setEmails(e.target.value)}
      />
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
        Create Team
      </button>
    </div>
  );
};

export default CreateTeam;
