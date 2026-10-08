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
  type AppPage,
  type TestDifficulty,
} from "./types/test";
import { useState } from "react";
import generateText from "./utils/generateText";
import Dashboard from "./components/Dashboard/Dashboard";
import CustomModal from "./components/CustomModal";
import Settings from "./components/settings/Settings";
import { useSettings } from "./hooks/useSettings";

function App() {
  const {
    defaultMode,
    defaultTime,
    defaultWords,
    defaultTestType,
    defaultDifficulty,
  } = useSettings();

  const getInitialTestConfig = (): TestConfig => {
    const saved = sessionStorage.getItem("sloth-session-config");

    if (saved) {
      try {
        const parsed = JSON.parse(saved);

        const validMode =
          parsed.testLengthMode === "time" || parsed.testLengthMode === "words";

        const validTime =
          parsed.timeOption === 15 ||
          parsed.timeOption === 30 ||
          parsed.timeOption === 60;

        const validWords =
          parsed.wordOption === null ||
          parsed.wordOption === 15 ||
          parsed.wordOption === 30 ||
          parsed.wordOption === 50;

        const validTestMode =
          parsed.testMode === "normal" ||
          parsed.testMode === "punctuation" ||
          parsed.testMode === "numbers";

        const validDifficulty =
          parsed.difficulty === "normal" ||
          parsed.difficulty === "intermediate" ||
          parsed.difficulty === "advanced";

        if (
          validMode &&
          validTime &&
          validWords &&
          validTestMode &&
          validDifficulty
        ) {
          return parsed;
        }
      } catch {
        // Invalid session data → use Settings defaults
      }
    }

    return {
      testLengthMode: defaultMode,
      testMode: defaultTestType,
      timeOption: defaultTime,
      wordOption: defaultWords,
      difficulty: defaultDifficulty,
    };
  };

  const initialConfig = getInitialTestConfig();
  // const [words, setWords] = useState<WordsOption | null>(null); // words option state
  const [words, setWords] = useState<WordsOption | null>(
    initialConfig.wordOption,
  ); // state for words

  // states for option bar features
  const [testLengthMode, setTestLengthMode] = useState<TestLengthMode>(
    initialConfig.testLengthMode,
  ); // state for test length mode
  const [text, setText] = useState(() => {
    if (initialConfig.testLengthMode === "words") {
      return generateText(
        initialConfig.wordOption ?? defaultWords,
        initialConfig.testMode,
      );
    }

    return generateText(300, initialConfig.testMode);
  }); // state for generating text

  const [testMode, setTestMode] = useState<TestTypeMode>(
    initialConfig.testMode,
  ); // state for word mode

  const [testKey, setTestKey] = useState(0);
  const [teststate, setTeststate] = useState<TestState>("idle"); // state for 3 state updates
  const [result, setResult] = useState<TestResult | null>(null);
  const [time, setTime] = useState<TimeOption>(initialConfig.timeOption); // state for time mode
  const [difficulty] = useState<TestDifficulty>(initialConfig.difficulty); // state for difficlty test mode
  const [activeOption, setActiveOption] = useState<ActiveOption>(() => {
    if (
      initialConfig.testMode === "punctuation" ||
      initialConfig.testMode === "numbers"
    ) {
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

  const [currentPage, setCurrentPage] = useState<AppPage>("typing");

  const saveSessionConfig = (config: TestConfig) => {
    sessionStorage.setItem("sloth-session-config", JSON.stringify(config));
  }; // saving the session config fun

  // for saving selected time option
  // const updateTime = (newTime: TimeOption) => {
  //   setTime(newTime);

  //   saveSessionConfig({
  //     testLengthMode,
  //     testMode,
  //     timeOption: newTime,
  //     wordOption: words,
  //     difficulty,
  //   });
  // };

  // fun for updating test mode in option bar
  const updateTestMode = (newTestMode: TestTypeMode) => {
    setTestMode(newTestMode);

    if (testLengthMode === "words" && words) {
      setText(generateText(words, newTestMode));
    } else {
      setText(generateText(300, newTestMode));
    }

    saveSessionConfig({
      testLengthMode,
      testMode: newTestMode,
      timeOption: time,
      wordOption: words,
      difficulty,
    });

    setTestKey((prev) => prev + 1);
    setTeststate("idle");
    setResult(null);
  };

  // fun for genarating new test
  const generateNewTest = (WordCount: WordsOption) => {
    setWords(WordCount);
    setTestLengthMode("words");
    setText(generateText(WordCount, testMode));

    saveSessionConfig({
      testLengthMode: "words",
      testMode,
      timeOption: time,
      wordOption: WordCount,
      difficulty,
    });

    setTestKey((prev) => prev + 1);
  };

  // fun for genrating time test
  const generateTimeTest = (newTime: TimeOption) => {
    setTime(newTime);
    setTestLengthMode("time");
    setText(generateText(300, testMode));

    saveSessionConfig({
      testLengthMode: "time",
      testMode,
      timeOption: newTime,
      wordOption: words,
      difficulty,
    });

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
    difficulty,
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
  if (currentPage === "settings") {
    return (
      <>
        <Navbar onSettings={() => setCurrentPage("typing")} />
        <Settings />
      </>
    );
  }
  return (
    <>
      <div className="min-h-screen w-screen bg-[#c7afa5] flex flex-col">
        <Navbar onSettings={() => setCurrentPage("settings")} />
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
