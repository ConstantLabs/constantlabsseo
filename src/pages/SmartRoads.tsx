import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Quote, ExternalLink, Zap, Download, Play, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SmartRoadsArchitecture } from "@/components/SmartRoadsArchitecture";

const stats = [
  { value: "2cm", label: "Positioning Accuracy", quote: "...RTK positioning achieves centimeter-level accuracy in real-time...", url: "https://www.u-blox.com/en/technologies/rtk" },
  { value: "5-10%", label: "Adoption Needed", quote: "...even a small percentage of autonomous vehicles can eliminate stop-and-go waves...", url: "https://news.mit.edu/2017/autonomous-vehicles-reduce-traffic-flow-intersections-0323" },
  { value: "35%", label: "More Highway Throughput", quote: "...dissipating phantom jams can increase highway throughput by up to 35%...", url: "https://engineering.vanderbilt.edu/news/2018/phantom-traffic-jams-are-real-and-they-can-be-fixed" },
  { value: "40%", label: "Fuel Savings", quote: "...eliminating stop-and-go traffic reduces fuel consumption by up to 40%...", url: "https://path.berkeley.edu" },
];

const researchQuotes = [
  {
    text: "A single autonomous vehicle can eliminate stop-and-go waves caused by human drivers, with profound implications for fuel economy and traffic flow.",
    author: "Dr. Daniel Work",
    affiliation: "Vanderbilt University",
    link: "https://doi.org/10.1016/j.trc.2018.02.005",
  },
  {
    text: "5% penetration rate of coordinated vehicles produced measurable improvements for 100% of road users.",
    author: "Northwestern University",
    affiliation: "Traffic Lab",
    link: "https://doi.org/10.1016/j.trb.2020.06.001",
  },
  {
    text: "Connected vehicles represent the most significant opportunity to improve road safety since the invention of the seatbelt.",
    author: "Virginia Tech",
    affiliation: "Transportation Institute",
    link: "https://doi.org/10.1177/0361198120912756",
  },
];

