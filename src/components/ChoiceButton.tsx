import { Quiz } from '../models/model';

interface Props {
  text: string;
  quiz: Quiz;
  isEnded: boolean;
  setQuizzes: React.Dispatch<React.SetStateAction<Quiz[]>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const ChoiceButton: React.FC<Props> = ({
  text,
  quiz,
  isEnded,
  setQuizzes,
  setScore,
}) => {
  const handleClick = () => {
    setQuizzes((prev) => {
      return prev.map((curQuiz) => {
        return curQuiz === quiz ? { ...curQuiz, choose: text } : curQuiz;
      });
    });
  };

  let buttonStyle = 'border-dark-violet';
  if (!isEnded && quiz.choose === text) {
    buttonStyle = 'border-transparent bg-light-violet';
  } else if (isEnded) {
    if (quiz.choose === text) {
      buttonStyle = 'border-transparent bg-red-300';
    }

    if (text === quiz.correct_answer) {
      buttonStyle = 'border-transparent bg-green-300';
    }
  }

  return (
    <div
      className={`mt-4 flex max-w-[20%] cursor-pointer content-center items-center rounded-2xl border-2 px-7 py-2 text-center font-medium ${buttonStyle}`}
      onClick={handleClick}
    >
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default ChoiceButton;
