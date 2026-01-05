import { useEffect, useState } from "react";

interface PageLoaderProps {
    onComplete?: () => void;
}

export const PageLoader = ({ onComplete }: PageLoaderProps) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            if (document.fonts) {
                try {
                    await Promise.all([
                        document.fonts.load('400 1em Rajdhani'),
                        document.fonts.load('700 1em Rajdhani'),
                        document.fonts.load('400 1em "Share Tech Mono"'),
                        document.fonts.load('700 1em Orbitron'),
                        document.fonts.load('400 1em HACKED'),
                    ]);
                    await document.fonts.ready;
                } catch (e) {
                    console.log('Font loading error:', e);
                }
            }
            setFontsLoaded(true);
        };
        loadFonts();
    }, []);

    useEffect(() => {
        if (fontsLoaded && onComplete) {
            // Small delay for smooth transition
            setTimeout(onComplete, 100);
        }
    }, [fontsLoaded, onComplete]);

    return (
        <div className="fixed inset-0 z-[10000] bg-background flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-tech text-foreground/60 animate-pulse uppercase tracking-widest">
                    {fontsLoaded ? "READY" : "LOADING..."}
                </span>
            </div>
        </div>
    );
};
