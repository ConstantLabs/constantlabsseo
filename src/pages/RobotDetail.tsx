import { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Bot, ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { SEO } from "@/components/SEO";
import { getRobotBySlug, ROBOTS } from "@/data/robotsData";

const RobotDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const location = useLocation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const robot = getRobotBySlug(slug || "");

    useEffect(() => {
        document.body.classList.add('robotics-bg');
        window.scrollTo(0, 0);
        return () => document.body.classList.remove('robotics-bg');
    }, [location.pathname]);

    if (!robot) {
        return (
            <div className="min-h-screen flex items-center justify-center robotics-page text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Robot Not Found</h1>
                    <Link to="/robotics" className="rb-btn-primary">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Robotics
                    </Link>
                </div>
            </div>
        );
    }

    const currentIndex = ROBOTS.findIndex(r => r.slug === slug);
    const prevRobot = currentIndex > 0 ? ROBOTS[currentIndex - 1] : null;
    const nextRobot = currentIndex < ROBOTS.length - 1 ? ROBOTS[currentIndex + 1] : null;

    const thumbnailStripRef = useRef<HTMLDivElement>(null);

    // Scroll thumbnail into view when image changes
    const scrollToThumbnail = (index: number) => {
        if (thumbnailStripRef.current) {
            const thumbnails = thumbnailStripRef.current.children;
            if (thumbnails[index]) {
                const thumbnail = thumbnails[index] as HTMLElement;
                const container = thumbnailStripRef.current;
                const scrollLeft = thumbnail.offsetLeft - container.offsetWidth / 2 + thumbnail.offsetWidth / 2;
                container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
        }
    };

    const nextImage = () => {
        const newIndex = (currentImageIndex + 1) % robot.gallery.length;
        setCurrentImageIndex(newIndex);
        scrollToThumbnail(newIndex);
    };

    const prevImage = () => {
        const newIndex = (currentImageIndex - 1 + robot.gallery.length) % robot.gallery.length;
        setCurrentImageIndex(newIndex);
        scrollToThumbnail(newIndex);
    };

    return (
        <div className="min-h-screen text-white robotics-page">
            <SEO
                title={`${robot.name} - Robotics`}
                description={robot.description}
            />

            {/* Lightbox */}
            {lightboxOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
                    onClick={() => setLightboxOpen(false)}
                >
                    <button
                        className="absolute top-4 right-4 p-2 text-white hover:text-[#00D9FF]"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-[#00D9FF]"
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>
                    <img
                        src={robot.gallery[currentImageIndex]}
                        alt={`${robot.name} ${currentImageIndex + 1}`}
                        className="max-h-[90vh] max-w-[90vw] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-[#00D9FF]"
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/60">
                        {currentImageIndex + 1} / {robot.gallery.length}
                    </div>
                </motion.div>
            )}

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0d10]/90 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
                    <div className="flex items-center justify-between">
                        {/* Left - Back */}
                        <Link to="/robotics" className="text-[#BEBEBE] hover:text-white transition-colors text-sm">
                            ← Back to Robotics
                        </Link>

                        {/* Center - Title */}
                        <span className="absolute left-1/2 -translate-x-1/2 font-semibold text-white text-base md:text-lg">
                            Constant Labs Robotics
                        </span>

                        {/* Right - spacer for balance */}
                        <div className="w-24" />
                    </div>
                </div>
            </nav>

            <main className="pt-20 md:pt-24">
                {/* Hero */}
                <section className="py-6 md:py-12 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                            {/* Image Gallery */}
                            <div className="space-y-4">
                                {/* Main Image */}
                                <div
                                    className="rb-card p-2 cursor-pointer"
                                    onClick={() => setLightboxOpen(true)}
                                >
                                    <div className="aspect-[4/3] rounded-xl overflow-hidden">
                                        <motion.img
                                            key={currentImageIndex}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            src={robot.gallery[currentImageIndex]}
                                            alt={robot.name}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                </div>

                                {/* Thumbnail Carousel */}
                                <div className="flex items-center justify-center gap-2">
                                    {/* Left Arrow - Previous Image */}
                                    <button
                                        onClick={prevImage}
                                        className="flex-shrink-0 w-10 h-10 bg-[#0a0d10]/80 hover:bg-[#00D9FF] rounded-full flex items-center justify-center text-white hover:text-black transition-colors"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>

                                    {/* Thumbnail Strip with Edge Fade */}
                                    <div className="relative max-w-[calc(100%-100px)]">
                                        {/* Left fade */}
                                        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0a0d10] to-transparent z-10 pointer-events-none" />
                                        {/* Right fade */}
                                        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0a0d10] to-transparent z-10 pointer-events-none" />

                                        <div
                                            ref={thumbnailStripRef}
                                            className="flex gap-2 overflow-x-auto scrollbar-hide py-2 px-4 justify-start select-none cursor-grab active:cursor-grabbing"
                                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                            onMouseDown={(e) => {
                                                const container = e.currentTarget;
                                                container.dataset.isDown = 'true';
                                                container.dataset.startX = String(e.pageX - container.offsetLeft);
                                                container.dataset.scrollLeft = String(container.scrollLeft);
                                            }}
                                            onMouseLeave={(e) => { e.currentTarget.dataset.isDown = 'false'; }}
                                            onMouseUp={(e) => { e.currentTarget.dataset.isDown = 'false'; }}
                                            onMouseMove={(e) => {
                                                const container = e.currentTarget;
                                                if (container.dataset.isDown !== 'true') return;
                                                e.preventDefault();
                                                const x = e.pageX - container.offsetLeft;
                                                const walk = (x - Number(container.dataset.startX)) * 2;
                                                container.scrollLeft = Number(container.dataset.scrollLeft) - walk;
                                            }}
                                        >
                                            {robot.gallery.map((img, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => { setCurrentImageIndex(idx); scrollToThumbnail(idx); }}
                                                    className={`flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-xl overflow-hidden border-2 transition-all ${idx === currentImageIndex
                                                        ? 'border-[#00D9FF] scale-110'
                                                        : 'border-transparent opacity-60 hover:opacity-100'
                                                        }`}
                                                >
                                                    <img
                                                        src={img}
                                                        alt=""
                                                        className="w-full h-full object-cover object-top pointer-events-none"
                                                        draggable={false}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Arrow - Next Image */}
                                    <button
                                        onClick={nextImage}
                                        className="flex-shrink-0 w-10 h-10 bg-[#0a0d10]/80 hover:bg-[#00D9FF] rounded-full flex items-center justify-center text-white hover:text-black transition-colors"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Image Counter */}
                                <div className="text-center text-sm text-[#666] mt-2">
                                    {currentImageIndex + 1} / {robot.gallery.length}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-6">
                                <div>
                                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${robot.status === 'built' ? 'rb-badge-built' :
                                        robot.status === 'in-dev' ? 'rb-badge-dev' : 'rb-badge-concept'
                                        }`}>
                                        {robot.statusLabel}
                                    </span>
                                    <h1 className="rb-heading-xl text-white mb-2">{robot.name}</h1>
                                    <p className="text-[#666] text-sm">Year {robot.year}</p>
                                </div>

                                <p className="text-[#BEBEBE] text-lg leading-relaxed">
                                    {robot.description}
                                </p>

                                {/* Contact CTA */}
                                <div className="flex flex-wrap gap-3">
                                    <a href="mailto:akhmad6093@gmail.com" className="rb-btn-primary">
                                        Inquire About {robot.name}
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href="https://wa.me/971561495656" target="_blank" rel="noopener noreferrer" className="rb-btn-secondary">
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Section - Full Width (for robots with video) */}
                {robot.video && (
                    <section className="py-12 md:py-16 px-4 md:px-6 bg-[#080a0d]">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="rb-heading-lg text-white mb-6 text-center">News Coverage</h2>
                            <div className="rb-card p-4">
                                <div className="aspect-video rounded-xl overflow-hidden relative">
                                    <video
                                        controls
                                        playsInline
                                        preload="metadata"
                                        className="w-full h-full object-cover"
                                        poster={robot.gallery[0]}
                                    >
                                        <source src={robot.video} type="video/mp4" />
                                    </video>
                                </div>
                                <p className="text-center text-xs text-[#666] mt-3">Watch {robot.name} featured on Sharjah TV</p>
                            </div>
                        </div>
                    </section>
                )}

                {/* Features/Specs - SmartRoads Card Style */}
                <section className="py-12 md:py-20 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="rb-heading-lg text-white mb-4">Technical Specifications</h2>
                            <p className="text-[#888] max-w-2xl mx-auto">Detailed breakdown of {robot.name}'s capabilities and features.</p>
                        </div>

                        {/* Cards Grid - 2 columns like SmartRoads */}
                        <div className="grid gap-6 md:grid-cols-2">
                            {robot.features.map((feature, idx) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-[#0d1117] rounded-2xl p-6 border border-[#1a1f26] hover:border-[#00D9FF]/30 transition-colors"
                                >
                                    {/* Icon + Title */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center">
                                            <span className="text-[#00D9FF] text-lg">⚙</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                                    </div>

                                    {/* Bullet Points */}
                                    <div className="space-y-2 mt-4">
                                        {feature.items.map((item, itemIdx) => (
                                            <div key={itemIdx} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] mt-2 flex-shrink-0" />
                                                <span className="text-[#9CA3AF] text-sm leading-relaxed">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="py-12 md:py-20 px-4 md:px-6 bg-[#080a0d]">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="rb-heading-lg text-white mb-8">Gallery</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {robot.gallery.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="cursor-pointer"
                                    onClick={() => { setCurrentImageIndex(idx); setLightboxOpen(true); }}
                                >
                                    <div className="rb-card p-2 hover:border-[#00D9FF]/50 transition-colors rounded-xl">
                                        <div className="aspect-[4/3] rounded-xl overflow-hidden">
                                            <img
                                                src={img}
                                                alt={`${robot.name} ${idx + 1}`}
                                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Navigation to Other Robots */}
                <section className="py-12 md:py-16 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-between items-center">
                            {prevRobot ? (
                                <Link
                                    to={`/robotics/${prevRobot.slug}`}
                                    className="flex items-center gap-3 text-[#BEBEBE] hover:text-white transition-colors"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    <div className="text-left">
                                        <p className="text-xs text-[#666]">Previous</p>
                                        <p className="font-medium">{prevRobot.name}</p>
                                    </div>
                                </Link>
                            ) : <div />}

                            {nextRobot ? (
                                <Link
                                    to={`/robotics/${nextRobot.slug}`}
                                    className="flex items-center gap-3 text-[#BEBEBE] hover:text-white transition-colors"
                                >
                                    <div className="text-right">
                                        <p className="text-xs text-[#666]">Next</p>
                                        <p className="font-medium">{nextRobot.name}</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            ) : <div />}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default RobotDetail;
