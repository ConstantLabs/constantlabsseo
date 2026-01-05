export const CRTOverlayFramer = () => {
    return (
        <>
            {/* Vignette Overlay */}
            <div
                className="fixed inset-0 pointer-events-none z-[9998]"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)"
                }}
            />

            {/* Static Screen Glow - no animation for performance */}
            <div
                className="fixed inset-0 pointer-events-none z-[9999] mix-blend-overlay"
                style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    opacity: 0.04
                }}
            />
        </>
    );
};
