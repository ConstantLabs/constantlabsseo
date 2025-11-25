import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Menu, X, Download } from "lucide-react";
import { Link } from "react-router-dom";

const SmartRoadsFHWA = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add("no-crt", "smartroads-bg");
    return () => document.body.classList.remove("no-crt", "smartroads-bg");
  }, []);

  return (
    <div className="smartroads-page min-h-screen text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 ${mobileMenuOpen ? 'bg-[#0d0d0d]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/smartroads" className="flex items-center gap-2 text-[#5CFF3D] hover:opacity-80">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to SmartRoads</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/smartroads/research-paper" className="text-sm text-[#888] hover:text-white">Research Paper</Link>
            <Link to="/smartroads/circles" className="text-sm text-[#888] hover:text-white">UC Berkeley Study</Link>
            <a 
              href="https://ops.fhwa.dot.gov/publications/fhwahop10023/chap4.htm" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#5CFF3D] text-black text-sm font-semibold rounded-lg hover:bg-[#4de632] flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Original Source
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
                <Link to="/smartroads/research-paper" className="text-sm text-[#888] hover:text-white">Research Paper</Link>
                <Link to="/smartroads/circles" className="text-sm text-[#888] hover:text-white">UC Berkeley Study</Link>
                <a 
                  href="https://ops.fhwa.dot.gov/publications/fhwahop10023/chap4.htm" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto px-4 py-2 bg-[#5CFF3D] text-black text-sm font-semibold rounded-lg hover:bg-[#4de632] flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Original Source
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Header */}
      <section className="pt-24 md:pt-32 pb-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="text-[#5CFF3D] text-sm font-medium uppercase tracking-wider">FHWA Report to Congress</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            Efficient Use of Highway Capacity Summary
          </h1>
          <h2 className="text-xl md:text-2xl text-[#888] mb-6">
            Chapter 4: Case Studies
          </h2>
          <p className="text-[#888]">
            Federal Highway Administration • U.S. Department of Transportation
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="pb-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#5CFF3D]/10 border border-[#5CFF3D]/30 rounded-xl p-6">
              <div className="text-[#5CFF3D] text-3xl font-bold mb-2">25%</div>
              <div className="text-white font-medium mb-2">Capacity Increase</div>
              <p className="text-[#888] text-sm">Germany achieved up to 25% temporary increase in freeway capacity.</p>
            </div>
            <div className="bg-[#5CFF3D]/10 border border-[#5CFF3D]/30 rounded-xl p-6">
              <div className="text-[#5CFF3D] text-3xl font-bold mb-2">29%</div>
              <div className="text-white font-medium mb-2">Fewer Accidents</div>
              <p className="text-[#888] text-sm">Speed harmonization reduced accidents with personal damage by up to 29%.</p>
            </div>
            <div className="bg-[#5CFF3D]/10 border border-[#5CFF3D]/30 rounded-xl p-6">
              <div className="text-[#5CFF3D] text-3xl font-bold mb-2">20%</div>
              <div className="text-white font-medium mb-2">Travel Time Reduction</div>
              <p className="text-[#888] text-sm">Active traffic management reduced travel times by up to 20%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            
            {/* Netherlands Section */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mt-0 mb-6">Case Study: The Netherlands</h2>
              <h3 className="text-lg text-[#5CFF3D] mb-4">Temporary Shoulder Use and Speed Harmonization</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6 text-sm">
                <div>
                  <p className="text-[#888] mb-1"><strong className="text-white">Facility:</strong> Various throughout The Netherlands</p>
                  <p className="text-[#888] mb-1"><strong className="text-white">Operator:</strong> NTCC and regional control centers</p>
                  <p className="text-[#888] mb-1"><strong className="text-white">Years of Operation:</strong> 1981–current</p>
                </div>
                <div>
                  <p className="text-[#888] mb-1"><strong className="text-white">Length:</strong> 1,000 km (620 mi) of roadway</p>
                  <p className="text-[#888] mb-1"><strong className="text-white">Number of Lanes:</strong> Applied to entire corridor</p>
                </div>
              </div>

              <h4 className="text-white font-bold mb-3">Operating Strategy</h4>
              <ul className="text-[#ccc] mb-6 space-y-2">
                <li>Advanced queue warning systems utilize flashing lights and variable speed limit signs to alert drivers of recurrent congestion, lane closures, and incidents.</li>
                <li>Deployment is automated based on field data and initiated automatically based on an assessment algorithm, requiring no intervention by an operator.</li>
                <li>Only operates during time periods of congestion or when incidents occur along instrumented roadways.</li>
              </ul>

              <p className="text-[#ccc] mb-4">
                The Netherlands is home to over 16.2 million residents and 6.9 million cars, with 155 million vehicle miles traveled each day across its network. Traffic operations are controlled by a series of five regional traffic control centers, which are in turn coordinated by NTCC.
              </p>

              <p className="text-[#ccc] mb-4">
                The Netherlands implemented temporary right shoulder use—also known as hard shoulder running or the rush hour lane—in 2003 as part of a larger program to improve use of the existing infrastructure. A gantry with lane control signals indicates when the shoulder is available for use.
              </p>

              <p className="text-[#ccc] mb-4">
                The standard speed limit is 120 km/h (75 mph) on the motorways, but posted speeds can drop to 90 km/h (55 mph), 70 km/h (44 mph), or as low as 50 km/h (31 mph) if a shock wave or speed-drop is detected. As of 2007, the MCSS system has been implemented on over 1,000 km (620 mi) of roadway.
              </p>

              <div className="bg-[#5CFF3D]/10 border border-[#5CFF3D]/30 rounded-lg p-4 my-6">
                <h4 className="text-[#5CFF3D] font-bold mb-2">Performance Results</h4>
                <ul className="text-white space-y-1 text-sm">
                  <li>• Throughput increase: <strong>4-5%</strong> with MCSS system</li>
                  <li>• Primary accidents decreased: <strong>15-25%</strong></li>
                  <li>• Secondary incidents decreased: <strong>40-50%</strong></li>
                  <li>• Collisions reduced: <strong>~16%</strong> with speed harmonization</li>
                  <li>• Capacity increase: <strong>7-22%</strong> with temporary shoulder use</li>
                </ul>
              </div>
            </div>

            {/* Germany Section */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mt-0 mb-6">Case Study: Germany</h2>
              <h3 className="text-lg text-[#5CFF3D] mb-4">Temporary Hard Shoulder Use and Speed Harmonization</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6 text-sm">
                <div>
                  <p className="text-[#888] mb-1"><strong className="text-white">Facility:</strong> Various</p>
                  <p className="text-[#888] mb-1"><strong className="text-white">Operator:</strong> Federal Ministry of Transport and regional traffic management centers</p>
                  <p className="text-[#888] mb-1"><strong className="text-white">Years of Operation:</strong> 1996–current</p>
                </div>
                <div>
                  <p className="text-[#888] mb-1"><strong className="text-white">Length:</strong> Over 200 km of roadway in congested corridors</p>
                  <p className="text-[#888] mb-1"><strong className="text-white">Number of Lanes:</strong> Applied to entire corridor</p>
                </div>
              </div>

              <h4 className="text-white font-bold mb-3">The Area</h4>
              <p className="text-[#ccc] mb-4">
                Germany is home to an estimated 82 million inhabitants and covers an area of about 138,000 mi². Its federal motorway network is about 7,500 mi spread across 10 states. Most of these major highways are four- to six-lane facilities that carry average daily traffic volumes of about 49,000 vehicles.
              </p>

              <p className="text-[#ccc] mb-4">
                Overall demand on the German transportation network is expected to increase by 16 percent for passenger transport and 58 percent for freight transport by 2015. Officials hope to accommodate this growth with the construction of over 1,000 mi of new roadways, widening 1,300 mi of existing roadway and constructing 717 bypasses.
              </p>

              <p className="text-[#ccc] mb-4">
                Temporary shoulder use in Germany, also known as hard shoulder use, is only deployed in conjunction with speed harmonization to address capacity bottlenecks on the freeway network. The use of the right shoulder during peak travel periods has been used in Germany since the 1990s, with the first deployment on the A4 near Cologne in December 1996.
              </p>

              <div className="bg-[#5CFF3D]/10 border border-[#5CFF3D]/30 rounded-lg p-4 my-6">
                <h4 className="text-[#5CFF3D] font-bold mb-2">Performance Results</h4>
                <ul className="text-white space-y-1 text-sm">
                  <li>• Travel time reduction: <strong>up to 20%</strong></li>
                  <li>• Temporary capacity increase: <strong>up to 25%</strong></li>
                  <li>• Accidents with personal damage reduced: <strong>up to 29%</strong></li>
                  <li>• Accidents with heavy material damage reduced: <strong>up to 27%</strong></li>
                  <li>• High motorist acceptance of variable traffic signs</li>
                </ul>
              </div>
            </div>

            {/* Great Britain Section */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mt-0 mb-6">Case Study: Great Britain</h2>
              <h3 className="text-lg text-[#5CFF3D] mb-4">M42 Active Traffic Management Pilot</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6 text-sm">
                <div>
                  <p className="text-[#888] mb-1"><strong className="text-white">Facility:</strong> M42 Motorway (J3A to J7)</p>
                  <p className="text-[#888] mb-1"><strong className="text-white">Operator:</strong> Highways Agency</p>
                  <p className="text-[#888] mb-1"><strong className="text-white">Years of Operation:</strong> 2006–current</p>
                </div>
                <div>
                  <p className="text-[#888] mb-1"><strong className="text-white">Length:</strong> 11 mi of roadway</p>
                  <p className="text-[#888] mb-1"><strong className="text-white">Expansion:</strong> Plans to expand to other congested corridors</p>
                </div>
              </div>

              <h4 className="text-white font-bold mb-3">Active Traffic Management (ATM)</h4>
              <p className="text-[#ccc] mb-4">
                Introduced in 2001 by the Minister of Transport, the M42 ATM pilot is an operational strategy intended to provide reliable journeys, reduced recurring and non-recurring congestion, and enhanced information to drivers.
              </p>

              <p className="text-[#ccc] mb-4">
                It is a direct response to road users' demands for better service within the realistic limitations of widening and expanding the roadway network. Building on advancements in technology and experience from across the globe, this pilot project works to make the best use of the existing capacity.
              </p>

              <h4 className="text-white font-bold mb-3">Operating Strategy</h4>
              <ul className="text-[#ccc] mb-6 space-y-2">
                <li>Variable speed limit signs alert drivers to reduce speeds as a result of recurrent congestion, lane closures, and incidents.</li>
                <li>Temporary shoulder use designated by sign gantries with dynamic message signs to indicate availability for use.</li>
                <li>Deployment of variable speed limits is automated based on field data and initiated automatically based on an assessment algorithm.</li>
                <li>Emergency refuge areas provided for use when vehicles break down.</li>
              </ul>

              <p className="text-[#ccc] mb-4">
                Trends in traffic growth predict that volumes will increase by 29 percent by the year 2010, and with increased volumes comes increased congestion on the transportation network. Estimates are that non-recurrent congestion in the form of incidents (25 percent) and construction (10 percent) account for 35 percent of congestion.
              </p>
            </div>

            {/* Conclusion */}
            <div className="bg-[#5CFF3D]/10 border border-[#5CFF3D]/30 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mt-0 mb-4">Key Takeaways for SmartRoads</h2>
              <p className="text-[#ccc] mb-4">
                These government case studies demonstrate that active traffic management systems can achieve significant improvements in highway capacity and safety without building new infrastructure:
              </p>
              <ul className="text-white space-y-2">
                <li>• <strong>Up to 25% capacity increase</strong> through coordinated speed management</li>
                <li>• <strong>Up to 29% reduction in accidents</strong> with speed harmonization</li>
                <li>• <strong>Up to 20% travel time reduction</strong> during peak periods</li>
                <li>• <strong>Automated deployment</strong> based on real-time traffic data</li>
              </ul>
              <p className="text-[#888] mt-4 text-sm">
                SmartRoads applies these same principles at the vehicle level, using RTK positioning to coordinate individual vehicles for even more precise traffic flow optimization.
              </p>
            </div>

          </article>

          {/* Source */}
          <div className="mt-8 text-center">
            <a 
              href="https://ops.fhwa.dot.gov/publications/fhwahop10023/chap4.htm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#5CFF3D] hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              View original FHWA report
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartRoadsFHWA;
