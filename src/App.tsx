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
  const [words, setWords] = useState<WordsOption | null>(null);
  // states for option bar features
  const [testLengthMode, setTestLengthMode] = useState<TestLengthMode>("time");
  const [text, setText] = useState(() => generateText(300)); // state for generating text
  const [testMode, setTestMode] = useState<TestTypeMode>("normal"); // state for word mode
  const [time, setTime] = useState<TimeOption>(30); // state for timer
  const generateNewTest = (WordCount: WordsOption) => {
    setWords(WordCount);
    setText(generateText(WordCount));
  };
  return (
    <>
      <div className="h-screen w-screen bg-[#d4bfb6] flex flex-col">
        <Navbar />
        <Optionbar
          words={words}
          setWords={setWords}
          testLengthMode={testLengthMode}
          setTestLengthMode={setTestLengthMode}
          generateNewTest={generateNewTest}
          testMode={testMode}
          setTestMode={setTestMode}
          time={time}
          setTime={setTime}
        />

        <TypingTest
          testLengthMode={testLengthMode}
          words={words}
          text={text}
          duration={time}
        />

        <Footer />
      </div>
    </>
  );
}

export default App;
