import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 shadow-xl sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    <h1 className="text-3xl font-extrabold text-white cursor-pointer">
      🕉️ Puranas Quiz
    </h1>

    <div className="flex items-center gap-6">

      <Link
        to="/"
        className="text-white hover:text-yellow-200 font-semibold transition"
      >
        Home
      </Link>

      <Link
        to="/leaderboard"
        className="text-white hover:text-yellow-200 font-semibold transition"
      >
        Leaderboard
      </Link>

      {user?.isAdmin && (
        <Link
          to="/admin"
          className="text-white hover:text-yellow-200 font-semibold transition"
        >
          Admin
        </Link>
      )}

      {user && (
        <span className="text-yellow-100 font-semibold">
          👋 {user.name}
        </span>
      )}

      {user ? (
        <button
          onClick={handleLogout}
          className="bg-white text-orange-600 px-5 py-2 rounded-full font-bold hover:scale-105 transition"
        >
          Logout
        </button>
      ) : (
        <>
          <Link
            to="/login"
            className="bg-white text-orange-600 px-5 py-2 rounded-full font-bold hover:scale-105 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-yellow-300 text-black px-5 py-2 rounded-full font-bold hover:scale-105 transition"
          >
            Register
          </Link>
        </>
      )}

    </div>
  </div>
</nav>
  );
}