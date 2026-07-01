export function RoutesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full">

        {/* Route 1 — green, top band */}
        <path fill="none" stroke="hsl(146,60%,47%)" strokeOpacity="0.28" strokeWidth="1.5" strokeDasharray="5 12"
          d="M 0,160 Q 720,80 1440,180"/>
        <circle r="3.5" fill="hsl(146,60%,47%)" opacity="0.70">
          <animateMotion dur="16s" repeatCount="indefinite" begin="0s"
            path="M 0,160 Q 720,80 1440,180"/>
        </circle>

        {/* Route 2 — coral, upper-mid */}
        <path fill="none" stroke="hsl(14,88%,60%)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="5 12"
          d="M 1440,310 Q 720,220 0,330"/>
        <circle r="3.2" fill="hsl(14,88%,60%)" opacity="0.65">
          <animateMotion dur="14s" repeatCount="indefinite" begin="2s"
            path="M 1440,310 Q 720,220 0,330"/>
        </circle>

        {/* Route 3 — green, mid */}
        <path fill="none" stroke="hsl(146,60%,47%)" strokeOpacity="0.28" strokeWidth="1.5" strokeDasharray="5 12"
          d="M 0,470 Q 720,380 1440,460"/>
        <circle r="3" fill="hsl(146,60%,47%)" opacity="0.65">
          <animateMotion dur="18s" repeatCount="indefinite" begin="5s"
            path="M 0,470 Q 720,380 1440,460"/>
        </circle>

        {/* Route 4 — coral, lower-mid */}
        <path fill="none" stroke="hsl(14,88%,60%)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="5 12"
          d="M 1440,600 Q 720,510 0,610"/>
        <circle r="3.2" fill="hsl(14,88%,60%)" opacity="0.65">
          <animateMotion dur="15s" repeatCount="indefinite" begin="7s"
            path="M 1440,600 Q 720,510 0,610"/>
        </circle>

        {/* Route 5 — green, bottom */}
        <path fill="none" stroke="hsl(146,60%,47%)" strokeOpacity="0.28" strokeWidth="1.5" strokeDasharray="5 12"
          d="M 0,780 Q 720,700 1440,790"/>
        <circle r="2.8" fill="hsl(146,60%,47%)" opacity="0.62">
          <animateMotion dur="20s" repeatCount="indefinite" begin="3s"
            path="M 0,780 Q 720,700 1440,790"/>
        </circle>

        {/* Route 6 — coral, left diagonal */}
        <path fill="none" stroke="hsl(14,88%,60%)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="5 12"
          d="M 260,0 Q 200,300 300,600 Q 350,750 280,900"/>
        <circle r="2.6" fill="hsl(14,88%,60%)" opacity="0.62">
          <animateMotion dur="13s" repeatCount="indefinite" begin="1s"
            path="M 260,0 Q 200,300 300,600 Q 350,750 280,900"/>
        </circle>

        {/* Route 7 — green, centre vertical */}
        <path fill="none" stroke="hsl(146,60%,47%)" strokeOpacity="0.28" strokeWidth="1.5" strokeDasharray="5 12"
          d="M 720,0 Q 760,300 700,600 Q 660,750 720,900"/>
        <circle r="2.4" fill="hsl(146,60%,47%)" opacity="0.62">
          <animateMotion dur="11s" repeatCount="indefinite" begin="9s"
            path="M 720,0 Q 760,300 700,600 Q 660,750 720,900"/>
        </circle>

        {/* Route 8 — coral, right diagonal */}
        <path fill="none" stroke="hsl(14,88%,60%)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="5 12"
          d="M 1180,0 Q 1240,300 1160,600 Q 1100,750 1180,900"/>
        <circle r="2.6" fill="hsl(14,88%,60%)" opacity="0.62">
          <animateMotion dur="15s" repeatCount="indefinite" begin="6s"
            path="M 1180,0 Q 1240,300 1160,600 Q 1100,750 1180,900"/>
        </circle>

      </svg>
    </div>
  );
}
