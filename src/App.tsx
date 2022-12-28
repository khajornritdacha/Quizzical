import { useState } from 'react';
import LandingPage from './components/LandingPage';
import QuizPage from './components/QuizPage';

export default function App() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <>
      <main className="before:bg-[url('./src/assets/blobsYellow.png') relative overflow-hidden before:absolute before:-z-10 before:h-[500px] before:w-[500px] before:bg-no-repeat before:content-['']">
        <div className="flex h-screen justify-center bg-light-sky align-middle font-karla">
          {!isStarted ? (
            <LandingPage setIsStarted={setIsStarted} />
          ) : (
            <QuizPage />
          )}
        </div>
      </main>
    </>
  );
}
