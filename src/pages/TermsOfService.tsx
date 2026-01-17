import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
    const lastUpdated = "January 22, 2026";

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO title="Terms of Service" description="Terms of Service for Constant Labs applications and services." />

            {/* Header */}
            <div className="border-b border-foreground/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center gap-4">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors font-tech text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>BACK</span>
                    </Link>
                    <span className="text-foreground/20">|</span>
                    <span className="text-sm font-tech tracking-wider text-foreground/80">
                        CONSTANT_LABS
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
                        [TERMS_OF_SERVICE]
                    </h1>
                    <p className="text-muted-foreground font-tech text-xs tracking-wide uppercase">
            // Last updated: {lastUpdated}
                    </p>
                </div>

                <div className="prose prose-invert max-w-none space-y-8">
                    {/* Agreement */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Agreement to Terms</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            By accessing or using any websites, mobile applications, software, or services (collectively, the "Services")
                            provided by Constant Labs ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service
                            ("Terms"). If you do not agree to these Terms, do not use our Services.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            These Terms apply to all users, including browsers, customers, merchants, vendors, and contributors of content.
                            Our Services include, but are not limited to: Mufakkir, Motargem, Athkar Desktop, Mosque Silence, Navii,
                            SmartRoads, and any other applications or software distributed through Google Play Store, Apple App Store,
                            our websites, or other platforms.
                        </p>
                    </section>

                    {/* Changes to Terms */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Changes to Terms</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting.
                            Your continued use of our Services after any changes constitutes acceptance of the new Terms. We encourage
                            you to review these Terms periodically.
                        </p>
                    </section>

                    {/* Description of Services */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Description of Services</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Constant Labs provides a variety of digital products and services, including:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li><strong>Mufakkir:</strong> AI-powered voice-to-text transcription application</li>
                            <li><strong>Motargem:</strong> Universal translation application with voice, text, and camera input</li>
                            <li><strong>Athkar Desktop:</strong> Desktop application for Islamic remembrance and notifications</li>
                            <li><strong>Mosque Silence:</strong> Mobile application for automatic phone silencing near mosques</li>
                            <li><strong>Navii:</strong> AR indoor navigation application</li>
                            <li><strong>SmartRoads:</strong> Traffic management and coordination system</li>
                            <li>Web applications, websites, and other digital services</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            We reserve the right to modify, suspend, or discontinue any Service at any time without prior notice.
                        </p>
                    </section>

                    {/* Account Registration */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Account Registration</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Some Services may require you to create an account. When registering, you agree to:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li>Provide accurate, current, and complete information</li>
                            <li>Maintain and update your information as needed</li>
                            <li>Keep your login credentials confidential</li>
                            <li>Be responsible for all activities under your account</li>
                            <li>Notify us immediately of any unauthorized access</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            We reserve the right to suspend or terminate accounts that violate these Terms or for any other reason
                            at our discretion.
                        </p>
                    </section>

                    {/* Acceptable Use */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Acceptable Use</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            You agree to use our Services only for lawful purposes and in compliance with all applicable laws.
                            You agree NOT to:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li>Use the Services for any illegal or unauthorized purpose</li>
                            <li>Violate any laws in your jurisdiction</li>
                            <li>Infringe upon the intellectual property rights of others</li>
                            <li>Transmit viruses, malware, or other harmful code</li>
                            <li>Attempt to gain unauthorized access to our systems or networks</li>
                            <li>Interfere with or disrupt the Services or servers</li>
                            <li>Collect or store personal data of other users without consent</li>
                            <li>Use automated means to access the Services without permission</li>
                            <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
                            <li>Use the Services to harass, abuse, or harm others</li>
                            <li>Impersonate any person or entity</li>
                            <li>Submit false or misleading information</li>
                        </ul>
                    </section>

                    {/* User Content */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">User Content</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            You may submit content through our Services, including text, audio, images, and other materials
                            ("User Content"). You retain ownership of your User Content but grant us a worldwide, non-exclusive,
                            royalty-free license to use, display, reproduce, and distribute your User Content solely in connection
                            with providing the Services.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            You represent and warrant that:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li>You own or have the rights to use your User Content</li>
                            <li>Your User Content does not violate any third-party rights</li>
                            <li>Your User Content does not contain illegal, harmful, or offensive material</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            We may remove any User Content that violates these Terms or that we find objectionable.
                        </p>
                    </section>

                    {/* Intellectual Property */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Intellectual Property</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            All content, features, and functionality of our Services, including but not limited to text, graphics,
                            logos, icons, images, audio, video, software, and source code, are the exclusive property of Constant Labs
                            or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            You are granted a limited, non-exclusive, non-transferable license to access and use the Services for
                            personal, non-commercial purposes. This license does not include:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li>Modification or derivative works of the Services</li>
                            <li>Any commercial use of the Services</li>
                            <li>Downloading or copying of content (except for personal use)</li>
                            <li>Any use of data mining, robots, or similar tools</li>
                        </ul>
                    </section>

                    {/* Subscriptions and Payments */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Subscriptions and Payments</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Some Services may be offered on a subscription basis or require payment for premium features.
                            If you purchase any paid Services:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li>You agree to pay all fees associated with your purchase</li>
                            <li>Payments are processed through third-party payment processors</li>
                            <li>Subscriptions may auto-renew unless canceled before the renewal date</li>
                            <li>Refunds are subject to our refund policy and applicable app store policies</li>
                            <li>Prices may change with notice</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            For purchases made through app stores (Google Play, Apple App Store), the respective platform's
                            terms and refund policies apply.
                        </p>
                    </section>

                    {/* Third-Party Services */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Third-Party Services and Links</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our Services may contain links to third-party websites, services, or applications. We are not responsible
                            for the content, privacy practices, or terms of service of any third parties. Your use of third-party
                            services is at your own risk.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            Our Services may integrate with third-party services to provide functionality. By using such features,
                            you agree to the terms of those third-party services.
                        </p>
                    </section>

                    {/* Disclaimers */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Disclaimers</h2>
                        <p className="text-muted-foreground leading-relaxed uppercase text-sm">
                            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                            IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                            PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            We do not warrant that:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li>The Services will be uninterrupted, secure, or error-free</li>
                            <li>The results obtained from the Services will be accurate or reliable</li>
                            <li>Any defects or errors will be corrected</li>
                            <li>The Services are free of viruses or harmful components</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            For voice recognition and translation services, we do not guarantee 100% accuracy. Output may contain
                            errors and should be reviewed before use in critical applications.
                        </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Limitation of Liability</h2>
                        <p className="text-muted-foreground leading-relaxed uppercase text-sm">
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, CONSTANT LABS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE,
                            GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-4">
                            <li>Your access to or use of (or inability to access or use) the Services</li>
                            <li>Any conduct or content of any third party on the Services</li>
                            <li>Any content obtained from the Services</li>
                            <li>Unauthorized access, use, or alteration of your content or data</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            In no event shall our total liability exceed the amount you paid us, if any, during the six (6) months
                            prior to the claim.
                        </p>
                    </section>

                    {/* Indemnification */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Indemnification</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            You agree to indemnify, defend, and hold harmless Constant Labs, its officers, directors, employees,
                            agents, licensors, and suppliers from and against any claims, liabilities, damages, losses, costs,
                            expenses, or fees (including reasonable attorneys' fees) arising from:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li>Your use of the Services</li>
                            <li>Your violation of these Terms</li>
                            <li>Your violation of any third-party rights</li>
                            <li>Your User Content</li>
                        </ul>
                    </section>

                    {/* Termination */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Termination</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may terminate or suspend your access to the Services immediately, without prior notice or liability,
                            for any reason, including breach of these Terms. Upon termination:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li>Your right to use the Services will immediately cease</li>
                            <li>We may delete your account and data</li>
                            <li>Provisions that by their nature should survive will remain in effect</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            You may terminate your account at any time by discontinuing use of the Services or by contacting us.
                        </p>
                    </section>

                    {/* Governing Law */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Governing Law and Jurisdiction</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates,
                            without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of
                            the Services shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
                        </p>
                    </section>

                    {/* Dispute Resolution */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Dispute Resolution</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Before filing a claim, you agree to attempt to resolve any dispute informally by contacting us.
                            We will try to resolve the dispute within 30 days. If the dispute cannot be resolved informally,
                            you agree that any legal proceedings will be conducted in the courts of Dubai, UAE.
                        </p>
                    </section>

                    {/* Severability */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Severability</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be
                            limited or eliminated to the minimum extent necessary so that the remaining provisions remain in
                            full force and effect.
                        </p>
                    </section>

                    {/* Waiver */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Waiver</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The failure of Constant Labs to enforce any right or provision of these Terms will not be considered
                            a waiver of those rights. Any waiver must be in writing and signed by an authorized representative.
                        </p>
                    </section>

                    {/* Entire Agreement */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Entire Agreement</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            These Terms, together with our Privacy Policy and any other legal notices published on the Services,
                            constitute the entire agreement between you and Constant Labs regarding the use of the Services.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            If you have any questions about these Terms of Service, please contact us:
                        </p>
                        <div className="mt-4 space-y-2 text-muted-foreground">
                            <p><strong className="text-foreground">Email:</strong> legal@constantlabs.ai</p>
                            <p><strong className="text-foreground">Website:</strong> https://constantlabs.ai</p>
                            <p><strong className="text-foreground">WhatsApp:</strong> +971 56 149 5656</p>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-foreground/20 text-center">
                    <p className="text-xs text-muted-foreground font-tech">
                        © {new Date().getFullYear()} CONSTANT LABS. All rights reserved.
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-tech uppercase">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
