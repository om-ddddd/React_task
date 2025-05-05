import React from "react";

import teamsData from "./teamsData.json"; // Import JSON file

const Teams = () => {
  return (
    <div className="teams-container">
      <h1>Our Teams</h1>
      <div className="teams-grid">
        {teamsData.map((team, index) => (
          <div key={index} className="team-card">
            <h2>{team.teamName}</h2>
            <p>
              <strong>Leader:</strong> {team.leader}
            </p>

            <p>
              <strong>Members:</strong>
            </p>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {team.members.map((member, idx) => (
                <li key={idx}>{member}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
