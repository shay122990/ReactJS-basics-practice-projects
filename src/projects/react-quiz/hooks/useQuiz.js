import { useContext } from "react";
import { QuizContext } from "../QuizContext";

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("Quiz Context was used outside of QuizProvider");
  return context;
}
export { useQuiz };
