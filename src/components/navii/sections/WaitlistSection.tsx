import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Building2, Sparkles, ArrowRight, Loader2 } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export const WaitlistSection = () => {
  const [shopperEmail, setShopperEmail] = useState("");
  const [venueCompany, setVenueCompany] = useState("");
  const [venueEmail, setVenueEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<"shopper" | "venue" | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleShopperSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "shopper",
          email: shopperEmail,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitted("shopper");
      setShopperEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVenueSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "venue",
          email: venueEmail,
          company: venueCompany,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitted("venue");
      setVenueCompany("");
      setVenueEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper
      id="waitlist"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navii-purple/10 to-navii-bg" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(255, 0, 229, 0.15) 0%, transparent 70%)' }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <Badge className="mb-4 bg-navii-cyan/10 text-navii-cyan border-navii-cyan/30 font-tech">
            <Sparkles className="w-3 h-3 mr-1" />
            Early Access
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-rajdhani text-white">
            Join the <span className="text-navii-magenta">Revolution</span>
          </h2>
          <p className="text-gray-400">
            Be among the first to experience Navii. Sign up for early access and updates.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <Tabs defaultValue="shopper" className="w-full">
            <TabsList className="w-full grid grid-cols-2 bg-white/5 p-1 rounded-xl mb-6">
              <TabsTrigger
                value="shopper"
                className="rounded-lg data-[state=active]:bg-navii-cyan/20 data-[state=active]:text-navii-cyan
                           transition-all font-medium"
              >
                <Mail className="w-4 h-4 mr-2" />
                I'm a Shopper
              </TabsTrigger>
              <TabsTrigger
                value="venue"
                className="rounded-lg data-[state=active]:bg-navii-magenta/20 data-[state=active]:text-navii-magenta
                           transition-all font-medium"
              >
                <Building2 className="w-4 h-4 mr-2" />
                I'm a Venue Owner
              </TabsTrigger>
            </TabsList>

            <TabsContent value="shopper" className="mt-0">
              {submitted === "shopper" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-navii-cyan/20 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-navii-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
                  <p className="text-gray-400">We'll notify you when Navii launches.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleShopperSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={shopperEmail}
                      onChange={(e) => setShopperEmail(e.target.value)}
                      required
                      className="w-full px-4 py-6 bg-white/5 border-white/10
                                focus:border-navii-cyan focus:ring-navii-cyan/20
                                rounded-xl text-white placeholder:text-gray-500"
                    />
                  </div>
                  {error && (
                    <p className="text-red-400 text-sm text-center">{error}</p>
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-gradient-to-r from-navii-cyan to-navii-cyan/80
                             text-black font-semibold text-lg rounded-xl
                             hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </TabsContent>

            <TabsContent value="venue" className="mt-0">
              {submitted === "venue" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-navii-magenta/20 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-navii-magenta" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Request received!</h3>
                  <p className="text-gray-400">Our team will reach out within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleVenueSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Company name"
                    value={venueCompany}
                    onChange={(e) => setVenueCompany(e.target.value)}
                    required
                    className="w-full px-4 py-6 bg-white/5 border-white/10
                              focus:border-navii-magenta focus:ring-navii-magenta/20
                              rounded-xl text-white placeholder:text-gray-500"
                  />
                  <Input
                    type="email"
                    placeholder="Business email"
                    value={venueEmail}
                    onChange={(e) => setVenueEmail(e.target.value)}
                    required
                    className="w-full px-4 py-6 bg-white/5 border-white/10
                              focus:border-navii-magenta focus:ring-navii-magenta/20
                              rounded-xl text-white placeholder:text-gray-500"
                  />
                  {error && (
                    <p className="text-red-400 text-sm text-center">{error}</p>
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-gradient-to-r from-navii-magenta to-navii-purple
                             text-white font-semibold text-lg rounded-xl
                             hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Schedule a Call
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </TabsContent>
          </Tabs>

          <p className="text-gray-500 text-xs text-center mt-4">
            We respect your privacy. No spam, ever.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
