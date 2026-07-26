import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/leaderboard`)
      .then((res) => {
        setLeaders(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 p-10">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold text-orange-700 text-center mb-10"
      >
        🏆 Leaderboard
      </motion.h1>


      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="
          max-w-5xl mx-auto
          bg-white/60
          backdrop-blur-xl
          rounded-3xl
          shadow-2xl
          overflow-hidden
          border border-orange-200
        "
      >
        {leaders.length > 0 && (
  <div className="flex justify-center mb-10">

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
        relative
        bg-gradient-to-br 
        from-yellow-200
        to-orange-100
        p-8
        rounded-3xl
        shadow-2xl
        border-4
        border-yellow-400
        text-center
      "
    >

      {/* Floating Crown */}
      <motion.div
        animate={{
          y: [0, -15, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
        className="text-6xl"
      >
        👑
      </motion.div>


      <h2 className="text-3xl font-bold text-orange-700">
        Champion
      </h2>


      <p className="mt-3 text-xl font-semibold">
        {leaders[0].userEmail}
      </p>


      <p className="text-4xl font-bold text-yellow-600 mt-3">
        {leaders[0].score}
        🏆
      </p>


    </motion.div>

  </div>
)}

        <table className="w-full">

          <thead className="bg-orange-600 text-white">
            <tr>
              <th className="p-5">Rank</th>
              <th className="p-5">Email</th>
              <th className="p-5">Score</th>
              <th className="p-5">Total</th>
            </tr>
          </thead>


          <tbody>

            {leaders.map((leader, index) => (

              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.1
                }}
                whileHover={{
                  scale: 1.03
                }}
                className={`
                  border-b
                  cursor-pointer
                  ${
                    index === 0
                    ? "bg-yellow-100"
                    : index === 1
                    ? "bg-gray-100"
                    : index === 2
                    ? "bg-orange-100"
                    : "bg-white"
                  }
                `}
              >

                <td className="p-5 text-center text-2xl">

                  {index === 0 && "🥇"}
                  {index === 1 && "🥈"}
                  {index === 2 && "🥉"}

                  {index > 2 && index + 1}

                </td>


                <td className="p-5 font-semibold">
                  {leader.userEmail}
                </td>


                <td className="p-5 text-center font-bold text-orange-700">
                  {leader.score}
                </td>


                <td className="p-5 text-center">
                  {leader.total}
                </td>


              </motion.tr>

            ))}

          </tbody>

        </table>

      </motion.div>

    </div>
  );
}