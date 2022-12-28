import { useEffect, useState } from 'react';
import SingleQuiz from './SingleQuiz';
import { Quiz } from '../models/model';
import sanitizeHtml from 'sanitize-html';

interface Props {
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuizPage: React.FC<Props> = ({ setIsStarted }) => {
  const [data, setData] = useState<Quiz[]>([]);
  const [isEnded, setIsEnded] = useState(false);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await (await fetch(import.meta.env.VITE_API_URL)).json();
      let { response_code, results } = res;

      if (response_code !== 0) throw new Error('API Error');

      // Randomly generate choices
      const generateChoices = (
        incorrect_answers: string[],
        correct_answer: string
      ) => {
        const choices = incorrect_answers;
        const randomIndex = Math.floor(Math.random() * choices.length);
        choices.splice(randomIndex, 0, correct_answer);
        return choices;
      };

      results.corect_answer = sanitizeHtml(results.correct_answer);
      results.incorrect_answers = sanitizeHtml(results.correct_answer);
      results.question = sanitizeHtml(results.question);

      results = results.map((item: Quiz) => ({
        ...item,
        choices: generateChoices(item.incorrect_answers, item.correct_answer),
      }));

      setData(results);
      setIsLoading(false);
    };
    getData();
  }, []);

  const notAnswerAll = () => {
    const cnt = data.reduce((sum, cur) => sum + +!!cur.choose, 0);
    return cnt !== data.length;
  };

  return (
    <>
      {!isLoading ? (
        <div className="flex w-[80%] flex-col justify-start">
          <div className="align-center mt-2 flex flex-col justify-around">
            {data.map(
              (quiz, index) =>
                index !== -1 && (
                  <SingleQuiz
                    key={index}
                    quiz={quiz}
                    setQuizzes={setData}
                    isEnded={isEnded}
                    setScore={setScore}
                  />
                )
            )}
          </div>
          {!isEnded ? (
            <button
              className={`mx-auto my-5 rounded-2xl py-4 px-8 text-xl text-white ${
                notAnswerAll() ? 'bg-gray-400' : 'bg-medium-violet'
              }`}
              onClick={() => setIsEnded(true)}
              disabled={notAnswerAll()}
            >
              Check Answers
            </button>
          ) : (
            <div className="flex justify-center align-middle">
              <h1 className="mr-24 self-center text-2xl font-bold">
                You scored {score}/{data.length} correct answers
              </h1>
              <button
                className="my-5 rounded-2xl bg-medium-violet py-3 px-12 text-xl text-white"
                onClick={() => setIsStarted(false)}
              >
                Play again
              </button>
            </div>
          )}
        </div>
      ) : (
        <h1 className="self-center text-3xl font-bold tracking-widest">
          Loading...
        </h1>
      )}
    </>
  );
};

export default QuizPage;
