import { CircleDollarSign, GitFork, UserPen, AtSign } from "lucide-react";
export default function Footer() {
  return (
    <>
      <footer className="w-full px-6 py-4 mt-auto flex items-center justify-between text-[#72584e]">
        {" "}
        <div className="flex items-center text-md gap-12 ">
          <p className="flex items-center gap-1.5">
            <GitFork size={16} /> github
          </p>
          <p className="flex items-center gap-1.5">
            <CircleDollarSign size={16} /> support
          </p>
          <p className="flex items-center gap-1.5">
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
      </footer>
    </>
  );
}
