import { useEffect, useState } from "react";
import axios from "axios";
import puranas from "../data/puranas";

export default function Dashboard() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) return;

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/dashboard/${user.email}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 p-10">
      <h1 className="text-4xl font-bold text-orange-700 mb-8">
        My Dashboard
      </h1>

      {results.length === 0 ? (
        <p>No quiz attempts yet.</p>
      ) : (
        <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <thead className="bg-orange-600 text-white">
            <tr>
              <th className="p-4">Purana</th>
              <th className="p-4">Score</th>
              <th className="p-4">Total</th>
            </tr>
          </thead>

          <tbody>
            {results.map((result, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">
  {puranas.find((p) => p.id === result.puranaId)?.name || result.puranaId}
</td>
                <td className="p-4">{result.score}</td>
                <td className="p-4">{result.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}