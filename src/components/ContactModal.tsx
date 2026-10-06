import { Bug, Lightbulb, MessagesSquare, X } from "lucide-react";
import { useEffect } from "react";

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactProps) {
  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const email = "kudtalkar@gmail.com";

  return (
    <>
      {/* Background overlay */}
      <div
        className="
          fixed inset-0
          z-40
          bg-[#49372a]/20
          backdrop-blur-sm
        "
        onClick={onClose}
      />

      {/* Contact Modal */}
      <div
        className="
          fixed
          z-50
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2

          w-[calc(100%-2rem)]
          max-w-150

          bg-[#dfc9bd]
          text-[#49372a]

          rounded-xl
          border
          border-[#b89e91]

          p-5
          shadow-[0_12px_40px_rgba(73,55,42,0.18)]

        "
      >
        {/* Heading */}
        <h2 className="text-2xl font-[Courier_Prime] font-semibold text-[#49372a] mb-2">
          Contact
        </h2>

        {/* Description */}
        <p className="text-sm font-[Roboto_Mono] font-medium leading-relaxed text-[#72584e] mb-5">
          Have something to say? or ask? or report? Feel free to reach out with
          feedback, suggestions, or anything that can make Sloth Typing better.
        </p>

        <p className="text-sm font-[Roboto_Mono] font-medium text-[#72584e]">
          Choose an option below to reach out.(default mail will open)
        </p>

        {/* Contact options */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Feedback */}
          <a
            href={`mailto:${email}?subject=Feedback%20for%20Sloth%20Typing`}
            className="
              flex
              items-center
              gap-3

              px-4
              py-4

              rounded-lg

              bg-[#f7e7d6]
              text-[#49372a]

              border
              border-[#c5afa6]

              hover:bg-[#f0e0cd]

              transition-colors
              duration-200

              cursor-pointer
            "
          >
            <MessagesSquare size={23} />

            <span className="font-[Courier_Prime] font-semibold">Feedback</span>
          </a>

          {/* Feature Request */}
          <a
            href={`mailto:${email}?subject=Feature%20Request%20for%20Sloth%20Typing`}
            className="
              flex
              items-center
              gap-3

              px-4
              py-4

              rounded-lg

              bg-[#f7e7d6]
              text-[#49372a]

              border
              border-[#c5afa6]

              hover:bg-[#f0e0cd]

              transition-colors
              duration-200

              cursor-pointer
            "
          >
            <Lightbulb size={23} />

            <span className="font-[Courier_Prime] font-semibold">
              Feature Request
            </span>
          </a>

          {/* Bug Report */}
          <a
            href={`mailto:${email}?subject=Bug%20Report%20for%20Sloth%20Typing`}
            className="
              col-span-2
              w-[70%]
              mx-auto

              flex
              items-center
              justify-center
              gap-3

              px-4
              py-4

              rounded-lg

              bg-[#f7e7d6]
              text-[#49372a]

              border
              border-[#c5afa6]

              hover:bg-[#f0e0cd]

              transition-colors
              duration-200

              cursor-pointer
            "
          >
            <Bug size={23} />

            <span className="font-[Courier_Prime] font-semibold">
              Bug Report
            </span>
          </a>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close contact"
          className="
            absolute
            top-4
            right-4

            text-[#72584e]

            hover:text-[#49372a]

            transition-colors
            duration-200

            cursor-pointer
          "
        >
          <X size={21} />
        </button>
      </div>

      <style>{`
        .animate-contact-in {
          animation: contactIn 0.15s ease-out forwards;
        }

        @keyframes contactIn {
          from {
            opacity: 0;
            transform: translate(-50%, calc(-50% - 6px));
          }

          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </>
  );
}
