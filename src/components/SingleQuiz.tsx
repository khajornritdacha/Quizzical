import { Quiz } from '../models/model';
import ChoiceButton from './ChoiceButton';

interface Props {
  quiz: Quiz;
  setQuizzes: React.Dispatch<React.SetStateAction<Quiz[]>>;
}

const SingleQuiz: React.FC<Props> = ({ quiz, setQuizzes }) => {
  return (
    <div className="my-[4%]">
      <h1>{quiz.question}</h1>
      <div className="flex justify-around">
        {quiz.choices.map((text, index) => {
          return (
            <ChoiceButton
              key={index}
              text={text}
              quiz={quiz}
              setQuizzes={setQuizzes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SingleQuiz;
