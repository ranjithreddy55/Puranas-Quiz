import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-orange-700 text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            🕉️ Puranas Quiz
          </h2>

          <p className="text-orange-100">
            Explore the wisdom of the 18 Mahapuranas through interactive
            quizzes and improve your spiritual knowledge.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2">
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>

            <Link to="/leaderboard" className="hover:text-yellow-300">
              Leaderboard
            </Link>
            <Link to="/privacy-policy" className="hover:text-yellow-300">
  Privacy Policy
</Link>

<Link to="/terms-and-conditions" className="hover:text-yellow-300">
  Terms & Conditions
</Link>

            <Link to="/login" className="hover:text-yellow-300">
              Login
            </Link>

            <Link to="/register" className="hover:text-yellow-300">
              Register
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Contact Us
          </h3>

          <p>Email: ranjithkumarreddy2006@gmail.com</p>
          <p>Made with Devotion</p>
        </div>

      </div>

      <div className="border-t border-orange-500 py-4 text-center text-orange-100">
        © {new Date().getFullYear()} Puranas Quiz. All Rights Reserved.
      </div>
    </footer>
  );
}