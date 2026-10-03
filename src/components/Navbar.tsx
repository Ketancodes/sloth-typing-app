import SlothTypingtext from "./SlothTypingtext";
import { IoMdSettings } from "react-icons/io";
import { FaInfo, FaTrophy } from "react-icons/fa";

const IconEffect =
  "text-[#968077] text-[#4E3A2B] transition-transform duration-200 ease-in-out hover:scale-95 cursor-pointer";

// #d4bfb6
export default function Navbar() {
  return (
    <>
      <nav className="h-16 w-full bg-[#c5afa6] flex items-center px-2 py-2">
        {/* logo image */}
        <div>
          <img
            src="public\Your_paragraph_text__1_-removebg-preview.png"
            alt="logo"
            className="h-20 my-auto w-auto object-contain brightness-125 cursor-pointer max-sm:-ml-4"
          />
        </div>

        {/* sloth-typing-text-animation */}
        <div>
          <SlothTypingtext />
        </div>
        {/* Right side elements */}
        <div className="flex items-center gap-18  mr-4 ml-auto ">
          <IoMdSettings size={22} className={IconEffect} />
          <FaInfo size={20} className={IconEffect} />
          <FaTrophy size={20} className={IconEffect} />
          <button className="bg-[#f7e7d6] text-[#49372a] px-2.5 py-1.5 font-[Courier_Prime] font-semibold rounded-2xl text-sm shadow-[0_4px_0_#b09f8c] hover:translate-y-0.5 transition-all hover:bg-[#f0e0cd] cursor-pointer">
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
}
