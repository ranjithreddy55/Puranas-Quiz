import { useState, useEffect } from "react";
import axios from "axios";

export default function Admin() {
  // Form State
  const [form, setForm] = useState({
    puranaId: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  });

  // Questions State
  const [questions, setQuestions] = useState([]);

  // Load Questions
  const loadQuestions = async () => {
    try {
      const res = await axios.get(
  `${import.meta.env.VITE_API_URL}/api/admin/questions`
);
      setQuestions(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Load questions when page opens
  useEffect(() => {
    loadQuestions();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Add Question
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/admin/add-question`,
  form
);

      alert(res.data.message);

      setForm({
        puranaId: "",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: "",
      });

      loadQuestions();

    } catch (err) {
      console.error(err);
      alert("Failed to add question");
    }
  };

  // Delete Question
  const deleteQuestion = async (id) => {
    if (!window.confirm("Are you sure you want to delete this question?")) {
      return;
    }

    try {
      await axios.delete(
  `${import.meta.env.VITE_API_URL}/api/admin/delete-question/${id}`
);

      alert("Question deleted successfully!");

      loadQuestions();

    } catch (err) {
      console.error(err);
      alert("Failed to delete question");
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-orange-700 mb-8">
          🛠 Admin Panel
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="number"
            name="puranaId"
            placeholder="Purana ID"
            value={form.puranaId}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
            required
          />

          <textarea
            name="question"
            placeholder="Question"
            value={form.question}
            onChange={handleChange}
            rows="3"
            className="w-full border p-3 rounded-lg mb-4"
            required
          />

          <input
            type="text"
            name="option1"
            placeholder="Option 1"
            value={form.option1}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
            required
          />

          <input
            type="text"
            name="option2"
            placeholder="Option 2"
            value={form.option2}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
            required
          />

          <input
            type="text"
            name="option3"
            placeholder="Option 3"
            value={form.option3}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
            required
          />

          <input
            type="text"
            name="option4"
            placeholder="Option 4"
            value={form.option4}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
            required
          />

          <input
            type="text"
            name="answer"
            placeholder="Correct Answer"
            value={form.answer}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-6"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700"
          >
            Add Question
          </button>

        </form>

        <hr className="my-10" />

        <h2 className="text-2xl font-bold text-orange-700 mb-6">
          All Questions
        </h2>

        {questions.length === 0 ? (
          <p>No questions found.</p>
        ) : (
          questions.map((q) => (
            <div
              key={q._id}
              className="border rounded-lg p-5 mb-5 bg-orange-50"
            >
              <h3 className="font-bold text-lg mb-2">
                {q.question}
              </h3>

              <p className="mb-2">
                <strong>Purana ID:</strong> {q.puranaId}
              </p>

              <ul className="list-disc ml-6 mb-3">
                {q.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>

              <p className="text-green-700 font-semibold mb-4">
                Correct Answer: {q.answer}
              </p>

              <button
                onClick={() => deleteQuestion(q._id)}
                className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))
        )}

      </div>
    </div>
  );
}