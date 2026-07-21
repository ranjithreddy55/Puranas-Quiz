import { useEffect, useState } from "react";
import axios from "axios";

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios
      .get("${import.meta.env.VITE_API_URL}/api/leaderboard")
      .then((res) => {
        setLeaders(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 p-10">
      <h1 className="text-4xl font-bold text-orange-700 mb-8">
        🏆 Leaderboard
      </h1>

      <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
        <thead className="bg-orange-600 text-white">
          <tr>
            <th className="p-4">Rank</th>
            <th className="p-4">Email</th>
            <th className="p-4">Score</th>
            <th className="p-4">Total</th>
          </tr>
        </thead>

        <tbody>
          {leaders.map((leader, index) => (
            <tr key={index} className="border-b">
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{leader.userEmail}</td>
              <td className="p-4">{leader.score}</td>
              <td className="p-4">{leader.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}