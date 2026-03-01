import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Play, Menu, X, Bot, Cpu, Cog } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ROBOTS, USE_CASES, MODULES } from "@/data/robotsData";

const Robotics = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const location = useLocation();

    useEffect(() => {
        document.body.classList.add('robotics-bg');
        window.scrollTo(0, 0);
        return () => document.body.classList.remove('robotics-bg');
    }, [location.pathname]);

    const featuredRobot = ROBOTS[0]; // Guideon

    return (
        <div className="min-h-screen text-white robotics-page">
            <SEO
                title="Robotics - AI-Powered Service Robots"
                description="Modular, AI-powered kiosk robots for hospitality, education, and service industries. From reception to coffee-serving - fully autonomous."
                path="/robotics"
            />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0d10]/90 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
                    <div className="flex items-center justify-between">
                        {/* Left - Back to Lab */}
                        <Link to="/" className="text-[#BEBEBE] hover:text-white transition-colors text-sm">
                            ← Back to Lab
                        </Link>

                        {/* Center - Title */}
                        <Link to="/robotics" className="absolute left-1/2 -translate-x-1/2 font-semibold text-white text-base md:text-lg">
                            Constant Labs Robotics
                        </Link>

                        {/* Right - Desktop nav */}
                        <div className="hidden md:flex items-center gap-6">
                            <a href="#products" className="text-[#BEBEBE] hover:text-white transition-colors text-sm">Products</a>
                            <a href="#use-cases" className="text-[#BEBEBE] hover:text-white transition-colors text-sm">Use Cases</a>
                            <a href="#contact" className="rb-btn-primary text-sm">Contact Us</a>
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
                            className="md:hidden bg-[#0a0d10] border-t border-white/10"
                        >
                            <div className="flex flex-col px-4 py-4 gap-4 text-center">
                                <Link to="/" className="text-[#BEBEBE] hover:text-white transition-colors text-sm py-2" onClick={() => setMobileMenuOpen(false)}>← Back to Lab</Link>
                                <a href="#products" className="text-[#BEBEBE] hover:text-white transition-colors text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Products</a>
                                <a href="#use-cases" className="text-[#BEBEBE] hover:text-white transition-colors text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Use Cases</a>
                                <a href="#contact" className="rb-btn-primary justify-center" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <main className="pt-16 md:pt-20">
                {/* Hero Section */}
                <section className="py-6 md:py-12 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Mobile: Text + Image stacked */}
                        <div className="md:hidden rb-hero-card p-6 overflow-hidden">
                            <div className="mb-6">
                                <h1 className="rb-heading-xl text-white mb-4">
                                    Meet<br /><span className="rb-accent">Guideon.</span>
                                </h1>
                                <p className="text-[#BEBEBE] text-base mb-6 leading-relaxed">
                                    {featuredRobot.description}
                                </p>
                                <div className="flex items-center gap-3">
                                    <Link to={`/robotics/${featuredRobot.slug}`} className="rb-btn-primary text-xs px-3 py-2">
                                        Learn More
                                    </Link>
                                    <a href="#products" className="rb-btn-secondary text-xs px-3 py-2">
                                        All Products
                                    </a>
                                </div>
                            </div>
                            <div className="rounded-xl overflow-hidden -mx-2">
                                <img src={featuredRobot.gallery[0]} alt={featuredRobot.name} className="w-full h-auto" />
                            </div>
                        </div>

                        {/* Desktop: Background image */}
                        <div
                            className="hidden md:flex rb-hero-card p-16 relative overflow-hidden min-h-[650px] items-center"
                            style={{
                                backgroundImage: `linear-gradient(to right, rgba(10,13,16,0.95) 0%, rgba(10,13,16,0.7) 50%, rgba(10,13,16,0.3) 100%), url('${featuredRobot.gallery[0]}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center top"
                            }}
                        >
                            <div>
                                <div className="max-w-xl">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium rb-badge-dev mb-4">
                                        <Cpu className="w-3 h-3" />
                                        {featuredRobot.statusLabel}
                                    </span>
                                    <h1 className="rb-heading-xl text-white mb-6">
                                        Meet<br /><span className="rb-accent">Guideon.</span>
                                    </h1>
                                    <p className="text-[#BEBEBE] text-lg mb-10 leading-relaxed max-w-lg">
                                        {featuredRobot.description}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <Link to={`/robotics/${featuredRobot.slug}`} className="rb-btn-primary text-sm px-4 py-2">
                                            Discover Full Spec
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                        <a href="#products" className="rb-btn-secondary text-sm px-4 py-2">
                                            View All Products
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products Grid */}
                <section id="products" className="py-16 md:py-24 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="rb-heading-lg text-white mb-4">Our Products</h2>
                            <p className="text-[#BEBEBE] text-base md:text-lg max-w-2xl mx-auto">
                                From full autonomous kiosks to educational testbeds – robots built for real-world deployment.
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {ROBOTS.map((robot, index) => (
                                <motion.div
                                    key={robot.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={`/robotics/${robot.slug}`}
                                        className="rb-card group relative overflow-hidden block"
                                    >
                                        {/* Status Badge */}
                                        <span className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold ${robot.status === 'built' ? 'rb-badge-built' :
                                            robot.status === 'in-dev' ? 'rb-badge-dev' : 'rb-badge-concept'
                                            }`}>
                                            {robot.status === 'built' ? 'Built' : robot.status === 'in-dev' ? 'In Dev' : 'Concept'}
                                        </span>

                                        <div className="aspect-[4/3] overflow-hidden">
                                            <img
                                                src={robot.gallery[0]}
                                                alt={robot.name}
                                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-lg font-semibold text-white mb-1">{robot.name}</h3>
                                            <p className="text-xs text-[#666] mb-2">Year {robot.year}</p>
                                            <p className="text-sm text-[#BEBEBE] mb-3">{robot.tagline}</p>
                                            <span className="inline-flex items-center gap-1 text-[#00D9FF] text-sm group-hover:gap-2 transition-all">
                                                Learn More <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Video Showreel */}
                <section className="py-10 md:py-20 px-4 md:px-6 bg-[#080a0d]">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-6 md:mb-10">
                            <h2 className="rb-heading-lg text-white mb-4">News Coverage</h2>
                            <p className="text-[#BEBEBE]">Watch Merhaab featured on Sharjah TV</p>
                        </div>
                        <div className="rb-card p-4">
                            <div className="aspect-video relative rounded-xl overflow-hidden">
                                <video
                                    controls
                                    playsInline
                                    preload="metadata"
                                    className="w-full h-full object-cover"
                                    poster="/robotics/merhaab/01.jpg"
                                    onPlay={() => setIsVideoPlaying(true)}
                                    onPause={() => setIsVideoPlaying(false)}
                                >
                                    <source src="/robotics/merhaab/reel.mp4" type="video/mp4" />
                                </video>
                                {!isVideoPlaying && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-20 h-20 rounded-full bg-[#00D9FF] flex items-center justify-center">
                                            <Play className="w-8 h-8 text-black ml-1" fill="#000" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Build Your Own Section */}
                <section id="use-cases" className="py-16 md:py-24 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="rb-heading-lg text-white mb-4">
                                Build <span className="rb-accent">Your Own</span> Robot
                            </h2>
                            <p className="text-[#BEBEBE] text-base md:text-lg max-w-3xl mx-auto">
                                Start with the Guideon chassis, bolt on the modules you need, upload a personality pack — and roll out a robot that fits <em>your</em> venue.
                            </p>
                        </div>

                        {/* Use Cases Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                            {USE_CASES.map((useCase, index) => (
                                <motion.div
                                    key={useCase.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="text-3xl">{useCase.icon}</div>
                                    <div>
                                        <h4 className="font-semibold text-white">{useCase.title}</h4>
                                        <p className="text-sm text-[#666]">{useCase.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Modules Grid */}
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {MODULES.map((module, index) => (
                                <motion.div
                                    key={module.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="rb-card p-6"
                                >
                                    <Cog className="w-8 h-8 text-[#00D9FF] mb-3" />
                                    <h3 className="text-lg font-semibold text-white mb-2">{module.title}</h3>
                                    <p className="text-sm text-[#888]">{module.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="contact" className="py-16 md:py-24 px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="rb-hero-card p-8 md:p-16 text-center">
                            <h2 className="rb-heading-lg text-white mb-4 md:mb-6">
                                Ready to Deploy?
                            </h2>
                            <p className="text-[#BEBEBE] text-base md:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                                Whether you need a single greeter or a fleet of service robots, we'll help you find the right solution.
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <a href="mailto:akhmad6093@gmail.com" className="rb-btn-primary">
                                    Get in Touch
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a href="https://wa.me/971561495656" target="_blank" rel="noopener noreferrer" className="rb-btn-secondary">
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-8 md:py-10 px-4 md:px-6 bg-[#080a0d] border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-white text-sm md:text-base">Constant Labs Robotics</span>
                        </div>
                        <div className="text-xs text-[#666] max-w-2xl leading-relaxed">
                            © 2025 Constant Labs. All rights reserved.
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to="/privacy" className="text-[10px] uppercase tracking-wide text-[#666] hover:text-[#00D9FF] transition-colors">Privacy Policy</Link>
                            <span className="text-[10px] text-[#333]">|</span>
                            <Link to="/terms" className="text-[10px] uppercase tracking-wide text-[#666] hover:text-[#00D9FF] transition-colors">Terms of Service</Link>
                        </div>
                        <Link to="/" className="text-xs text-[#00D9FF] hover:underline">
                            ← Back to Constant Labs
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Robotics;
