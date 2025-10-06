
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios
      .get<Student[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error("Lỗi khi tải danh sách:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2> Danh sách sinh viên</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((s) => (
          <li
            key={s.id}
            style={{
              marginBottom: "10px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "5px",
            }}
          >
            <Link
              to={`/students/${s.id}`}
              style={{
                textDecoration: "none",
                color: "blue",
                fontWeight: "bold",
              }}
            >
              {s.name}
            </Link>
            <p style={{ margin: "5px 0" }}> {s.email}</p>
            <p style={{ margin: "5px 0" }}> {s.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
