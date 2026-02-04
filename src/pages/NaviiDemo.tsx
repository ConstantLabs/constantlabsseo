import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Maximize2, Minimize2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DEMO_SOURCE_URL = "https://navii-demo.vercel.app/";

const NaviiDemo = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="min-h-screen bg-navii-bg flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-navii-bg/95 backdrop-blur-lg z-10"
      >
        <div className="flex items-center gap-4">
          <Link to="/navii">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-white/5"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Navii
            </Button>
          </Link>
          <div className="hidden sm:block h-6 w-px bg-white/10" />
          <span className="hidden sm:block text-sm text-gray-400">
            Interactive Demo
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={DEMO_SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            title="Open in new tab"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={toggleFullscreen}
            className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Demo iframe */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex-1 relative"
      >
        <iframe
          src={DEMO_SOURCE_URL}
          className="absolute inset-0 w-full h-full border-0"
          title="Navii Interactive Demo"
          allow="camera; microphone; accelerometer; gyroscope"
        />
      </motion.div>

      {/* Mobile hint */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="sm:hidden px-4 py-3 bg-navii-cyan/10 border-t border-navii-cyan/20 text-center"
      >
        <p className="text-navii-cyan text-sm">
          For the best AR experience, use your mobile device
        </p>
      </motion.div>
    </div>
  );
};

export default NaviiDemo;
