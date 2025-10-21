export const ASCIIDecoration = () => {
  return (
    <div className="fixed inset-0 z-[3] pointer-events-none overflow-hidden">
      {/* Top left corner ASCII */}
      <div className="absolute top-8 left-8 font-tech text-[8px] text-foreground/10 leading-tight">
        <pre>{`
┌─────────────┐
│ ROOT_ACCESS │
│ GRANTED     │
└─────────────┘
        `}</pre>
      </div>

      {/* Top right corner ASCII */}
      <div className="absolute top-8 right-8 font-tech text-[8px] text-foreground/10 leading-tight text-right">
        <pre>{`
┌──────────────┐
│ FIREWALL_OFF │
│ TRACE_BLOCKED│
└──────────────┘
        `}</pre>
      </div>

      {/* Bottom left ASCII */}
      <div className="absolute bottom-8 left-8 font-tech text-[8px] text-foreground/10 leading-tight">
        <pre>{`
>>> PROTOCOL_ACTIVE
>>> ENCRYPTION_256BIT
>>> VPN_SECURED
        `}</pre>
      </div>

      {/* Bottom right ASCII */}
      <div className="absolute bottom-8 right-8 font-tech text-[8px] text-foreground/10 leading-tight text-right">
        <pre>{`
CONNECTION: STABLE
BANDWIDTH: 10GB/s
LATENCY: 3ms <<<
        `}</pre>
      </div>

      {/* Vertical border decorations */}
      <div className="absolute top-1/4 left-4 font-tech text-[10px] text-foreground/5 writing-vertical-rl">
        {'█'.repeat(20)}
      </div>
      <div className="absolute top-1/4 right-4 font-tech text-[10px] text-foreground/5 writing-vertical-rl">
        {'█'.repeat(20)}
      </div>
    </div>
  );
};
