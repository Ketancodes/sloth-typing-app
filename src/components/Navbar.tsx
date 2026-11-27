import SlothTypingtext from "./SlothTypingtext";
import { IoMdSettings } from "react-icons/io";
import { FaInfo, FaTrophy } from "react-icons/fa";

const IconEffect =
  "text-(--muted-text) hover:text-(--text) transition-transform duration-200 ease-in-out hover:scale-95 cursor-pointer";

// #d4bfb6
const ComingSoonIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative group">
      {children}

      <span
        className="
          pointer-events-none
          absolute
          top-full
          left-1/2
          -translate-x-1/2
          mt-2
          whitespace-nowrap
          text-[12px]
          font-[Roboto_Mono]
          font-medium
          text-(--muted-text)
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-200
        "
      >
        Coming soon
      </span>
    </div>
  );
};

interface NavbarProp {
  onSettings: () => void;
  onAbout: () => void;
  onHome: () => void;
}
export default function Navbar({ onSettings, onAbout, onHome }: NavbarProp) {
  return (
    <>
      <nav className="h-16 w-full bg-(--background) flex items-center px-2 py-2">
        {/* logo image */}
        <button
          type="button"
          onClick={onHome}
          aria-label="Go to home"
          className="cursor-pointer"
        >
          <img
            src="/Your_paragraph_text__1_-removebg-preview.png"
            alt="Sloth Typing"
            className="h-20 my-auto w-auto object-contain brightness-125 max-sm:-ml-4"
          />
        </button>

        {/* sloth-typing-text-animation */}
        <div className="max-sm:hidden max-md:hidden">
          <SlothTypingtext />
        </div>
        {/* Right side elements */}
        <div className="flex items-center gap-18 max-sm:gap-6  mr-4 max-sm:mr-3  ml-auto ">
          <IoMdSettings
            size={22}
            className={`${IconEffect} max-sm:w-5 max-sm:h-5 `}
            onClick={onSettings}
          />

          <FaInfo
            size={20}
            className={`${IconEffect} max-sm:w-4.5 max-sm:h-4.5`}
            onClick={onAbout}
          />

          <ComingSoonIcon>
            <FaTrophy
              size={20}
              className={`${IconEffect} max-sm:w-4.5  max-sm:h-4.5 `}
            />
          </ComingSoonIcon>
          <button className="bg-(--button-background) text-(--signup-text) px-2.5 max-sm:px-2 py-1.5 max-sm:py-1 font-[Courier_Prime] font-semibold rounded-2xl text-sm max-sm:text-[12px] shadow-[0_4px_0_var(--button-shadow)] hover:translate-y-0.5 transition-all hover:bg-(--button-hover) cursor-pointer">
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
}
