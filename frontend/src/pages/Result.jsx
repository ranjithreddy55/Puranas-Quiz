import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1>No Result Found</h1>
      </div>
    );
  }

  const { score, total } = state;

  const percentage = Math.round((score / total) * 100);

  let message = "";

  if (percentage >= 80) {
    message = "🏆 Excellent!";
  } else if (percentage >= 60) {
    message = "😊 Good Job!";
  } else {
    message = "📖 Keep Practicing!";
  }

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-10 w-[450px] text-center">

        <h1 className="text-4xl font-bold text-orange-700">
          Quiz Completed
        </h1>

        <h2 className="text-6xl font-bold my-8">
          {score}/{total}
        </h2>

        <p className="text-2xl mb-4">
          {percentage}%
        </p>

        <h3 className="text-2xl font-semibold mb-8">
          {message}
        </h3>

        <button
          onClick={() => navigate("/")}
          className="bg-orange-600 text-white px-8 py-3 rounded-lg"
        >
          Go Home
        </button>

      </div>
    </div>
  );
}