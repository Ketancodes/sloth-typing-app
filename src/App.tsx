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
  type TestConfig,
} from "./types/test";
import { useState } from "react";
import generateText from "./utils/generateText";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [words, setWords] = useState<WordsOption | null>(null); // words option state
  // states for option bar features
  const [testLengthMode, setTestLengthMode] = useState<TestLengthMode>("time");
  const [text, setText] = useState(() => generateText(300, "normal")); // state for generating text

  const [testMode, setTestMode] = useState<TestTypeMode>("normal"); // state for word mode

  const [testKey, setTestKey] = useState(0);
  const [teststate, setTeststate] = useState<TestState>("idle"); // state for 3 state updates
  const [result, setResult] = useState<TestResult | null>(null);
  const [time, setTime] = useState<TimeOption>(() => {
    // state for time option n sustaining the time on refesh
    const savedTime = localStorage.getItem("typing-time");

    if (savedTime === "15" || savedTime === "30" || savedTime === "60") {
      return Number(savedTime) as TimeOption;
    }

    return 30;
  });

  // for saving selected time option
  const updateTime = (newTime: TimeOption) => {
    setTime(newTime);
    localStorage.setItem("typing-time", String(newTime));
  };

  // fun for updating test mode in option bar
  const updateTestMode = (newTestMode: TestTypeMode) => {
    setTestMode(newTestMode);

    if (testLengthMode === "words" && words) {
      setText(generateText(words, newTestMode));
    } else {
      setText(generateText(300, newTestMode));
    }

    setTestKey((prev) => prev + 1);
    setTeststate("idle");
    setResult(null);
  };

  // fun for genarating new test
  const generateNewTest = (WordCount: WordsOption) => {
    setWords(WordCount);
    setTestLengthMode("words");
    setText(generateText(WordCount, testMode));
    setTestKey((prev) => prev + 1);
  };
  //d4bfb6

  // fun for generating time test
  const generateTimeTest = (time: TimeOption) => {
    updateTime(time);
    setTestLengthMode("time");
    setText(generateText(300, testMode));
    setTestKey((prev) => prev + 1);
  };

  // fun for reset
  const resetTest = () => {
    if (testLengthMode === "words" && words) {
      setText(generateText(words, testMode));
    } else {
      setText(generateText(300, testMode));
    }

    setTestKey((prev) => prev + 1);
    setTeststate("idle");
    setResult(null);
  };

  // test finish handler
  const handleTestFinish = (result: TestResult) => {
    setResult(result);
    setTeststate("finished");
  };

  // retry test fun
  const repeatTest = () => {
    setTestKey((prev) => prev + 1);
    setTeststate("idle");
    setResult(null);
  };

  const testConfig: TestConfig = {
    testLengthMode,
    testMode,
    timeOption: time,
    wordOption: words,
  };
  return (
    <>
      <div className="h-screen w-screen bg-[#c7afa5] flex flex-col">
        <Navbar />
        {teststate === "finished" && result ? (
          <Dashboard
            result={result}
            onReset={resetTest}
            onRepeat={repeatTest}
            testConfig={testConfig}
          />
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
              setTestMode={updateTestMode}
              time={time}
              // setTime={setTime}
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
          </>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
