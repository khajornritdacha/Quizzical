import { useState } from 'react';
import LandingPage from './components/LandingPage';
import QuizPage from './components/QuizPage';

export default function App() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <>
      <main className="bg-light-sky">
        <div className="flex min-h-screen justify-center  align-middle font-karla">
          {!isStarted ? (
            <LandingPage setIsStarted={setIsStarted} />
          ) : (
            <QuizPage setIsStarted={setIsStarted} />
          )}
        </div>
      </main>
    </>
  );
}
