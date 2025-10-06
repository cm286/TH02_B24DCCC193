import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Weather from "../weather/Weather";
import StudentList from "../Student/StudentList";
import NewsList from "../News/NewsList";

const AppRouter: React.FC = () => {
  return (
    <div>
      <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
        <Link to="/">Weather</Link>
        <Link to="/students">Student List</Link>
        <Link to="/news">News</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/news" element={<NewsList />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
