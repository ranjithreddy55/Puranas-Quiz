import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import hero from "../assets/hero.png";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

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
      <section className="bg-orange-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center justify-between">

          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-extrabold text-orange-700 leading-tight">
              Discover the
              <span className="block text-yellow-600">Wisdom of the</span>
              <span className="block">18 Mahapuranas</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mt-8 max-w-xl leading-8">
              Learn the wisdom of the ancient Mahapuranas through interactive
              quizzes, challenge yourself, track your progress, and deepen your
              spiritual knowledge.
            </p>

            <div className="mt-10 flex gap-4">
              <button
                onClick={() => navigate("/quiz/1")}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl text-lg font-semibold"
              >
                🚀 Start Quiz
              </button>

              <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl hover:bg-orange-600 hover:text-white">
                📖 Learn More
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img
              src={hero}
              alt="Hero"
              className="w-[420px] max-w-full rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white py-16">
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
      <section className="bg-orange-50 py-20">

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