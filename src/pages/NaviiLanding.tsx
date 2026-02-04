import { motion } from "framer-motion";
import { MapPin, Navigation, Smartphone, Globe, Zap, Shield } from "lucide-react";

const NaviiLanding = () => {
  return (
    <div className="min-h-screen bg-navii-bg text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-navii-purple/20 via-transparent to-navii-cyan/10" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-navii-cyan/30 bg-navii-cyan/10 mb-8">
              <Zap className="w-4 h-4 text-navii-cyan" />
              <span className="text-sm text-navii-cyan">AI-Powered Navigation</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-navii-cyan via-white to-navii-magenta bg-clip-text text-transparent">
                Navii
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Navigate the world with AR precision. Real-time directions overlaid on your reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-navii-cyan to-navii-magenta rounded-xl font-semibold text-black hover:opacity-90 transition-opacity">
                Join Waitlist
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/5 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Future of Navigation
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Navii combines augmented reality with AI to transform how you explore the world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Navigation,
                title: "AR Directions",
                description: "See turn-by-turn directions overlaid directly on the real world through your camera.",
                color: "navii-cyan"
              },
              {
                icon: Globe,
                title: "Offline Maps",
                description: "Download entire cities for navigation without internet connection.",
                color: "navii-magenta"
              },
              {
                icon: Shield,
                title: "Privacy First",
                description: "Your location data stays on your device. We never track or sell your information.",
                color: "navii-purple"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}/20 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-navii-purple/20 to-navii-cyan/20"
          >
            <MapPin className="w-12 h-12 text-navii-cyan mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Navigate the Future?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Be among the first to experience Navii. Join our waitlist for early access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-navii-cyan focus:outline-none"
              />
              <button className="px-6 py-3 bg-navii-cyan text-black font-semibold rounded-xl hover:opacity-90 transition-opacity">
                Join Waitlist
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-navii-cyan to-navii-magenta bg-clip-text text-transparent">
            Navii
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Navii. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NaviiLanding;
