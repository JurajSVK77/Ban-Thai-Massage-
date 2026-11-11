import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Trees, Snowflake } from 'lucide-react';

interface ChristmasContextType {
  isChristmas: boolean;
  toggleChristmas: () => void;
  setChristmas: (val: boolean) => void;
}

const ChristmasContext = createContext<ChristmasContextType>({
  isChristmas: true,
  toggleChristmas: () => {},
  setChristmas: () => {}
});

export const useChristmasTheme = () => useContext(ChristmasContext);

const LOCAL_STORAGE_KEY = 'baan_thai_christmas_theme';

export function ChristmasThemeProvider({ children }: { children: React.ReactNode }) {
  const [isChristmas, setIsChristmas] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved !== null) {
        return saved === 'true';
      }
    }
    // Default to Christmas mode enabled as requested
    return true;
  });

  const setChristmas = (val: boolean) => {
    setIsChristmas(val);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, String(val));
    } catch (e) {
      // ignore localStorage errors
    }
  };

  const toggleChristmas = () => {
    setChristmas(!isChristmas);
  };

  return (
    <ChristmasContext.Provider value={{ isChristmas, toggleChristmas, setChristmas }}>
      {children}
      {isChristmas && <SnowEffect />}
      <ChristmasFloatingSwitch />
    </ChristmasContext.Provider>
  );
}

/**
 * High performance, subtle, elegant falling snow effect
 */
function SnowEffect() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Flakes count and properties for realistic, slightly larger snowflakes
    const flakeCount = Math.min(Math.floor(width / 32), 48);
    type FlakeType = 'crystal' | 'star' | 'fluff';

    const flakes: Array<{
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      opacity: number;
      swing: number;
      swingSpeed: number;
      rotation: number;
      rotationSpeed: number;
      type: FlakeType;
    }> = [];

    const types: FlakeType[] = ['crystal', 'crystal', 'star', 'fluff'];

    for (let i = 0; i < flakeCount; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      // Slightly larger radius: 5px to 11px so the snowflake structure is clearly visible
      const radius = type === 'crystal' 
        ? Math.random() * 4 + 6.5   // 6.5px to 10.5px
        : type === 'star' 
          ? Math.random() * 3 + 5.5 // 5.5px to 8.5px
          : Math.random() * 2 + 4;  // 4px to 6px

      flakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        speedY: Math.random() * 0.7 + 0.35, // Slow, peaceful fall
        speedX: Math.random() * 0.3 - 0.15,
        opacity: Math.random() * 0.4 + 0.35, // 0.35 to 0.75 opacity for nice crystal visibility
        swing: Math.random() * Math.PI * 2,
        swingSpeed: Math.random() * 0.015 + 0.008,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.012,
        type
      });
    }

    let isRunning = true;
    const handleVisibility = () => {
      isRunning = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const render = () => {
      if (isRunning) {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < flakes.length; i++) {
          const flake = flakes[i];
          flake.swing += flake.swingSpeed;
          flake.rotation += flake.rotationSpeed;
          flake.y += flake.speedY;
          flake.x += Math.sin(flake.swing) * 0.6 + flake.speedX;

          if (flake.y > height + 15) {
            flake.y = -15;
            flake.x = Math.random() * width;
          }
          if (flake.x > width + 15) {
            flake.x = -15;
          } else if (flake.x < -15) {
            flake.x = width + 15;
          }

          // Draw the snowflake based on its type
          ctx.save();
          ctx.translate(flake.x, flake.y);
          ctx.rotate(flake.rotation);

          if (flake.type === 'crystal') {
            // Elegant 6-pointed crystalline snowflake with side branch tines
            ctx.strokeStyle = `rgba(255, 255, 255, ${flake.opacity})`;
            ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
            ctx.lineWidth = 1.1;
            ctx.lineCap = 'round';

            const r = flake.radius;
            const branchLen = r * 0.38;

            for (let b = 0; b < 6; b++) {
              ctx.beginPath();
              ctx.moveTo(0, 0);
              ctx.lineTo(0, -r);
              // Side tines / branches
              ctx.moveTo(0, -r * 0.6);
              ctx.lineTo(-branchLen * 0.7, -r * 0.78);
              ctx.moveTo(0, -r * 0.6);
              ctx.lineTo(branchLen * 0.7, -r * 0.78);
              ctx.stroke();

              ctx.rotate(Math.PI / 3);
            }
            // Tiny delicate center nucleus
            ctx.beginPath();
            ctx.arc(0, 0, 1.2, 0, Math.PI * 2);
            ctx.fill();

          } else if (flake.type === 'star') {
            // 6-pointed star crystal
            ctx.strokeStyle = `rgba(255, 255, 255, ${flake.opacity * 0.9})`;
            ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
            ctx.lineWidth = 1.0;
            ctx.lineCap = 'round';

            for (let b = 0; b < 6; b++) {
              ctx.beginPath();
              ctx.moveTo(0, 0);
              ctx.lineTo(0, -flake.radius);
              ctx.stroke();
              ctx.rotate(Math.PI / 3);
            }
            ctx.beginPath();
            ctx.arc(0, 0, flake.radius * 0.28, 0, Math.PI * 2);
            ctx.fill();

          } else {
            // Soft fluffy snowflake with soft glow
            ctx.beginPath();
            ctx.arc(0, 0, flake.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity * 0.85})`;
            ctx.shadowColor = 'rgba(240, 248, 255, 0.5)';
            ctx.shadowBlur = 4;
            ctx.fill();
          }

          ctx.restore();
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 opacity-80"
      style={{ width: '100%', height: '100%' }}
    />
  );
}

/**
 * Floating discreet toggle button at bottom-left corner
 */
export function ChristmasFloatingSwitch() {
  const { isChristmas, toggleChristmas } = useChristmasTheme();

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
      <motion.button
        onClick={toggleChristmas}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={isChristmas ? "Prepnúť na klasický originálny vzhľad" : "Zapnúť vianočnú atmosféru"}
        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-medium tracking-wide shadow-xl backdrop-blur-md transition-all duration-300 border cursor-pointer ${
          isChristmas
            ? 'bg-brand-green-dark/90 hover:bg-brand-green-dark text-white border-brand-peach-light/40 shadow-brand-green-dark/25'
            : 'bg-white/90 hover:bg-white text-text-muted hover:text-brand-green-dark border-brand-green-light/25 shadow-md'
        }`}
      >
        <span className="relative flex h-2 w-2">
          {isChristmas && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-peach-light opacity-75"></span>
          )}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${isChristmas ? 'bg-brand-peach-light' : 'bg-gray-400'}`}></span>
        </span>

        {isChristmas ? (
          <>
            <Trees className="w-3.5 h-3.5 text-brand-peach-light" />
            <span>Vianočný motív: <strong className="font-semibold text-brand-peach-light">Zapnutý</strong></span>
          </>
        ) : (
          <>
            <Snowflake className="w-3.5 h-3.5 text-text-muted" />
            <span>Klasický vzhľad</span>
          </>
        )}
      </motion.button>
    </div>
  );
}

/**
 * Compact Navbar Toggle Button for both desktop and mobile
 */
export function ChristmasNavToggle({ className = "" }: { className?: string }) {
  const { isChristmas, toggleChristmas } = useChristmasTheme();

  return (
    <button
      onClick={toggleChristmas}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[10px] tracking-wider uppercase font-semibold transition-all duration-300 cursor-pointer ${
        isChristmas
          ? 'bg-brand-peach-light/35 border border-brand-peach-dark/30 text-brand-peach-dark hover:bg-brand-peach-light/50'
          : 'bg-brand-green-light/20 border border-brand-green-light/30 text-text-muted hover:text-brand-green-dark'
      } ${className}`}
      title={isChristmas ? "Prepnúť na pôvodný klasický vzhľad" : "Prepnúť na vianočnú atmosféru"}
    >
      {isChristmas ? (
        <>
          <Sparkles className="w-3 h-3 text-brand-peach-dark animate-pulse" />
          <span>Vianoce</span>
        </>
      ) : (
        <>
          <Snowflake className="w-3 h-3 text-text-muted" />
          <span>Klasik</span>
        </>
      )}
    </button>
  );
}

