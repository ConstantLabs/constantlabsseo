import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
    const lastUpdated = "March 12, 2026";

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
                            Constant Labs ("we," "our," or "us") respects your privacy. This Privacy Policy explains
                            what information each of our applications collects — and, importantly, what they do not collect.
                            We believe in being transparent and straightforward about data practices for every product we build.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            This policy covers all products developed and published by Constant Labs, available on Google Play Store,
                            Apple App Store, GitHub, or our website. Each application has different data requirements, which we detail below.
                        </p>
                    </section>

                    {/* Per-App Privacy Details */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Application-Specific Privacy Details</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Below is a detailed breakdown of what each Constant Labs application does and does not do with your data.
                        </p>

                        {/* Mosque Silence */}
                        <div className="border border-foreground/10 p-5 mb-4 bg-background/50">
                            <h3 className="text-lg font-semibold text-foreground mb-3">Mosque Silence</h3>
                            <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                                <p><strong className="text-foreground">What it does:</strong> Automatically silences your phone when you are near a mosque, using GPS location.</p>
                                <p><strong className="text-foreground">Login required:</strong> No. There is no account, no sign-up, and no login of any kind.</p>
                                <p><strong className="text-foreground">Data collected:</strong> None. The app does not collect, store, or transmit any personal data.</p>
                                <p><strong className="text-foreground">Location data:</strong> The app uses your device's GPS to detect proximity to mosques. This location data is processed entirely on your device and is never sent to any server.</p>
                                <p><strong className="text-foreground">Server/backend:</strong> There is no server. The app downloads a static list of mosque GPS coordinates and operates entirely offline after that.</p>
                                <p><strong className="text-foreground">Third-party services:</strong> None.</p>
                                <p><strong className="text-foreground">Permissions:</strong> Location (for mosque proximity detection). That is the only permission required.</p>
                            </div>
                        </div>

                        {/* Ramadan Tracker */}
                        <div className="border border-foreground/10 p-5 mb-4 bg-background/50">
                            <h3 className="text-lg font-semibold text-foreground mb-3">Ramadan Tracker</h3>
                            <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                                <p><strong className="text-foreground">What it does:</strong> Tracks your Ramadan progress — fasting days, prayers, Quran reading, and daily goals.</p>
                                <p><strong className="text-foreground">Login required:</strong> No. There is no account or sign-up.</p>
                                <p><strong className="text-foreground">Data collected:</strong> None. All your tracking data (fasting records, prayer logs, Quran progress) is stored locally on your device only.</p>
                                <p><strong className="text-foreground">Server/backend:</strong> There is no server. The app works entirely offline. Nothing is sent anywhere.</p>
                                <p><strong className="text-foreground">Third-party services:</strong> None.</p>
                                <p><strong className="text-foreground">Permissions:</strong> Storage (to save your progress locally on-device). No internet connection is required.</p>
                            </div>
                        </div>

                        {/* Trip Bill Splitter */}
                        <div className="border border-foreground/10 p-5 mb-4 bg-background/50">
                            <h3 className="text-lg font-semibold text-foreground mb-3">Trip Bill Splitter</h3>
                            <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                                <p><strong className="text-foreground">What it does:</strong> Helps you split trip expenses among a group. You add participants and expenses, and the app calculates who owes whom.</p>
                                <p><strong className="text-foreground">Login required:</strong> No. There is no account or sign-up.</p>
                                <p><strong className="text-foreground">Data collected:</strong> None. All expense data and participant names you enter are stored locally on your device only.</p>
                                <p><strong className="text-foreground">Server/backend:</strong> There is no server. The app works entirely on-device.</p>
                                <p><strong className="text-foreground">Third-party services:</strong> None.</p>
                                <p><strong className="text-foreground">Permissions:</strong> Storage (to save trip data locally). No internet connection is required for core functionality.</p>
                            </div>
                        </div>

                        {/* Athkar Desktop */}
                        <div className="border border-foreground/10 p-5 mb-4 bg-background/50">
                            <h3 className="text-lg font-semibold text-foreground mb-3">Athkar Desktop</h3>
                            <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                                <p><strong className="text-foreground">What it does:</strong> Desktop application for Islamic daily remembrance (Athkar) with timed notification reminders.</p>
                                <p><strong className="text-foreground">Login required:</strong> No. There is no account or sign-up.</p>
                                <p><strong className="text-foreground">Data collected:</strong> None. Your reminder preferences are stored locally on your computer.</p>
                                <p><strong className="text-foreground">Server/backend:</strong> There is no server. The application runs entirely offline on your desktop.</p>
                                <p><strong className="text-foreground">Third-party services:</strong> None.</p>
                                <p><strong className="text-foreground">Permissions:</strong> Notifications (for Athkar reminders). No internet connection is required.</p>
                            </div>
                        </div>

                        {/* Crescent Watch */}
                        <div className="border border-foreground/10 p-5 mb-4 bg-background/50">
                            <h3 className="text-lg font-semibold text-foreground mb-3">Crescent Watch</h3>
                            <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                                <p><strong className="text-foreground">What it does:</strong> A web-based tool for tracking Islamic lunar crescent visibility to help determine Ramadan, Eid, and other Islamic calendar dates.</p>
                                <p><strong className="text-foreground">Login required:</strong> No. There is no account or sign-up.</p>
                                <p><strong className="text-foreground">Data collected:</strong> None. The tool uses publicly available astronomical data and does not collect any personal information.</p>
                                <p><strong className="text-foreground">Server/backend:</strong> Static web application. No user data is stored or transmitted to any server.</p>
                                <p><strong className="text-foreground">Third-party services:</strong> Astronomy data sources for moon calculations. No personal data is shared.</p>
                            </div>
                        </div>

                        {/* VoiceType */}
                        <div className="border border-foreground/10 p-5 mb-4 bg-background/50">
                            <h3 className="text-lg font-semibold text-foreground mb-3">VoiceType (Speech to Text PC)</h3>
                            <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                                <p><strong className="text-foreground">What it does:</strong> Windows application that lets you dictate text anywhere on your PC using a keyboard shortcut.</p>
                                <p><strong className="text-foreground">Login required:</strong> No. There is no account or sign-up.</p>
                                <p><strong className="text-foreground">Data collected:</strong> None by us. The app itself does not store or transmit any of your voice data or transcribed text.</p>
                                <p><strong className="text-foreground">Voice processing:</strong> Speech recognition is handled by your operating system's built-in speech recognition or browser APIs. We do not process or store your audio.</p>
                                <p><strong className="text-foreground">Server/backend:</strong> There is no Constant Labs server involved.</p>
                                <p><strong className="text-foreground">Third-party services:</strong> Your OS or browser speech recognition service. Refer to your OS provider's privacy policy for details on how they handle voice data.</p>
                            </div>
                        </div>

                        {/* Medieval Quest Journal */}
                        <div className="border border-foreground/10 p-5 mb-4 bg-background/50">
                            <h3 className="text-lg font-semibold text-foreground mb-3">Medieval Quest Journal</h3>
                            <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                                <p><strong className="text-foreground">What it does:</strong> A medieval-themed quest tracker for tabletop RPG adventures.</p>
                                <p><strong className="text-foreground">Login required:</strong> No.</p>
                                <p><strong className="text-foreground">Data collected:</strong> None. All quest data is stored locally in your browser.</p>
                                <p><strong className="text-foreground">Server/backend:</strong> None. Runs entirely in your browser.</p>
                                <p><strong className="text-foreground">Third-party services:</strong> None.</p>
                            </div>
                        </div>

                        {/* Sanaye */}
                        <div className="border border-foreground/10 p-5 mb-4 bg-background/50">
                            <h3 className="text-lg font-semibold text-foreground mb-3">Sanaye</h3>
                            <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                                <p><strong className="text-foreground">What it does:</strong> A web directory of UAE industrial area shops, parts, and services with map integration.</p>
                                <p><strong className="text-foreground">Login required:</strong> No. There is no account or sign-up.</p>
                                <p><strong className="text-foreground">Data collected:</strong> None. The site displays publicly available business listings.</p>
                                <p><strong className="text-foreground">Server/backend:</strong> Static web application hosted on Vercel. No user data is stored.</p>
                                <p><strong className="text-foreground">Third-party services:</strong> Map services for displaying shop locations. No personal data is shared with map providers.</p>
                            </div>
                        </div>

                        {/* Mufakkir */}
                        <div className="border border-foreground/10 p-5 mb-4 bg-background/50">
                            <h3 className="text-lg font-semibold text-foreground mb-3">Mufakkir</h3>
                            <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                                <p><strong className="text-foreground">What it does:</strong> Voice-to-text Arabic transcription app with AI, supporting 50+ languages and 10+ Arabic dialects.</p>
                                <p><strong className="text-foreground">Login required:</strong> Yes, an account is required to use the service.</p>
                                <p><strong className="text-foreground">Data collected:</strong> Email address and account credentials for authentication. Your transcribed notes are stored in your account.</p>
                                <p><strong className="text-foreground">Voice/audio data:</strong> Voice audio is sent to cloud speech recognition services (Google Cloud Speech-to-Text or OpenAI Whisper) for transcription. Audio is processed in real-time and is not permanently stored by us. You control when recording is active.</p>
                                <p><strong className="text-foreground">Server/backend:</strong> Yes, Mufakkir uses backend services for authentication and note storage.</p>
                                <p><strong className="text-foreground">Third-party services:</strong> Cloud speech recognition APIs (Google Cloud, OpenAI) for voice transcription. Firebase for authentication and data storage.</p>
                                <p><strong className="text-foreground">Permissions:</strong> Microphone (for speech recognition), Internet (for cloud transcription and sync).</p>
                            </div>
                        </div>

                        {/* Motargem */}
                        <div className="border border-foreground/10 p-5 mb-4 bg-background/50">
                            <h3 className="text-lg font-semibold text-foreground mb-3">Motargem</h3>
                            <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                                <p><strong className="text-foreground">What it does:</strong> Universal translator with voice, text, and camera input for real-time cross-language communication.</p>
                                <p><strong className="text-foreground">Login required:</strong> No. There is no account or sign-up.</p>
                                <p><strong className="text-foreground">Data collected:</strong> None stored permanently. Text, voice, and images you submit are sent to translation APIs for processing and are not retained after the translation is returned.</p>
                                <p><strong className="text-foreground">Voice/audio data:</strong> Voice input is sent to cloud speech recognition services for transcription, then translated. Audio is not stored.</p>
                                <p><strong className="text-foreground">Camera data:</strong> Images captured for visual translation (OCR) are sent to cloud services for text extraction. Images are not stored.</p>
                                <p><strong className="text-foreground">Server/backend:</strong> Translation requests are processed through cloud APIs. No user data is permanently stored on any server.</p>
                                <p><strong className="text-foreground">Third-party services:</strong> Translation APIs, cloud speech recognition (Google Cloud, OpenAI), and OCR services for camera translation.</p>
                                <p><strong className="text-foreground">Permissions:</strong> Microphone (for voice translation), Camera (for visual translation), Internet (for cloud translation services).</p>
                            </div>
                        </div>

                        {/* Paper to Product */}
                        <div className="border border-foreground/10 p-5 mb-4 bg-background/50">
                            <h3 className="text-lg font-semibold text-foreground mb-3">Paper to Product</h3>
                            <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                                <p><strong className="text-foreground">What it does:</strong> Research intelligence platform for searching 225M+ papers and 12M+ patents, with AI-powered document analysis.</p>
                                <p><strong className="text-foreground">Login required:</strong> Yes, an account may be required for full features.</p>
                                <p><strong className="text-foreground">Data collected:</strong> Email address and account credentials if you sign up. Search queries are processed to return results but are not linked to your identity.</p>
                                <p><strong className="text-foreground">Server/backend:</strong> Yes, the platform uses backend services for search indexing and AI processing.</p>
                                <p><strong className="text-foreground">Third-party services:</strong> Research paper databases (Semantic Scholar, OpenAlex), patent databases, and AI services for document analysis.</p>
                            </div>
                        </div>

                        {/* Navii */}
                        <div className="border border-foreground/10 p-5 mb-4 bg-background/50">
                            <h3 className="text-lg font-semibold text-foreground mb-3">Navii</h3>
                            <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                                <p><strong className="text-foreground">What it does:</strong> AR indoor navigation for malls, airports, and large indoor spaces. Currently in development.</p>
                                <p><strong className="text-foreground">Login required:</strong> To be determined (app is in development).</p>
                                <p><strong className="text-foreground">Data collected:</strong> This section will be updated when the app is released. During development, no end-user data is collected.</p>
                                <p><strong className="text-foreground">Location/camera data:</strong> The app will use camera and location data for AR navigation. Specific data handling details will be published before release.</p>
                                <p><strong className="text-foreground">Permissions:</strong> Expected: Camera (for AR), Location (for positioning).</p>
                            </div>
                        </div>

                        {/* SmartRoads */}
                        <div className="border border-foreground/10 p-5 mb-4 bg-background/50">
                            <h3 className="text-lg font-semibold text-foreground mb-3">SmartRoads</h3>
                            <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                                <p><strong className="text-foreground">What it does:</strong> Traffic management system using RTK GPS positioning and AI coordination. Currently in development.</p>
                                <p><strong className="text-foreground">Status:</strong> Hardware/research project in development. No consumer-facing application is currently available.</p>
                                <p><strong className="text-foreground">Data collected:</strong> This section will be updated when the system reaches public deployment. During research and development, no end-user data is collected.</p>
                            </div>
                        </div>
                    </section>

                    {/* Website & Client Projects */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Client Websites</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Constant Labs builds websites for clients (restaurants, shops, clinics, etc.). These client websites are
                            owned and operated by the respective businesses. Any data collected through those websites is governed
                            by the client's own privacy practices, not this policy. We do not have access to or control over data
                            collected through client websites after they are delivered.
                        </p>
                    </section>

                    {/* constantlabs.ai Website */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">constantlabs.ai Website</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our main website (constantlabs.ai) is a static showcase site. It does not require login, does not collect
                            personal information, and does not use cookies for tracking. The site is hosted on Cloudflare Pages.
                            Standard server logs (IP address, browser type, pages visited) may be recorded by the hosting provider
                            as part of normal web hosting operations.
                        </p>
                    </section>

                    {/* General Data Practices */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">General Data Practices</h2>

                        <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">What We Do Not Do</h3>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li>We do not sell your personal data to anyone</li>
                            <li>We do not use your data for advertising or ad targeting</li>
                            <li>We do not share your data with data brokers</li>
                            <li>For offline apps (Mosque Silence, Ramadan Tracker, Trip Bill Splitter, Athkar Desktop), we have no access to any of your data — it never leaves your device</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Third-Party Services (Where Applicable)</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Some of our apps that require cloud processing (Mufakkir, Motargem, Paper to Product) use the following
                            types of third-party services:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li>Cloud speech recognition (Google Cloud Speech-to-Text, OpenAI Whisper)</li>
                            <li>Translation APIs</li>
                            <li>Firebase for authentication and data storage</li>
                            <li>Research paper and patent databases</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            These third-party services have their own privacy policies. Data sent to these services is limited to
                            what is necessary to provide the feature you are using (e.g., audio for transcription, text for translation).
                        </p>
                    </section>

                    {/* Data Security */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Data Security</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            For apps that do transmit data (Mufakkir, Motargem), all communication is encrypted in transit using HTTPS/TLS.
                            For apps that store data locally on your device (Mosque Silence, Ramadan Tracker, Trip Bill Splitter, Athkar Desktop),
                            your data is as secure as your device itself — we never have access to it.
                        </p>
                    </section>

                    {/* Your Rights */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Your Rights and Choices</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            For apps with accounts (Mufakkir, Paper to Product), you may request:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                            <li><strong>Access:</strong> A copy of your personal data</li>
                            <li><strong>Correction:</strong> Correction of inaccurate data</li>
                            <li><strong>Deletion:</strong> Deletion of your account and all associated data</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            For offline apps (Mosque Silence, Ramadan Tracker, Trip Bill Splitter, Athkar Desktop), you have full
                            control — all data is on your device. Uninstalling the app removes all data. There is nothing for us
                            to delete because we never had it.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            To exercise any data rights for account-based apps, contact us at the email address below.
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Children's Privacy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our apps that require accounts are not directed to children under the age of 13. We do not knowingly
                            collect personal information from children under 13.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            Our offline apps (Mosque Silence, Ramadan Tracker, Trip Bill Splitter, Athkar Desktop) do not collect
                            any information from anyone, regardless of age.
                        </p>
                    </section>

                    {/* Changes to Policy */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Changes to This Policy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may update this Privacy Policy when we release new applications or add features that change data
                            handling. We will update the "Last updated" date at the top of this page. For apps with accounts,
                            we will notify you of significant changes via email.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="border border-foreground/20 p-6 bg-card">
                        <h2 className="text-xl font-bold uppercase mb-4 text-foreground">Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            If you have any questions about this Privacy Policy or how a specific app handles your data, contact us:
                        </p>
                        <div className="mt-4 space-y-2 text-muted-foreground">
                            <p><strong className="text-foreground">Email:</strong> info@constantlabs.ai</p>
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
