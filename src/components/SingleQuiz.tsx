import { Quiz } from '../models/model';
import ChoiceButton from './ChoiceButton';

interface Props {
  quiz: Quiz;
  setQuizzes: React.Dispatch<React.SetStateAction<Quiz[]>>;
  isEnded: boolean;
}

const SingleQuiz: React.FC<Props> = ({ quiz, setQuizzes, isEnded }) => {
  return (
    <div className="mt-8 text-dark-violet">
      <h1
        className="text-xl font-bold"
        dangerouslySetInnerHTML={{ __html: quiz.question }}
      />
      <div className="flex justify-around">
        {quiz.choices.map((text, index) => {
          return (
            <ChoiceButton
              key={index}
              text={text}
              quiz={quiz}
              setQuizzes={setQuizzes}
              isEnded={isEnded}
            />
          );
        })}
      </div>
      <hr className="mt-4 h-[2px] rounded border-0 bg-light-violet" />
    </div>
  );
};

export default SingleQuiz;
