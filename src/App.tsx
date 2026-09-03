import Navbar from "./components/Navbar";
import Optionbar from "./components/Optionbar";
import TypingTest from "./components/TypingTest";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="h-screen w-screen bg-[#d4bfb6] flex flex-col">
        <Navbar />
        <Optionbar />
        <TypingTest />
        <Footer />
      </div>
    </>
  );
}

export default App;
