import React from "react";
import { Link, Outlet } from "react-router-dom";

const Schedule = () => {
  return (
    <div className="schedule-container">
      
      <h1>FEST SCHEDULE</h1>
      
      <div className="day-buttons">
        <Link to="day1"><button>Day 1</button></Link>
        <Link to="day2"><button>Day 2</button></Link>
        <Link to="day3"><button>Day 3</button></Link>
      </div>

      <div className="schedule">
        <Outlet />   {//outlet is a placeholder which tells the react router where the child routes will be render 
        }
      </div>
    </div>
  );
};

export default Schedule;
