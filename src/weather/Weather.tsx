import React, { useState } from "react";
import axios from "axios";

interface WeatherData {
  current_condition: {
    temp_C: string;
    weatherDesc: { value: string }[];
  }[];
}

const Weather: React.FC = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState<WeatherData | null>(null);

  const fetchWeather = async () => {
    try {

      const res = await axios.get<WeatherData>(`https://wttr.in/${city}?format=j1`);
      setData(res.data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu thời tiết:", error);
    }
  };

  return (
    <div className="p-4">
      <h2>🌤️Thời tiết</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Nhập tên thành phố..."
      />
      <button onClick={fetchWeather}>Xem</button>

      {data && (
        <div className="mt-3">
        
          <b>Nhiệt độ: {data.current_condition[0].temp_C}°C</b>
          <p>Mô tả: {data.current_condition[0].weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
