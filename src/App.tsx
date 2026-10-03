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
  type ActiveOption,
  type CustomTestConfig,
} from "./types/test";
import { useState } from "react";
import generateText from "./utils/generateText";
import Dashboard from "./components/Dashboard/Dashboard";
import CustomModal from "./components/CustomModal";

function App() {
  // const [words, setWords] = useState<WordsOption | null>(null); // words option state
  const [words, setWords] = useState<WordsOption | null>(() => {
    const savedWords = localStorage.getItem("typing-words");

    if (savedWords === "15" || savedWords === "30" || savedWords === "50") {
      return Number(savedWords) as WordsOption;
    }

    return null;
  });
  // states for option bar features
  const [testLengthMode, setTestLengthMode] = useState<TestLengthMode>(() => {
    const savedMode = localStorage.getItem("typing-length-mode");

    if (savedMode === "time" || savedMode === "words") {
      return savedMode;
    }

    return "time";
  });
  const [text, setText] = useState(() => {
    const savedTestMode = localStorage.getItem("typing-test-mode");

    const initialTestMode: TestTypeMode =
      savedTestMode === "normal" ||
      savedTestMode === "punctuation" ||
      savedTestMode === "numbers"
        ? savedTestMode
        : "normal";

    return generateText(300, initialTestMode);
  }); // state for generating text

  const [testMode, setTestMode] = useState<TestTypeMode>(() => {
    const savedTestMode = localStorage.getItem("typing-test-mode");

    if (
      savedTestMode === "normal" ||
      savedTestMode === "punctuation" ||
      savedTestMode === "numbers"
    ) {
      return savedTestMode;
    }

    return "normal";
  }); // state for word mode

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
  const [activeOption, setActiveOption] = useState<ActiveOption>(() => {
    const savedTestMode = localStorage.getItem("typing-test-mode");

    if (savedTestMode === "punctuation" || savedTestMode === "numbers") {
      return "test";
    }

    return "length";
  });
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const [customTest, setCustomTest] = useState<CustomTestConfig | null>(() => {
    const saved = localStorage.getItem("custom-test");

    if (!saved) return null;

    return JSON.parse(saved);
  });
  const [activeCustomTest, setActiveCustomTest] =
    useState<CustomTestConfig | null>(null);

  // for saving selected time option
  const updateTime = (newTime: TimeOption) => {
    setTime(newTime);
    localStorage.setItem("typing-time", String(newTime));
  };

  // fun for updating test mode in option bar
  const updateTestMode = (newTestMode: TestTypeMode) => {
    setTestMode(newTestMode);
    localStorage.setItem("typing-test-mode", newTestMode);

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
    localStorage.setItem("typing-words", String(WordCount));
    setTestLengthMode("words");
    localStorage.setItem("typing-length-mode", "words");
    setText(generateText(WordCount, testMode));
    setTestKey((prev) => prev + 1);
  };
  //d4bfb6

  // fun for generating time test
  // const generateTimeTest = (time: TimeOption) => {
  //   updateTime(time);
  //   setTestLengthMode("time");
  //   localStorage.setItem("typing-length-mode", "time");
  //   setText(generateText(300, testMode));
  //   setTestKey((prev) => prev + 1);
  // };

  const generateTimeTest = (time: TimeOption) => {
    updateTime(time);
    setTestLengthMode("time");
    localStorage.setItem("typing-length-mode", "time");
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

  const saveCustomTest = (config: CustomTestConfig) => {
    localStorage.setItem("custom-test", JSON.stringify(config));
    setCustomTest(config);
  };

  const practiceCustomTest = (config: CustomTestConfig) => {
    setActiveCustomTest(config);
    const repeatedText = Array(5).fill(config.text).join(" ");

    setText(repeatedText);
    setTime(config.time);
    setTestLengthMode("time");
    setTestKey((prev) => prev + 1);
    setTeststate("idle");
    setResult(null);
  };

  const extendCustomText = () => {
    if (!activeCustomTest) return;

    const repeatedText = Array(3).fill(activeCustomTest.text).join(" ");

    setText((prev) => `${prev.trimEnd()} ${repeatedText}`);
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
              activeOption={activeOption}
              setActiveOption={setActiveOption}
              isCustomOpen={isCustomOpen}
              setIsCustomOpen={setIsCustomOpen}
            />
            {isCustomOpen && (
              <CustomModal
                setIsCustomOpen={setIsCustomOpen}
                onSave={saveCustomTest}
                onPractice={practiceCustomTest}
                customTest={customTest}
              />
            )}

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
              isCustomTest={activeCustomTest !== null}
              onExtendCustomTest={extendCustomText}
              customTextLength={activeCustomTest?.text.length ?? 0}
            />
          </>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
