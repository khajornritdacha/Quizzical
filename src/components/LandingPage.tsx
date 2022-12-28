interface Props {
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const LandingPage: React.FC<Props> = ({ setIsStarted }) => {
  return (
    <>
      <div className="flex flex-col justify-center text-center align-middle leading-loose text-dark-violet">
        <h1 className="mb-2 text-7xl font-bold tracking-wider">Quizzical</h1>
        <p className="mb-8 text-2xl">
          A Quiz To Test Your <b>IQ</b>
        </p>
        <button
          className="mx-auto rounded-2xl bg-medium-violet py-4 px-8 text-2xl text-white"
          onClick={() => setIsStarted(true)}
        >
          Start Quiz
        </button>
      </div>
    </>
  );
};

export default LandingPage;
