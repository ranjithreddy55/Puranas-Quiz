import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import DivineBackground from "../components/DivineBackground";

export default function Result() {

  const { state } = useLocation();
  const navigate = useNavigate();


  if (!state) {

    return (

      <div className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-orange-50
      ">

        <h1 className="text-2xl font-bold text-orange-700">
          No Result Found
        </h1>

      </div>

    );

  }


  const { score, total } = state;


  const percentage = Math.round(
    (score / total) * 100
  );


  let message = "";
  let emoji = "";


  if (percentage >= 80) {

    message = "Excellent! You have great knowledge.";
    emoji = "🏆";

  } 
  
  else if (percentage >= 60) {

    message = "Good Job! Keep learning.";
    emoji = "😊";

  } 
  
  else {

    message = "Keep Practicing and improve your wisdom.";
    emoji = "📖";

  }



  return (

    <DivineBackground>



      <motion.div

        initial={{
          opacity:0,
          scale:0.7
        }}

        animate={{
          opacity:1,
          scale:1
        }}

        transition={{
          duration:0.6
        }}


        className="
          relative
          bg-white/80
          backdrop-blur-lg
          shadow-2xl
          rounded-3xl
          p-10
          w-[450px]
          text-center
          border
          border-orange-200
        "

      >



        {/* Trophy Animation */}

        <motion.div

          animate={{
            y:[0,-15,0]
          }}

          transition={{
            duration:2,
            repeat:Infinity
          }}

          className="text-7xl mb-5"

        >

          {emoji}

        </motion.div>




        <motion.h1

          initial={{
            opacity:0,
            y:-30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          className="
            text-4xl
            font-bold
            text-orange-700
          "

        >

          Quiz Completed

        </motion.h1>





        {/* Score */}

        <motion.h2

          initial={{
            scale:0
          }}

          animate={{
            scale:1
          }}

          transition={{
            delay:0.3,
            type:"spring"
          }}

          className="
            text-6xl
            font-bold
            text-orange-600
            my-8
          "

        >

          {score}/{total}

        </motion.h2>





        <motion.div

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:0.5
          }}

          className="
            bg-orange-100
            rounded-2xl
            p-5
            mb-6
          "

        >

          <p className="
            text-3xl
            font-bold
            text-orange-700
          ">

            {percentage}%

          </p>


          <p className="
            mt-2
            text-gray-700
          ">

            Accuracy

          </p>


        </motion.div>





        <motion.h3

          initial={{
            opacity:0,
            y:20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:0.7
          }}

          className="
            text-xl
            font-semibold
            mb-8
            text-gray-700
          "

        >

          {message}

        </motion.h3>





        <motion.button

          whileHover={{
            scale:1.08
          }}

          whileTap={{
            scale:0.95
          }}


          onClick={() => navigate("/")}

          className="
            bg-orange-600
            hover:bg-orange-700
            text-white
            px-10
            py-3
            rounded-xl
            font-semibold
            shadow-lg
          "

        >

          Go Home

        </motion.button>



      </motion.div>



    </DivineBackground>

  );
}