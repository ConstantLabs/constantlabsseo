import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => <a href="https://wa.me/971561495656" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="group fixed bottom-4 right-4 z-50 grid h-12 w-12 place-items-center border border-lime bg-ink text-lime shadow-[4px_4px_0_#C7FF38] transition-transform hover:-translate-y-1 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"><span className="pointer-events-none absolute bottom-full right-0 mb-3 whitespace-nowrap border border-line bg-paper px-3 py-2 text-xs font-bold text-ink opacity-0 transition-opacity group-hover:opacity-100">Chat on WhatsApp</span><FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" /></a>;

export { WhatsAppButton };
