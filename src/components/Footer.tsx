import { CircleDollarSign, UserPen, AtSign } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ContactModal from "./ContactModal";
import { useState } from "react";
export default function Footer() {
  const [isContModalOpen, setIsContModalOpen] = useState(false);
  return (
    <>
      <footer className="w-full px-6 py-4 mt-auto flex items-center justify-between text-[#644c42] font-[Courier_Prime]">
        {" "}
        <div className="flex items-center text-[15px] gap-12 ">
          <a
            href="https://github.com/Ketancodes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 cursor-pointer"
          >
            <FaGithub size={16} />
            github
          </a>
          <p className="flex items-center gap-1.5">
            <CircleDollarSign size={16} /> support
          </p>
          <p
            className="flex items-center gap-1.5"
            onClick={() => setIsContModalOpen(true)}
          >
            <UserPen size={16} /> contact
          </p>
        </div>
        <div className="flex items-center gap-8">
          <p className="flex items-center gap-1">
            <AtSign size={16} />
            2026 Sloth typing
          </p>
          <span className="hidden md:inline font-xl text-xl mx-2 mr-4">|</span>

          <span className="flex items-center gap-1 ">
            Built with <span className="text-[#ff0000]">❤️</span> and "passion"
          </span>
        </div>
        {isContModalOpen && (
          <ContactModal
            isOpen={isContModalOpen}
            onClose={() => setIsContModalOpen(false)}
          />
        )}
      </footer>
    </>
  );
}
