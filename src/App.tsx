import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Weather from "./weather/Weather";
import StudentList from "./Student/StudentList";
import StudentDetail from "./Student/StudentDetail";
import NewsList from "./News/NewsList";

const App: React.FC = () => {
  return (
    
    <div style={{ padding: "20px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <p style={{ textAlign: "center", fontWeight: "bold",fontSize:"30px"}}> Bài thực hành số 2</p>

        <Link to="/weather">Weather</Link> |{" "}
        <Link to="/students">Students</Link> |{" "}
        <Link to="/news">News</Link>
      </nav>

      <Routes>
        <Route path="/weather" element={<Weather />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/news" element={<NewsList />} />
      </Routes>
    </div>
  );
};

export default App;
