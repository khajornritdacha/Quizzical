import { Quiz } from '../models/model';

interface Props {
  text: string;
  quiz: Quiz;
  setQuizzes: React.Dispatch<React.SetStateAction<Quiz[]>>;
}

const ChoiceButton: React.FC<Props> = ({ text, quiz, setQuizzes }) => {
  const handleClick = () => {
    setQuizzes((prev) => {
      return prev.map((curQuiz) => {
        if (curQuiz === quiz) {
          console.log('Found');
        }
        return curQuiz === quiz ? { ...curQuiz, choose: text } : curQuiz;
      });
    });
    console.log(quiz);
  };

  return (
    <div
      className={`mt-4 flex max-w-[20%] cursor-pointer content-center items-center rounded-2xl border-2 px-7 py-2 text-center font-medium ${
        quiz.choose !== text
          ? 'border-dark-violet'
          : 'border-transparent bg-light-violet'
      }`}
      onClick={handleClick}
    >
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default ChoiceButton;