const SmartRoads = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    document.body.classList.add('no-crt', 'smartroads-bg');
    window.scrollTo(0, 0);
    return () => document.body.classList.remove('no-crt', 'smartroads-bg');
  }, [location.pathname]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => setIsPlaying(false);
    const handleVideoPause = () => setIsPlaying(false);
    const handleVideoPlay = () => setIsPlaying(true);

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('pause', handleVideoPause);
    video.addEventListener('play', handleVideoPlay);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('pause', handleVideoPause);
      video.removeEventListener('play', handleVideoPlay);
    };
  }, []);

  return (
    <div className="min-h-screen text-white smartroads-page">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors ${mobileMenuOpen ? 'bg-[#0d0d0d]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Link to="/smartroads" className="flex items-center gap-2">
              <img src="/smartroads/logo.png" alt="SmartRoads" className="w-8 h-8 md:w-9 md:h-9" />
              <span className="font-semibold text-white text-base md:text-lg">SmartRoads</span>
            </Link>
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/smartroads/technology" className="text-[#BEBEBE] hover:text-white transition-colors text-sm">Technology</Link>
              <Link to="/smartroads/capabilities" className="text-[#BEBEBE] hover:text-white transition-colors text-sm">Capabilities</Link>
              <Link to="/smartroads/research" className="text-[#BEBEBE] hover:text-white transition-colors text-sm">Research</Link>
              <Link to="/smartroads/implementation" className="sr-btn-primary">View Plan</Link>
            </div>
            {/* Mobile hamburger */}
            <button 
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0d0d0d] border-t border-white/10"
            >
              <div className="flex flex-col px-4 py-4 gap-4 text-center">
                <Link to="/smartroads/technology" className="text-[#BEBEBE] hover:text-white transition-colors text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Technology</Link>
                <Link to="/smartroads/capabilities" className="text-[#BEBEBE] hover:text-white transition-colors text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Capabilities</Link>
                <Link to="/smartroads/research" className="text-[#BEBEBE] hover:text-white transition-colors text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Research</Link>
                <Link to="/smartroads/implementation" className="sr-btn-primary justify-center" onClick={() => setMobileMenuOpen(false)}>View Plan</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-6 md:py-12 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Mobile: Text + Image stacked */}
            <div className="md:hidden sr-hero-card p-6 overflow-hidden">
              <div className="mb-6">
                <h1 className="sr-heading-xl text-white mb-4">
                  End Traffic Jams.
                  <br /><span className="text-[#5CFF3D]">Forever.</span>
                </h1>
                <p className="text-[#BEBEBE] text-base mb-6 leading-relaxed">
                  MIT research proves: coordinate 5% of vehicles, eliminate congestion for everyone. 
                  We built the system to do it.
                </p>
                <div className="flex items-center gap-3">
                  <Link to="/smartroads/implementation" className="sr-btn-primary text-xs px-3 py-2">
                    View Plan
                  </Link>
                  <Link to="/smartroads/research" className="sr-btn-secondary text-xs px-3 py-2">
                    Research
                  </Link>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden -mx-2">
                <img src="/smartroads/front car.png" alt="SmartRoads Vehicle" className="w-full h-auto" />
              </div>
            </div>

            {/* Desktop: Background image */}
            <div 
              className="hidden md:flex sr-hero-card p-16 relative overflow-hidden min-h-[650px] items-center"
              style={{
                backgroundImage: "linear-gradient(to right, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.7) 50%, rgba(13,13,13,0.3) 100%), url('/smartroads/front car.png')",
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            >
              <div>
                <div className="max-w-xl">
                  <h1 className="sr-heading-xl text-white mb-6">
                    End Traffic Jams.
                    <br /><span className="text-[#5CFF3D]">Forever.</span>
                  </h1>
                  <p className="text-[#BEBEBE] text-lg mb-10 leading-relaxed max-w-lg">
                    MIT research proves: coordinate 5% of vehicles, eliminate congestion for everyone. 
                    We built the system to do it.
                  </p>
                  <div className="flex items-center gap-4">
                    <Link to="/smartroads/implementation" className="sr-btn-primary text-sm px-4 py-2">
                      View Plan
                    </Link>
                    <Link to="/smartroads/research" className="sr-btn-secondary text-sm px-4 py-2">
                      Research
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Architecture Diagram */}
        <SmartRoadsArchitecture />

        {/* The SmartRoads Unit */}
        <section className="py-10 md:py-20 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="sr-heading-lg text-white mb-4">The SmartRoads Unit</h2>
              <p className="text-[#BEBEBE] text-base md:text-lg max-w-2xl mx-auto">
                Two ways to bring precision navigation to any vehicle.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Option 1: App Integration */}
              <div className="sr-card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#5CFF3D]/10 flex items-center justify-center">
                    {/* USB Plug Icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5CFF3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="7" y="2" width="10" height="8" rx="1" />
                      <rect x="9" y="10" width="6" height="4" />
                      <line x1="10" y1="5" x2="10" y2="7" />
                      <line x1="14" y1="5" x2="14" y2="7" />
                      <line x1="12" y1="14" x2="12" y2="22" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">App Integration</h3>
                </div>
                <p className="text-[#BEBEBE] mb-4">
                  A compact device connects to your vehicle's OBD port. The SmartRoads app runs through 
                  <span className="text-white font-medium"> Apple CarPlay</span> or 
                  <span className="text-white font-medium"> Android Auto</span> - no extra screens needed.
                </p>
                <ul className="space-y-2 text-sm text-[#6b6b6b]">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5CFF3D]" />
                    Works with existing car displays
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5CFF3D]" />
                    Plug-and-play installation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5CFF3D]" />
                    Seamless smartphone integration
                  </li>
                </ul>
              </div>

              {/* Option 2: Full Display */}
              <div className="sr-card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#5CFF3D]/10 flex items-center justify-center">
                    {/* Monitor Icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5CFF3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Full Display</h3>
                </div>
                <p className="text-[#BEBEBE] mb-4">
                  A standalone smart display with built-in RTK receiver. Perfect for vehicles without 
                  CarPlay/Android Auto, or for 
                  <span className="text-white font-medium"> fleet deployments</span>.
                </p>
                <ul className="space-y-2 text-sm text-[#6b6b6b]">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5CFF3D]" />
                    All-in-one solution
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5CFF3D]" />
                    Works in any vehicle
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5CFF3D]" />
                    Optimized for commercial fleets
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Video Overview */}
        <section className="py-10 md:py-20 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6 md:mb-10">
              <h2 className="sr-heading-lg text-white mb-4">Quick Pitch</h2>
              <p className="text-[#BEBEBE]">Watch a 6-minute overview of SmartRoads</p>
            </div>
            <div className="sr-card p-4">
              <div className="aspect-video relative">
                <video 
                  ref={videoRef}
                  controls 
                  playsInline
                  className="w-full h-full rounded-xl object-cover"
                  poster="/smartroads/smart road.jpg"
                >
                  <source src="/smartroads/intro-video.mp4" type="video/mp4" />
                </video>
                {!isPlaying && (
                  <motion.button
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="w-24 h-24 rounded-full flex items-center justify-center bg-[#5CFF3D]"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Play className="w-10 h-10 text-black ml-1" fill="#000" />
                    </motion.div>
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="sr-card p-6 text-center group relative overflow-hidden cursor-pointer"
                >
                  {/* Default state */}
                  <div className="group-hover:opacity-0 transition-opacity duration-200">
                    <div className="text-[#5CFF3D] text-4xl font-extrabold">{stat.value}</div>
                    <div className="text-sm text-[#6b6b6b] mt-1">{stat.label}</div>
                  </div>
                  {/* Hover state */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-center items-center bg-[#5CFF3D] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <p className="text-black text-xs md:text-sm text-center leading-relaxed italic mb-3">"{stat.quote}"</p>
                    <a 
                      href={stat.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-black text-xs font-semibold underline hover:no-underline"
                    >
                      Read more →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature 1 - Eliminate Traffic */}
        <section className="py-10 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <h2 className="sr-heading-xl text-white mb-4 md:mb-6">
                  Eliminate Traffic<br />Congestion
                </h2>
                <p className="text-[#BEBEBE] text-base md:text-lg leading-relaxed max-w-md">
                  Research proves that controlling just 5-10% of vehicles can eliminate 
                  stop-and-go waves for everyone. Gentle, coordinated guidance prevents 
                  the hard braking that triggers congestion.
                </p>
              </div>
              <div className="sr-card p-4 md:p-5">
                <div className="sr-img-box aspect-video relative mb-3 md:mb-4 overflow-hidden">
                  <img src="/smartroads/driver_ui_stay_middle_lane.jpg" alt="Traffic Management" className="w-full h-full object-cover scale-[1.07]" />
                </div>
                <div className="sr-card p-4 md:p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[#6b6b6b] text-sm">Traffic Flow</span>
                    <span className="text-[#5CFF3D] text-sm font-semibold">+40%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#0d0d0d]">
                    <div className="h-full w-4/5 rounded-full bg-[#5CFF3D]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 2 - Emergency Response */}
        <section className="py-10 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="sr-card p-4 md:p-5 order-2 lg:order-1">
                <div className="sr-card p-4 md:p-5 mb-3 md:mb-4 flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[#5CFF3D]/15">
                    <Zap className="w-5 h-5 md:w-6 md:h-6 text-[#5CFF3D]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm md:text-base">Emergency Detected</div>
                    <div className="text-xs text-[#6b6b6b]">Ambulance approaching</div>
                  </div>
                </div>
                <div className="sr-img-box aspect-video relative overflow-hidden">
                  <img src="/smartroads/driver_ui_emergency_vehicle.jpg" alt="Emergency Response" className="w-full h-full object-cover scale-[1.07]" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="sr-heading-xl text-white mb-4 md:mb-6">
                  Sub-Second<br />Emergency Response
                </h2>
                <p className="text-[#BEBEBE] text-base md:text-lg leading-relaxed max-w-md">
                  Crash detection in under 100ms with automatic dispatch. The network 
                  instructs surrounding vehicles to clear a path for responders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 3 - Weather Safety */}
        <section className="py-10 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <h2 className="sr-heading-xl text-white mb-4 md:mb-6">
                  Weather-Adaptive<br />Safety
                </h2>
                <p className="text-[#BEBEBE] text-base md:text-lg leading-relaxed max-w-md">
                  During near-zero visibility, the display renders virtual visualization 
                  of nearby vehicles. Coordinated speed reductions prevent pileups.
                </p>
              </div>
              <div className="sr-card p-4 md:p-5">
                <div className="sr-img-box aspect-video relative overflow-hidden">
                  <img src="/smartroads/weather_vision_fog.jpg" alt="Weather Safety" className="w-full h-full object-cover scale-[1.07]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid */}
        <section className="py-10 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-16">
              <h2 className="sr-heading-xl text-white mb-4 md:mb-6">
                Transforming Roads Into <span className="text-[#5CFF3D]">Reality</span>
              </h2>
              <p className="text-[#BEBEBE] text-lg max-w-xl leading-relaxed">
                Unlock the full potential of UAE's road network with RTK precision 
                positioning and AI-powered coordination.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <Link to="/smartroads/research" className="rounded-[1.25rem] p-6 md:p-8 flex flex-col justify-between min-h-[260px] md:min-h-[320px] group cursor-pointer transition-all duration-300 bg-[#161616] hover:bg-[#5CFF3D]">
                <div className="flex justify-between items-start">
                  <p className="text-[#BEBEBE] leading-relaxed max-w-sm group-hover:text-black transition-colors">
                    Research proves controlling just 5-10% of vehicles eliminates congestion 
                    for everyone. The benefits cascade to all road users.
                  </p>
                  <span className="w-10 h-10 rounded-full flex items-center justify-center bg-[#5CFF3D]/20 text-[#5CFF3D] group-hover:bg-black group-hover:text-[#5CFF3D] flex-shrink-0 ml-4 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-black mt-8 transition-colors">Network Effects</h3>
              </Link>

              <Link to="/smartroads/technology" className="rounded-[1.25rem] p-6 md:p-8 flex flex-col justify-between min-h-[260px] md:min-h-[320px] group cursor-pointer transition-all duration-300 bg-[#161616] hover:bg-[#5CFF3D]">
                <div className="flex justify-between items-start">
                  <p className="text-[#BEBEBE] leading-relaxed max-w-sm group-hover:text-black transition-colors">
                    RTK GPS provides centimeter-level accuracy - 100x better than standard GPS. 
                    Know exact lane position for true coordination.
                  </p>
                  <span className="w-10 h-10 rounded-full flex items-center justify-center bg-[#5CFF3D]/20 text-[#5CFF3D] group-hover:bg-black group-hover:text-[#5CFF3D] flex-shrink-0 ml-4 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-black mt-8 transition-colors">Precision Technology</h3>
              </Link>

              <Link to="/smartroads/capabilities" className="rounded-[1.25rem] p-8 flex flex-col justify-between min-h-[280px] group cursor-pointer transition-all duration-300 bg-[#161616] hover:bg-[#5CFF3D]">
                <div className="flex justify-between items-start">
                  <p className="text-[#BEBEBE] leading-relaxed max-w-sm group-hover:text-black transition-colors">
                    Creates a complete, real-time digital mirror of UAE's entire road 
                    network for planning and decision-making.
                  </p>
                  <span className="w-10 h-10 rounded-full flex items-center justify-center bg-[#5CFF3D]/20 text-[#5CFF3D] group-hover:bg-black group-hover:text-[#5CFF3D] flex-shrink-0 ml-4 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-black mt-8 transition-colors">Digital Twin</h3>
              </Link>

              <Link to="/smartroads/capabilities" className="rounded-[1.25rem] p-6 md:p-8 flex flex-col justify-between min-h-[240px] md:min-h-[280px] group cursor-pointer transition-all duration-300 bg-[#161616] hover:bg-[#5CFF3D]">
                <div className="flex justify-between items-start">
                  <p className="text-[#BEBEBE] leading-relaxed max-w-sm group-hover:text-black transition-colors">
                    AI continuously learns from millions of interactions, improving 
                    predictions and guidance over time.
                  </p>
                  <span className="w-10 h-10 rounded-full flex items-center justify-center bg-[#5CFF3D]/20 text-[#5CFF3D] group-hover:bg-black group-hover:text-[#5CFF3D] flex-shrink-0 ml-4 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-black mt-8 transition-colors">Adaptive Learning</h3>
              </Link>
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="py-10 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-16">
              <h2 className="sr-heading-xl text-white mb-4 md:mb-6">
                Backed by <span className="text-[#5CFF3D]">Research</span>
              </h2>
              <p className="text-[#BEBEBE] text-base md:text-lg max-w-xl leading-relaxed">
                Leading researchers from MIT, UC Berkeley, Vanderbilt have validated these approaches.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {researchQuotes.map((quote, index) => (
                <motion.a
                  key={index}
                  href={quote.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="sr-card p-6 hover:bg-[#1c1c1c] transition-colors group block"
                >
                  <Quote className="w-6 h-6 text-[#5CFF3D]/40 mb-4" />
                  <p className="text-[#BEBEBE] mb-6 text-sm leading-relaxed">"{quote.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-white text-sm">{quote.author}</div>
                      <div className="text-xs text-[#6b6b6b]">{quote.affiliation}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#6b6b6b] group-hover:text-[#5CFF3D] transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 md:mt-14">
              <Link to="/smartroads/research" className="inline-flex items-center gap-2 text-white hover:text-[#5CFF3D] transition-colors text-sm font-medium">
                View All Research
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="sr-hero-card p-8 md:p-16 text-center">
              <h2 className="sr-heading-lg text-white mb-4 md:mb-6">
                Start Your Journey Today
              </h2>
              <p className="text-[#BEBEBE] text-base md:text-lg mb-6 md:mb-10 max-w-lg mx-auto leading-relaxed">
                The technology exists. The research is proven. The UAE has a 3-5 year 
                first-mover advantage. The time to act is now.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                <Link to="/smartroads/implementation" className="sr-btn-primary text-sm md:text-base">
                  View Implementation Plan
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
                <a href="/smartroads/smartroads-pitch.pdf" download className="sr-btn-secondary text-sm md:text-base">
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                  Download Pitch Deck
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 md:py-10 px-4 md:px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
            <div className="flex items-center gap-2">
              <img src="/smartroads/logo.png" alt="SmartRoads" className="w-8 h-8 md:w-9 md:h-9" />
              <span className="font-semibold text-white text-sm md:text-base">SmartRoads</span>
            </div>
            <div className="text-xs text-[#6b6b6b] max-w-2xl leading-relaxed">
              © 2025 SmartRoads. All rights reserved. This proposal, including all concepts, 
              methodologies, technical specifications, and intellectual property contained herein, 
              is confidential and proprietary. Unauthorized reproduction, distribution, or use 
              of this material without express written consent is strictly prohibited.
            </div>
            <div className="text-xs text-[#4a4a4a]">
              Protected under UAE Federal Law No. 38 of 2021 on Copyrights and Related Rights
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartRoads;
