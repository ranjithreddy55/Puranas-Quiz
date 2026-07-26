import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

export default function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/questions/${id}`)
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        console.error("Error fetching questions:", err);
      });
  }, [id]);


  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading Questions...
      </div>
    );
  }


  const question = questions[currentQuestion];


  const handleOptionClick = (option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion]: option,
    }));
  };


  const handleSubmit = async () => {

    const answered = Object.keys(selectedAnswers).length;


    if (answered < questions.length) {

      const confirmSubmit = window.confirm(
        `You have answered ${answered} out of ${questions.length} questions.\n\nUnanswered questions will be marked as incorrect.\n\nDo you want to submit anyway?`
      );


      if (!confirmSubmit) return;
    }


    let score = 0;


    questions.forEach((q, index) => {

      if (selectedAnswers[index] === q.answer) {
        score++;
      }

    });


    try {

      const user = JSON.parse(localStorage.getItem("user"));


      if (!user) {

        alert("Please login before submitting the quiz.");
        navigate("/login");
        return;

      }


      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/results`,
        {
          userEmail: user.email,
          puranaId: Number(id),
          score,
          total: questions.length,
        }
      );


      navigate("/result", {

        state: {
          score,
          total: questions.length,
        },

      });


    } catch (err) {

      console.error(err);
      alert("Failed to save quiz result");

    }

  };



  return (

    <div className="
      min-h-screen
      bg-gradient-to-br
      from-orange-100
      via-yellow-50
      to-orange-200
      py-10
      px-4
    ">


      <motion.div

        initial={{
          opacity: 0,
          y: 50
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.6
        }}

        className="
          max-w-3xl
          mx-auto
          bg-white/80
          backdrop-blur-lg
          rounded-3xl
          shadow-2xl
          p-8
          border
          border-orange-200
        "

      >


        <motion.h1

          initial={{
            opacity: 0,
            scale: 0.8
          }}

          animate={{
            opacity: 1,
            scale: 1
          }}

          className="
            text-4xl
            font-bold
            text-orange-700
            text-center
            mb-6
          "

        >

          📖 Puranas Quiz

        </motion.h1>



        {/* Progress Bar */}

        <div className="w-full bg-gray-200 rounded-full h-3 mb-6">


          <motion.div

            animate={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`
            }}

            transition={{
              duration: 0.5
            }}

            className="
              h-3
              bg-orange-600
              rounded-full
            "

          />


        </div>



        <div className="
          flex
          justify-between
          mb-6
          text-gray-600
          font-semibold
        ">


          <span>

            Question {currentQuestion + 1} of {questions.length}

          </span>


          <span>

            Selected: {Object.keys(selectedAnswers).length}/{questions.length}

          </span>


        </div>




        {/* Question */}

        <motion.h2

          key={currentQuestion}

          initial={{
            opacity: 0,
            x: 50
          }}

          animate={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration: 0.4
          }}

          className="
            text-2xl
            font-semibold
            mb-6
          "

        >

          {question.question}

        </motion.h2>




        {/* Options */}

        <div className="space-y-3">


          {question.options.map((option, index) => (


            <motion.button


              key={index}


              whileHover={{
                scale: 1.03
              }}


              whileTap={{
                scale: 0.95
              }}


              onClick={() => handleOptionClick(option)}


              className={`
                w-full
                text-left
                p-4
                rounded-xl
                border
                transition

                ${
                  selectedAnswers[currentQuestion] === option

                  ? 
                  "bg-orange-300 border-orange-600 shadow-lg shadow-orange-300"

                  :

                  "bg-white hover:bg-orange-100"
                }

              `}


            >

              {option}


            </motion.button>


          ))}


        </div>





        {/* Buttons */}

        <div className="
          flex
          justify-between
          items-center
          mt-8
        ">



          <motion.button

            whileHover={{
              scale: 1.05
            }}

            whileTap={{
              scale: 0.95
            }}

            onClick={() =>
              setCurrentQuestion((prev) => prev - 1)
            }

            disabled={currentQuestion === 0}

            className="
              bg-gray-500
              text-white
              px-6
              py-3
              rounded-lg
              disabled:opacity-50
            "

          >

            Previous

          </motion.button>





          <motion.button

            whileHover={{
              scale: 1.05
            }}

            whileTap={{
              scale: 0.95
            }}

            onClick={handleSubmit}

            className="
              bg-green-600
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-green-700
            "

          >

            Submit Quiz

          </motion.button>





          <motion.button

            whileHover={{
              scale: 1.05
            }}

            whileTap={{
              scale: 0.95
            }}

            onClick={() =>
              setCurrentQuestion((prev) => prev + 1)
            }

            disabled={currentQuestion === questions.length - 1}

            className="
              bg-orange-600
              text-white
              px-6
              py-3
              rounded-lg
              disabled:opacity-50
              hover:bg-orange-700
            "

          >

            Next

          </motion.button>



        </div>


      </motion.div>


    </div>

  );
}