/**
 * Tasteful top notification banner when Christmas theme is active
 */
export function ChristmasTopBanner() {
  const { isChristmas, toggleChristmas } = useChristmasTheme();
  const [isDismissed, setIsDismissed] = useState(false);

  if (!isChristmas || isDismissed) return null;

  return (
    <div className="bg-gradient-to-r from-[#12241c] via-[#1a382b] to-[#12241c] text-white py-1.5 px-4 text-xs relative z-50 border-b border-brand-peach-light/20 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-[11px] sm:text-xs">
        <div className="flex-1 flex items-center justify-center gap-2 text-center overflow-hidden">
          <Sparkles className="w-3 h-3 text-brand-peach-light shrink-0" />
          <span className="font-light truncate sm:overflow-visible">
            <strong className="font-medium text-brand-peach-light">Sviatočný čas v Baan Thai Massage:</strong> Darujte svojim blízkym pokoj a harmóniu pod stromčekom.
          </span>
          <a
            href="https://services.bookio.com/baan-thai-massage-galanta/gift-cards"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center underline hover:text-brand-peach-light font-medium ml-1"
          >
            Vianočné poukážky online →
          </a>
        </div>
        <button
          onClick={() => setIsDismissed(true)}
          className="text-white/60 hover:text-white px-1 text-sm leading-none shrink-0 cursor-pointer"
          aria-label="Zavrieť oznam"
          title="Zavrieť"
        >
          ×
        </button>
      </div>
    </div>
  );
}

/**
 * Cute, stylish vector Santa / Mikuláš hat
 */
export function SantaHat({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="hatVelvet" x1="20" y1="10" x2="80" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E53935" />
          <stop offset="0.65" stopColor="#C62828" />
          <stop offset="1" stopColor="#8E0000" />
        </linearGradient>
      </defs>

      {/* Red velvet cone curving downwards */}
      <path
        d="M 18 56 C 21 34, 38 14, 62 16 C 73 17, 82 23, 85 32 C 87 38, 85 46, 80 49 C 76 51, 72 49, 70 44 C 64 34, 58 24, 46 27 C 32 31, 23 42, 18 56 Z"
        fill="url(#hatVelvet)"
      />

      {/* Fluffy white pompom at tip */}
      <circle cx="80" cy="51" r="7.5" fill="#FFFFFF" />
      <circle cx="80" cy="51" r="7.5" fill="#E2E8F0" fillOpacity="0.4" />
      <circle cx="78.5" cy="49.5" r="4" fill="#FFFFFF" />

      {/* Fluffy white fur trim base band with puffs */}
      <rect x="10" y="52" width="58" height="15" rx="7.5" fill="#FFFFFF" />
      <circle cx="14" cy="59.5" r="7" fill="#FFFFFF" />
      <circle cx="28" cy="59.5" r="7.5" fill="#FFFFFF" />
      <circle cx="44" cy="59.5" r="7.5" fill="#FFFFFF" />
      <circle cx="60" cy="59.5" r="7" fill="#FFFFFF" />
      
      {/* Subtle bottom shadow on fur */}
      <path d="M 12 65 C 26 68, 48 68, 62 65" stroke="#CBD5E1" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

