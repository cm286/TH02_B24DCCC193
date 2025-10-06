
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

interface Address {
  street: string;
  city: string;
}

interface Company {
  name: string;
  catchPhrase: string;
}

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}

const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    axios
      .get<Student>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.error("Lỗi khi tải chi tiết sinh viên:", err));
  }, [id]);

  if (!student) {
    return <p> Đang tải dữ liệu...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>📘 Thông tin chi tiết sinh viên</h2>
      <p><strong>Tên:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Điện thoại:</strong> {student.phone}</p>
      <p><strong>Website:</strong> {student.website}</p>
      <p><strong>Địa chỉ:</strong> {student.address.street}, {student.address.city}</p>
      <p><strong>Công ty:</strong> {student.company.name}</p>
      <p><em>"{student.company.catchPhrase}"</em></p>

      <Link to="/students" style={{ color: "blue", textDecoration: "none" }}>
        ← Quay lại danh sách
      </Link>
    </div>
  );
};

export default StudentDetail;
