import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Leaderboard from "./pages/Leaderboard";
import Result from "./pages/Result";
import Dashboard from "./pages/Dashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/result" element={<Result />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* These pages should be accessible to everyone */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsConditions />}
        />

        {/* Admin page */}
        {JSON.parse(localStorage.getItem("user"))?.isAdmin && (
          <Route path="/admin" element={<Admin />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;