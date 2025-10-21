import { useEffect, useState } from 'react';

export const SystemOverlay = () => {
  const [messages, setMessages] = useState<Array<{
    id: number;
    text: string;
    x: number;
    y: number;
  }>>([]);

  const systemMessages = [
    'SYSTEM_BREACH_DETECTED',
    'ACCESS_GRANTED',
    'FIREWALL_DISABLED',
    'ROOT_ACCESS_ACQUIRED',
    'DECRYPTING_FILES',
    'PACKET_SNIFFER_ACTIVE',
    'BACKDOOR_INSTALLED',
    'NEURAL_NET_ONLINE',
    'SURVEILLANCE_MODE',
    'DATA_MINING_IN_PROGRESS',
    'BRUTE_FORCE_ATTACK',
    'INJECTION_SUCCESSFUL',
    'PROTOCOL_OVERRIDE',
    'QUANTUM_ENCRYPTION_BYPASS',
    'ZERO_DAY_EXPLOIT_LOADED',
    'ADMIN_PRIVILEGES_ELEVATED',
    'DARK_WEB_CONNECTION_ESTABLISHED',
    'MALWARE_DEPLOYED',
    'SECURITY_LAYERS_PENETRATED',
    'CLASSIFIED_DATA_ACCESSED',
  ];

  useEffect(() => {
    const createMessage = () => {
      // Reduced frequency and limit to 3 messages max
      if (Math.random() > 0.9 && messages.length < 3) {
        const id = Date.now() + Math.random();
        const text = systemMessages[Math.floor(Math.random() * systemMessages.length)];
        const x = Math.random() * 70 + 10; // 10-80% of screen width
        const y = Math.random() * 70 + 10; // 10-80% of screen height

        setMessages(prev => [...prev, { id, text, x, y }]);

        setTimeout(() => {
          setMessages(prev => prev.filter(m => m.id !== id));
        }, 2500 + Math.random() * 2500);
      }
    };

    const interval = setInterval(createMessage, 2500); // Less frequent
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden">
      {messages.map(msg => (
        <div
          key={msg.id}
          className="absolute font-tech text-xs tracking-wider animate-pulse"
          style={{
            left: `${msg.x}%`,
            top: `${msg.y}%`,
            color: 'rgba(255, 255, 255, 0.3)',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
            animation: 'fadeInOut 5s ease-in-out',
          }}
        >
          [{msg.text}]
        </div>
      ))}
      
      {/* Corner system info */}
      <div className="absolute top-4 left-4 font-tech text-[10px] text-white/20 space-y-1">
        <div>[SYSTEM_STATUS: ONLINE]</div>
        <div>[ENCRYPTION: AES-256]</div>
        <div>[UPLINK: SECURE]</div>
        <div>[LOCATION: CLASSIFIED]</div>
      </div>

      <div className="absolute top-4 right-4 font-tech text-[10px] text-white/20 text-right space-y-1">
        <div>[ACCESS_LEVEL: ROOT]</div>
        <div>[FIREWALL: DISABLED]</div>
        <div>[TRACE: BLOCKED]</div>
        <div>[VPN: ACTIVE]</div>
      </div>

      <div className="absolute bottom-4 left-4 font-tech text-[10px] text-white/20 space-y-1">
        <div>[PACKETS: 1,247,891]</div>
        <div>[BANDWIDTH: 10GB/s]</div>
        <div>[LATENCY: 3ms]</div>
      </div>

      <div className="absolute bottom-4 right-4 font-tech text-[10px] text-white/20 text-right space-y-1">
        <div>[CPU: 99.9%]</div>
        <div>[RAM: 32GB/32GB]</div>
        <div>[CORES: 16]</div>
      </div>
    </div>
  );
};
