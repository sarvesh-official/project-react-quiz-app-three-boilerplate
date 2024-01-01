import { useState } from "react";
import questions from "../../resources/quizQuestions.json";
import { useNavigate } from "react-router-dom";

function QuizComponent() {
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState([]);
  const navigate = useNavigate();

  const onNextQuestion = () =>
    setNum((prevNum) => (prevNum < 9 ? prevNum + 1 : prevNum));
  const onPreviousQuestion = () =>
    setNum((prevNum) => (prevNum > 0 ? prevNum - 1 : prevNum));
  const onSelectOption = (e) => {
    const selectedAnswer = e.target.innerText;
    const isCorrect = selectedAnswer === questions[num].answer;
    alert(isCorrect ? "Correct answer" : "Incorrect answer");

    if (!attempted.includes(num)) {
      setAttempted((prevAttempted) => [...prevAttempted, num]);
      setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
    }

    onNextQuestion();
  };

  const onFinishQuiz = () =>
    navigate("/Result", { state: { score, attempted } });

  const onQuitQuiz = () => {
    if (window.confirm("Are you sure you want to quit?")) {
      navigate("/");
    }
  };

  return (
    <div className="quiz flex flex-col justify-center items-center">
      <div className="flex flex-col space-y-5">
        <h2>Question</h2>
        <div>
          <h4>{num + 1} of 10</h4>
          <p className="question">{questions[num].question}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 items-center justify-center">
          {["A", "B", "C", "D"].map((option, index) => (
            <div
              key={index}
              className="bg-black p-3 rounded-md cursor-pointer flex items-center justify-center text-white hover:bg-gray-700"
              onClick={onSelectOption}
            >
              {questions[num][`option${option}`]}
            </div>
          ))}
        </div>
      </div>
      <div className="my-6 space-x-3">
        <button className="bg-slate-500" onClick={onPreviousQuestion}>
          {" "}
          Previous{" "}
        </button>
        <button className="bg-blue-500" onClick={onNextQuestion}>
          {" "}
          Next{" "}
        </button>
        <button className="bg-red-500" onClick={onQuitQuiz}>
          {" "}
          Quit{" "}
        </button>
        <button className="bg-green-500" onClick={onFinishQuiz}>
          {" "}
          Finish{" "}
        </button>
      </div>
    </div>
  );
}

export default QuizComponent;
