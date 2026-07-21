import { useNavigate } from "react-router-dom";

export default function CategoryCard(props) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <h1 className="text-2xl font-bold text-red-600">
        {props.title}
      </h1>

      <p>{props.description}</p>

      <p>{props.questions} Questions</p>

      <p>{props.difficulty}</p>

      <button
  onClick={() => navigate(`/quiz/${props.id}`)}
  className="mt-6 w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 hover:scale-105 transition-all duration-300"
>
  Start Quiz
</button>
    </div>
  );
}