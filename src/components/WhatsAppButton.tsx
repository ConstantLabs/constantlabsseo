const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/971561495656"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50"
    >
      {/* Tooltip */}
      <span className="pointer-events-none absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        Chat on WhatsApp
      </span>

      {/* Button */}
      <div
        className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{ backgroundColor: "#25D366" }}
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 13.8992 2.52048 15.6766 3.41898 17.2033L2.02148 22L6.94398 20.6248C8.41648 21.4355 10.1536 21.8993 11.9993 21.8993C17.5221 21.8993 21.999 17.4221 21.999 11.8993C21.999 9.2147 20.9758 6.74418 19.2419 4.90765C17.4307 3.0004 15.0286 2 12.001 2ZM12.001 3.89777C14.5183 3.89777 16.8429 4.83651 18.4804 6.56055C20.0516 8.21409 20.9993 10.4431 20.9993 11.8993C20.9993 16.3765 17.4765 19.8993 11.9993 19.8993C10.387 19.8993 8.86572 19.4709 7.5568 18.7041L7.22559 18.5146L4.47559 19.2676L5.24609 16.5879L5.03516 16.2402C4.18041 14.8682 3.71875 13.4793 3.71875 12C3.71875 6.97715 7.97813 3.89777 12.001 3.89777ZM8.67188 7.26367C8.49388 7.26367 8.20654 7.33007 7.95654 7.60107C7.70654 7.87207 7.00098 8.53115 7.00098 9.87115C7.00098 11.2112 7.97754 12.5049 8.11254 12.6849C8.24754 12.8649 9.99706 15.5808 12.6621 16.7458C14.8701 17.7108 15.3281 17.5305 15.8281 17.4805C16.3281 17.4305 17.4961 16.8145 17.7461 16.1445C17.9961 15.4745 17.9961 14.9004 17.9141 14.7744C17.8321 14.6484 17.6514 14.5664 17.3764 14.4204C17.1014 14.2744 15.7634 13.6133 15.5134 13.5273C15.2634 13.4413 15.0781 13.3994 14.8926 13.6704C14.7071 13.9414 14.1894 14.5547 14.0254 14.7357C13.8614 14.9167 13.6914 14.9414 13.4164 14.7954C13.1414 14.6494 12.2441 14.3565 11.1787 13.4072C10.3529 12.6636 9.80566 11.7441 9.64066 11.4691C9.47566 11.1941 9.62402 11.0479 9.76953 10.9014C9.9004 10.7705 10.0664 10.5586 10.2124 10.3936C10.3584 10.2286 10.4004 10.1074 10.4854 9.92188C10.5704 9.73638 10.5293 9.57227 10.4463 9.42627C10.3643 9.28027 9.83887 7.93262 9.5918 7.38965C9.3623 6.88965 9.12207 6.86816 8.99707 6.86816L8.67188 7.26367Z" />
        </svg>

        {/* Pulsing online dot */}
        <span className="absolute right-0.5 top-0.5 flex h-3.5 w-3.5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white" />
        </span>
      </div>
    </a>
  );
};

export { WhatsAppButton };
