import Quiz from "./Quiz";
import { QuizProvider } from "./QuizContext";

export default function ReactQuiz() {
  return (
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  );
}

// todo
// allow user to select a certain number of questions
// filter difficulty
// upload highscore to fake api so on re-load could fetch the highscore and place it back into the state
// store all the user answers inside an array instead of current answer, so it could be re-viewed by user
