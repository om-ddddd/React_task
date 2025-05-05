import logo from "./logo.svg";
import { Router, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Schedule from "./components/Schedule";
import { Route } from "react-router-dom";
import Teams from "./components/Teams";
import Login from "./components/Login";
import Profile from "./components/Profile";
import DaySchedule from "./components/DaySchedule";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />}>
  <Route path=":dayId" element={<DaySchedule />} />
</Route>

         <Route path="/login" element={<Login />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
