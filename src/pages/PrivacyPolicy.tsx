import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
    const lastUpdated = "January 22, 2026";

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO title="Privacy Policy" description="Privacy Policy for Constant Labs applications and services." path="/privacy" />

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
                        [PRIVACY_POLICY]
                    </h1>
                    <p className="text-muted-foreground font-tech text-xs tracking-wide uppercase">
            // Last updated: {lastUpdated}
                    </p>
                </div>

                <div className="prose prose-invert max-w-none space-y-8">
                    {/* Introduction */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Introduction</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Constant Labs ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
                            websites, mobile applications, software, and services (collectively, the "Services").
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            This policy applies to all products developed and published by Constant Labs, including but not limited to
                            Mufakkir, Motargem, Athkar Desktop, Mosque Silence, Navii, SmartRoads, and any other applications available
                            on Google Play Store, Apple App Store, or other distribution platforms.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Information We Collect</h2>

                        <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Personal Information</h3>
                        <p className="text-muted-foreground leading-relaxed">We may collect personal information that you voluntarily provide, including:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li>Name and email address</li>
                            <li>Account credentials</li>
                            <li>Profile information</li>
                            <li>Payment information (processed securely through third-party providers)</li>
                            <li>Contact preferences</li>
                            <li>Communications you send to us</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Automatically Collected Information</h3>
                        <p className="text-muted-foreground leading-relaxed">When you use our Services, we may automatically collect:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li>Device information (device type, operating system, unique device identifiers)</li>
                            <li>IP address and location data</li>
                            <li>Usage data (features used, actions taken, time spent)</li>
                            <li>Log data (access times, pages viewed, app crashes)</li>
                            <li>Browser type and version</li>
                            <li>Language preferences</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Voice and Audio Data</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            For voice-enabled applications (such as Mufakkir and Motargem), we may process voice and audio data
                            to provide speech recognition and transcription services. This data is processed in real-time and may
                            be temporarily stored to improve service quality. You control when audio recording is active.
                        </p>

                        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Location Data</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Some applications (such as Mosque Silence and Navii) require location data to function. Location
                            access is only used when explicitly enabled by you and is necessary for the core functionality of these services.
                        </p>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">How We Use Your Information</h2>
                        <p className="text-muted-foreground leading-relaxed">We use collected information for the following purposes:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li>Provide, maintain, and improve our Services</li>
                            <li>Process transactions and send related information</li>
                            <li>Send technical notices, updates, and support messages</li>
                            <li>Respond to your comments, questions, and requests</li>
                            <li>Personalize and improve your experience</li>
                            <li>Monitor and analyze usage patterns and trends</li>
                            <li>Detect, prevent, and address technical issues and fraud</li>
                            <li>Comply with legal obligations</li>
                            <li>Develop new products and services</li>
                        </ul>
                    </section>

                    {/* Data Sharing */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Data Sharing and Disclosure</h2>
                        <p className="text-muted-foreground leading-relaxed">We may share your information in the following circumstances:</p>

                        <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Service Providers</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            We share data with third-party service providers who perform services on our behalf, including
                            cloud hosting, analytics, payment processing, and customer support.
                        </p>

                        <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Legal Requirements</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            We may disclose your information if required by law, regulation, legal process, or governmental request.
                        </p>

                        <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Business Transfers</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            In connection with a merger, acquisition, or sale of assets, your information may be transferred
                            as part of that transaction.
                        </p>

                        <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">With Your Consent</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            We may share your information for other purposes with your explicit consent.
                        </p>
                    </section>

                    {/* Third-Party Services */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Third-Party Services</h2>
                        <p className="text-muted-foreground leading-relaxed">Our Services may integrate with or contain links to third-party services, including:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li>Google Analytics for usage analysis</li>
                            <li>Firebase for backend services and analytics</li>
                            <li>Stripe or similar providers for payment processing</li>
                            <li>Cloud speech recognition services (Google Cloud, OpenAI)</li>
                            <li>Translation APIs</li>
                            <li>Maps and location services</li>
                            <li>Social media platforms</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            These third-party services have their own privacy policies. We encourage you to review them.
                        </p>
                    </section>

                    {/* Data Security */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Data Security</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We implement appropriate technical and organizational security measures to protect your personal
                            information against unauthorized access, alteration, disclosure, or destruction. These include:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li>Encryption of data in transit and at rest</li>
                            <li>Regular security assessments</li>
                            <li>Access controls and authentication</li>
                            <li>Secure coding practices</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            However, no method of transmission over the Internet or electronic storage is 100% secure, and we
                            cannot guarantee absolute security.
                        </p>
                    </section>

                    {/* Data Retention */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Data Retention</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We retain your personal information for as long as necessary to provide our Services and fulfill
                            the purposes described in this policy. We may also retain information to comply with legal obligations,
                            resolve disputes, and enforce our agreements.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            When we no longer need your information, we will securely delete or anonymize it.
                        </p>
                    </section>

                    {/* Your Rights */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Your Rights and Choices</h2>
                        <p className="text-muted-foreground leading-relaxed">Depending on your location, you may have the following rights:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li><strong>Access:</strong> Request a copy of your personal data</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                            <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                            <li><strong>Objection:</strong> Object to processing of your data</li>
                            <li><strong>Restriction:</strong> Request restriction of processing</li>
                            <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            To exercise these rights, please contact us at the email address provided below.
                        </p>
                    </section>

                    {/* International Transfers (GDPR) */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">International Data Transfers</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Your information may be transferred to and processed in countries other than your country of residence.
                            These countries may have different data protection laws than your country.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, we ensure
                            appropriate safeguards are in place for international transfers, such as Standard Contractual Clauses
                            approved by the European Commission.
                        </p>
                    </section>

                    {/* Children's Privacy (COPPA) */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Children's Privacy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our Services are not directed to children under the age of 13 (or the applicable age in your jurisdiction).
                            We do not knowingly collect personal information from children under 13.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            If we become aware that we have collected personal information from a child under 13, we will take
                            steps to delete such information promptly. If you believe we have collected information from a child,
                            please contact us immediately.
                        </p>
                    </section>

                    {/* Cookies */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Cookies and Tracking Technologies</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We use cookies and similar tracking technologies to collect and track information and to improve
                            our Services. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">Types of cookies we use:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li><strong>Essential Cookies:</strong> Required for the operation of our Services</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how you use our Services</li>
                            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                        </ul>
                    </section>

                    {/* App Permissions */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Mobile App Permissions</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our mobile applications may request various permissions to function properly:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li><strong>Microphone:</strong> For voice recording and speech recognition (Mufakkir, Motargem)</li>
                            <li><strong>Location:</strong> For location-based features (Mosque Silence, Navii)</li>
                            <li><strong>Camera:</strong> For visual translation and AR features (Motargem, Navii)</li>
                            <li><strong>Storage:</strong> For saving files and preferences</li>
                            <li><strong>Notifications:</strong> For alerts and reminders (Athkar)</li>
                            <li><strong>Internet:</strong> For online features and synchronization</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            You can manage these permissions through your device settings at any time.
                        </p>
                    </section>

                    {/* Changes to Policy */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Changes to This Policy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                            the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review
                            this policy periodically.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            For significant changes, we may provide additional notice through our Services or via email.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            If you have any questions about this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div className="mt-4 space-y-2 text-muted-foreground">
                            <p><strong className="text-foreground">Email:</strong> privacy@constantlabs.ai</p>
                            <p><strong className="text-foreground">Website:</strong> https://constantlabs.ai</p>
                            <p><strong className="text-foreground">WhatsApp:</strong> +971 56 149 5656</p>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            We will respond to your inquiries within a reasonable timeframe.
                        </p>
                    </section>
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-foreground/20 text-center">
                    <p className="text-xs text-muted-foreground font-tech">
                        © {new Date().getFullYear()} CONSTANT LABS. All rights reserved.
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-tech uppercase">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
