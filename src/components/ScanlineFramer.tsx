export const ScanlineFramer = () => {
    return (
        <div
            className="fixed inset-0 pointer-events-none z-[9997]"
            style={{
                background: `repeating-linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.05) 0px,
          transparent 1px,
          transparent 2px,
          rgba(0, 0, 0, 0.05) 3px
        )`,
                backgroundSize: "100% 3px"
            }}
        />
    );
};
