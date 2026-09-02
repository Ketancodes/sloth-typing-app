import SlothTypingtext from "./SlothTypingtext";
import { Settings, Info, Trophy } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <nav className="h-20 w-full bg-[#d4bfb6] flex items-center px-2">
        {/* logo image */}
        <div>
          <img
            src="public\Your_paragraph_text__1_-removebg-preview.png"
            alt="logo"
            className="h-24 w-auto object-contain brightness-125 cursor-pointer max-sm:-ml-4"
          />
        </div>

        {/* sloth-typing-text-animation */}
        <div>
          <SlothTypingtext />
        </div>
        <div className="flex items-center gap-18  mr-4 ml-auto ">
          <Settings size={24} className="text-[#614e40] " />
          <Info size={24} className="text-[#614e40]" />
          <Trophy size={24} className="text-[#614e40]" />
          <button className="bg-[#f7e7d6] text-[#49372a] px-2.5 py-1.5 font-[Courier_Prime] font-semibold rounded-2xl text-sm shadow-[0_3px_0_#b09f8c] hover:translate-y-0.5 transition-all hover:bg-[#fae2c4] cursor-pointer">
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
}
