import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowLeft, ExternalLink, Menu, X, Download } from "lucide-react";

const SmartRoadsCircles = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("no-crt", "smartroads-bg");
    return () => document.body.classList.remove("no-crt", "smartroads-bg");
  }, []);

  return (
    <div className="smartroads-page min-h-screen text-white">
      <SEO
        title="Smart Roads - CIRCLES Experiment"
        description="UC Berkeley's massive field test proving AI can smooth traffic flow and reduce fuel consumption by 40%."
      />
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 ${mobileMenuOpen ? 'bg-[#0d0d0d]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#5CFF3D] hover:opacity-80">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/smartroads/research" className="text-sm text-[#888] hover:text-white">Research</Link>
            <Link to="/smartroads/implementation" className="text-sm text-[#888] hover:text-white">Implementation</Link>
            <a
              href="/smartroads/SmartRoads_Pitch.pdf"
              target="_blank"
              className="px-4 py-2 bg-[#5CFF3D] text-black text-sm font-semibold rounded-full hover:bg-[#4de632]"
            >
              <Download className="w-4 h-4 inline mr-2" />
              Pitch Deck
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-white/10 text-center"
            >
              <div className="flex flex-col gap-4 pt-4">
                <Link to="/smartroads/research" className="text-sm text-[#888] hover:text-white">Research</Link>
                <Link to="/smartroads/implementation" className="text-sm text-[#888] hover:text-white">Implementation</Link>
                <a
                  href="/smartroads/SmartRoads_Pitch.pdf"
                  target="_blank"
                  className="mx-auto px-4 py-2 bg-[#5CFF3D] text-black text-sm font-semibold rounded-full hover:bg-[#4de632] flex items-center justify-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Pitch Deck
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-[#5CFF3D] text-sm font-medium uppercase tracking-wider">Research • UC Berkeley</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Massive Traffic Experiment Pits Machine Learning Against 'Phantom' Jams
          </h1>
          <p className="text-lg text-[#888] mb-8">
            Researchers deployed a fleet of 100 semi-autonomous vehicles to test whether a new AI-powered cruise control system can help smooth the flow of traffic and improve fuel economy.
          </p>
          <div className="flex items-center gap-4 text-sm text-[#666]">
            <span>By Kara Manke</span>
            <span>•</span>
            <span>November 22, 2022</span>
            <span>•</span>
            <a
              href="https://news.berkeley.edu/2022/11/22/massive-traffic-experiment-pits-machine-learning-against-phantom-jams/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5CFF3D] hover:underline flex items-center gap-1"
            >
              Original Article <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Video Embed */}
      <section className="pb-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden bg-black/50">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/PA3lyoCZnP0"
              title="Massive field test showing how AI smooths traffic flow"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-[#ccc] leading-relaxed mb-6">
              Many traffic jams are caused by human behavior: a slight tap on the brakes can ripple through a line of cars, triggering a slowdown — or complete gridlock — for no apparent reason.
            </p>

            <p className="text-[#ccc] leading-relaxed mb-6">
              But in a massive traffic experiment that occurred outside of Nashville last week, scientists tested whether introducing just a few AI-equipped vehicles to the road can help ease these "phantom" jams and reduce fuel consumption for everyone. <strong className="text-white">The answer seems to be yes.</strong>
            </p>

            <p className="text-[#ccc] leading-relaxed mb-6">
              Over the course of five days, researchers conducted one of the largest traffic experiments of its kind in the world, deploying a fleet of 100 Nissan Rogue, Toyota RAV4 and Cadillac XT5 vehicles onto a busy stretch of Nashville's I-24 during the morning commute. Each vehicle was equipped with an AI-powered cruise control system designed to automatically adjust the speed of the vehicle to improve the overall flow of traffic — essentially turning each car into its own "robot traffic manager."
            </p>

            <blockquote className="border-l-4 border-[#5CFF3D] pl-6 my-8 italic text-[#aaa]">
              "Driving is very intuitive. If there's a gap in front of you, you accelerate. If someone brakes, you slow down. But it turns out that this very normal reaction can lead to stop-and-go traffic and energy inefficiency. That's precisely what AI technology is able to fix — it can direct the vehicle to things that are not intuitive to humans, but are overall more efficient."
              <footer className="text-[#5CFF3D] not-italic mt-2">— Alexandre Bayen, Associate Provost and Liao-Cho Professor of Engineering, UC Berkeley</footer>
            </blockquote>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Key Finding: 40% Fuel Savings</h2>

            <p className="text-[#ccc] leading-relaxed mb-6">
              In 2016, a team of researchers including Work and Delle Monache conducted a real-world experiment showing the profound impact smart vehicles could have on the flow of traffic.
            </p>

            <div className="bg-[#5CFF3D]/10 border border-[#5CFF3D]/30 rounded-xl p-6 my-8">
              <p className="text-white leading-relaxed mb-4">
                In the experiment, 20 cars were driven on a closed, circular track. When all the cars were driven by humans, traffic "waves" consistently emerged, mimicking the stop-and-go pattern that occurs on roadways.
              </p>
              <p className="text-[#5CFF3D] font-bold text-xl">
                But adding just one smart vehicle to the mix smoothed the human-caused waves, leading to a 40% fuel savings overall.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Benefits for Everyone</h2>

            <p className="text-[#ccc] leading-relaxed mb-6">
              "By conducting the experiment at this large of a scale, we hope to show that our results can be reproduced at the societal level," said CIRCLES co-PI Maria Laura Delle Monache, an assistant professor of civil and environmental engineering at UC Berkeley. "Even when only a few vehicles behave differently, the overall system can be impacted, making it better for everyone on the road and not only for those with AI-equipped vehicles."
            </p>

            <blockquote className="border-l-4 border-[#5CFF3D] pl-6 my-8 italic text-[#aaa]">
              "Stop-and-go traffic creates a lot of problems. Constantly starting and stopping wastes a lot of energy. It's also uncomfortable for drivers and passengers, and can increase the likelihood of collisions. By smoothing out that flow, we hope to make driving not only safer and more energy efficient, but more comfortable as well."
              <footer className="text-[#5CFF3D] not-italic mt-2">— Jonathan Lee, Chief Engineer and Co-PI of CIRCLES</footer>
            </blockquote>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">From Traffic Monitoring to Traffic Smoothing</h2>

            <p className="text-[#ccc] leading-relaxed mb-6">
              For more than a decade, Bayen and other members of the CIRCLES consortium have been applying the latest technologies to help improve transportation. In 2008, Bayen and Daniel Work, who was a UC Berkeley graduate student at the time, led the Mobile Millennium project, one of the first demonstrations of how GPS-enabled smartphones can provide real-time information about traffic conditions.
            </p>

            <p className="text-[#ccc] leading-relaxed mb-6">
              Now that smartphones are ubiquitous and real-time traffic information is available at the click of a button, Bayen is excited to show how machine learning can be used to not only monitor traffic but also improve conditions on the road.
            </p>

            <blockquote className="border-l-4 border-[#5CFF3D] pl-6 my-8 italic text-[#aaa]">
              "The beauty of the techniques we're using is that they can take human data, learn from it, and then apply it to make things better."
              <footer className="text-[#5CFF3D] not-italic mt-2">— Alexandre Bayen</footer>
            </blockquote>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Creating "Socially Acceptable" AI</h2>

            <p className="text-[#ccc] leading-relaxed mb-6">
              As part of the CIRCLES consortium, UC Berkeley researchers have taken the lead in developing the machine learning algorithms that govern how fast AI-powered vehicles should go. These algorithms, also called "speed planners" and "controllers," use information about overall traffic conditions and the vehicle's immediate surroundings to determine the best speed for improving traffic flow.
            </p>

            <p className="text-[#ccc] leading-relaxed mb-6">
              "The idea is that, if a traffic jam or bottleneck appears ahead on the road, we want to try to adjust the speed of the vehicle so that it doesn't contribute to the congestion," said Hossein Nick Zinat Matin, a postdoctoral researcher at UC Berkeley. "This is a complex mathematical problem."
            </p>

            <p className="text-[#ccc] leading-relaxed mb-6">
              Testing the software in the field is also important to ensure that the AI-powered vehicles don't behave in ways that might be considered "socially unacceptable" to humans. For instance, vehicles may smooth traffic by maintaining a slow, steady speed, rather than constantly accelerating and braking. However, slow driving may open large gaps in traffic, which could anger other drivers, or allow other cars to cut in.
            </p>

            <blockquote className="border-l-4 border-[#5CFF3D] pl-6 my-8 italic text-[#aaa]">
              "We want to train our vehicles to drive in a specific way that is not human-like, but also not completely socially unacceptable. A big focus for us during the test week was to make daily tweaks to our controllers based on feedback from our drivers."
              <footer className="text-[#5CFF3D] not-italic mt-2">— Jonathan Lee</footer>
            </blockquote>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Future</h2>

            <p className="text-[#ccc] leading-relaxed mb-6">
              "Our vision is that eventually, this technology will be deployed in many, if not all, vehicles, and we are working on ways to make it scalable to the public," Lee said.
            </p>

            <p className="text-[#ccc] leading-relaxed mb-6">
              The game changer here was the coordination — the fact that the vehicles leverage each other's presence and can react preemptively to downstream traffic conditions.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-12">
              <h3 className="text-lg font-bold text-white mb-4">Research Support</h3>
              <p className="text-[#888] text-sm leading-relaxed">
                CIRCLES Consortium research is supported by the National Science Foundation, the U.S. Department of Transportation and the U.S. Department of Energy. Additional funding was provided by Nissan, Toyota North America, General Motors, the Federal Highway Administration, the Tennessee Department of Transportation, the California Department of Transportation, and many other partners.
              </p>
            </div>
          </article>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold mb-4">SmartRoads builds on this research</h3>
            <p className="text-[#888] mb-8 max-w-2xl mx-auto">
              Our system uses the same principles proven by CIRCLES — precise vehicle coordination to eliminate phantom jams — but with RTK positioning for centimeter-level accuracy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/smartroads/implementation"
                className="px-6 py-3 bg-[#5CFF3D] text-black font-semibold rounded-full hover:bg-[#4de632]"
              >
                View Implementation Plan
              </Link>
              <a
                href="https://arxiv.org/pdf/1705.01693"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 flex items-center gap-2"
              >
                Read Original Paper <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartRoadsCircles;
