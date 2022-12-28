import { useEffect, useState } from 'react';
import SingleQuiz from './SingleQuiz';
import { Quiz } from '../models/model';
import sanitizeHtml from 'sanitize-html';

const QuizPage = () => {
  const [data, setData] = useState<Quiz[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await (await fetch(import.meta.env.VITE_API_URL)).json();
      let { response_code, results } = res;

      if (response_code !== 0) throw new Error('API Error');

      console.log(results);

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

      results = results.map((item: Quiz) => ({
        ...item,
        question: sanitizeHtml(item.question),
        choices: generateChoices(item.incorrect_answers, item.correct_answer),
      }));

      setData(results);
    };
    getData();
  }, []);

  return (
    <div className="flex min-w-[70%] flex-col justify-start">
      <div className="align-center flex flex-col justify-around">
        {data.map(
          (quiz, index) =>
            index !== -1 && (
              <SingleQuiz key={index} quiz={quiz} setQuizzes={setData} />
            )
        )}
      </div>
      <button>Check Answers</button>
    </div>
  );
};

export default QuizPage;
