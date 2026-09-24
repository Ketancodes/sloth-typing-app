import Navbar from "./components/Navbar";
import Optionbar from "./components/Optionbar";
import TypingTest from "./components/TypingTest";
import Footer from "./components/Footer";
import {
  type WordsOption,
  type TestLengthMode,
  type TestTypeMode,
  type TimeOption,
  type TestState,
  type TestResult,
} from "./types/test";
import { useState } from "react";
import generateText from "./utils/generateText";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [words, setWords] = useState<WordsOption | null>(null); // words option state
  // states for option bar features
  const [testLengthMode, setTestLengthMode] = useState<TestLengthMode>("time");
  const [text, setText] = useState(() => generateText(300)); // state for generating text
  const [testMode, setTestMode] = useState<TestTypeMode>("normal"); // state for word mode
  const [time, setTime] = useState<TimeOption>(30); // state for timer
  const [testKey, setTestKey] = useState(0);
  const [teststate, setTeststate] = useState<TestState>("idle"); // state for 3 state updates
  const [result, setResult] = useState<TestResult | null>(null);

  // fun for genarating new test
  const generateNewTest = (WordCount: WordsOption) => {
    setWords(WordCount);
    setTestLengthMode("words");
    setText(generateText(WordCount));
    setTestKey((prev) => prev + 1);
  };
  //d4bfb6

  // fun for generating time test
  const generateTimeTest = (time: TimeOption) => {
    setTime(time);
    setTestLengthMode("time");
    setText(generateText(300));
    setTestKey((prev) => prev + 1);
  };

  // fun for reset
  const resetTest = () => {
    setText(generateText(300));
    setTestKey((prev) => prev + 1);
  };

  // test finish handler
  const handleTestFinish = (result: TestResult) => {
    setResult(result);
    setTeststate("finished");
  };
  return (
    <>
      <div className="h-screen w-screen bg-[#c7afa5] flex flex-col">
        <Navbar />
        {teststate === "finished" && result ? (
          <Dashboard result={result} />
        ) : (
          <>
            <Optionbar
              words={words}
              setWords={setWords}
              testLengthMode={testLengthMode}
              setTestLengthMode={setTestLengthMode}
              generateNewTest={generateNewTest}
              generateTimeTest={generateTimeTest}
              testMode={testMode}
              setTestMode={setTestMode}
              time={time}
              setTime={setTime}
              setTestKey={setTestKey}
            />

            <TypingTest
              key={testKey}
              testLengthMode={testLengthMode}
              words={words}
              text={text}
              duration={time}
              resetTest={resetTest}
              teststate={teststate}
              setTeststate={setTeststate}
              onFinish={handleTestFinish}
            />

            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
