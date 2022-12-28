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
    <div className="cursor-pointer" onClick={handleClick}>
      {text}
    </div>
  );
};

export default ChoiceButton;
