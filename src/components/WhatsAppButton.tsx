import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/971561495656"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 block"
    >
      {/* Tooltip */}
      <span className="pointer-events-none absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        Chat on WhatsApp
      </span>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-25 pointer-events-none" />

      {/* Button */}
      <div
        className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-transform duration-200 group-hover:scale-110 active:scale-95"
        style={{ backgroundColor: "#25D366" }}
      >
        <FaWhatsapp className="h-8 w-8 text-white" aria-hidden="true" />
      </div>
    </a>
  );
};

export { WhatsAppButton };
