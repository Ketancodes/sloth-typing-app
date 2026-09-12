import Navbar from "./components/Navbar";
import Optionbar from "./components/Optionbar";
import TypingTest from "./components/TypingTest";
import Footer from "./components/Footer";
import {
  type WordsOption,
  type TestLengthMode,
  type TestTypeMode,
  type TimeOption,
} from "./types/test";
import { useState } from "react";
import generateText from "./utils/generateText";

function App() {
  const [words, setWords] = useState<WordsOption | null>(null); // words option state
  // states for option bar features
  const [testLengthMode, setTestLengthMode] = useState<TestLengthMode>("time");
  const [text, setText] = useState(() => generateText(300)); // state for generating text
  const [testMode, setTestMode] = useState<TestTypeMode>("normal"); // state for word mode
  const [time, setTime] = useState<TimeOption>(30); // state for timer
  const [testKey, setTestKey] = useState(0);

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
  return (
    <>
      <div className="h-screen w-screen bg-[#c7afa5] flex flex-col">
        <Navbar />
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
        />

        <Footer />
      </div>
    </>
  );
}

export default App;
