import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  const [puranas, setPuranas] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("API URL:", import.meta.env.VITE_API_URL);
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/puranas`)
      .then((res) => {
        console.log("API Response:", res.data);

        if (Array.isArray(res.data)) {
          setPuranas(res.data);
        } else if (Array.isArray(res.data.puranas)) {
          setPuranas(res.data.puranas);
        } else {
          console.error("API did not return an array.");
          setPuranas([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching puranas:", err);
      });
  }, []);

  const filteredPuranas = puranas.filter((purana) =>
    purana.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log("Puranas:", puranas);
console.log("Filtered:", filteredPuranas);
console.log(filteredPuranas[0]);

  return (
  <>
    <Navbar />

    {/* Hero Section */}
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

<div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

<div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-8 py-24">
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl shadow-2xl p-10 md:p-16 text-center"
>

<div>

</div>

          <div>
  <motion.h1
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl md:text-6xl font-extrabold text-orange-700 leading-tight"
  >
    Discover the
    <span className="block text-yellow-600">Wisdom of the</span>
    <span className="block">18 Mahapuranas</span>
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    className="text-lg md:text-xl text-gray-600 mt-8 max-w-xl leading-8 mx-auto"
  >
    Learn the wisdom of the ancient Mahapuranas through interactive
    quizzes, challenge yourself, track your progress, and deepen your
    spiritual knowledge.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7, duration: 0.8 }}
    className="mt-10 flex justify-center gap-4 flex-wrap"
  >
    <button
      onClick={() => navigate("/quiz/1")}
      className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl text-lg font-semibold"
    >
      🚀 Start Quiz
    </button>

    <button
  onClick={() => {
    document
      .getElementById("mahapuranas")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl hover:bg-orange-600 hover:text-white"
>
  📖 Learn More
</button>
  </motion.div>
</div>

</motion.div>

</div>
</section>

      {/* Statistics */}
      <section className="py-16 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-8">
          <div className="bg-orange-100 rounded-xl p-6 text-center shadow-lg">
            <h2 className="text-4xl font-bold text-orange-700">18</h2>
            <p>Mahapuranas</p>
          </div>

          <div className="bg-yellow-100 rounded-xl p-6 text-center shadow-lg">
            <h2 className="text-4xl font-bold text-yellow-700">1700+</h2>
            <p>Questions</p>
          </div>

          <div className="bg-green-100 rounded-xl p-6 text-center shadow-lg">
            <h2 className="text-4xl font-bold text-green-700">100+</h2>
            <p>Users</p>
          </div>

          <div className="bg-blue-100 rounded-xl p-6 text-center shadow-lg">
            <h2 className="text-4xl font-bold text-blue-700">1000+</h2>
            <p>Quiz Attempts</p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section
  id="mahapuranas"
  className="py-20 bg-orange-50/40 backdrop-blur-sm"
>

        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="🔍 Search Mahapurana..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-2 border-orange-300 rounded-xl px-5 py-4"
          />
        </div>

        <h2 className="text-5xl font-bold text-center text-orange-700 mb-16">
          📚 18 Mahapuranas
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
          {filteredPuranas.map((purana) => (
            <CategoryCard
  key={purana.id}
  id={purana.id}
  title={purana.title}
  description={purana.description}
  questions={purana.questions}
  difficulty={purana.difficulty}
/>
          ))}
        </div>

      </section>


      <Footer />
    </>
  );
}
export default Home;