export default function Logo({ size = 40, showText = true, scrolled = false }) {
  return (
    <div className="flex items-center space-x-3 group">
      {/* SVG Logo Mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Background shape */}
        <rect width="48" height="48" rx="10" fill="#1E3A8A" />

        {/* Blueprint grid lines (subtle) */}
        <line x1="12" y1="0" x2="12" y2="48" stroke="white" strokeOpacity="0.07" strokeWidth="0.5" />
        <line x1="24" y1="0" x2="24" y2="48" stroke="white" strokeOpacity="0.07" strokeWidth="0.5" />
        <line x1="36" y1="0" x2="36" y2="48" stroke="white" strokeOpacity="0.07" strokeWidth="0.5" />
        <line x1="0" y1="12" x2="48" y2="12" stroke="white" strokeOpacity="0.07" strokeWidth="0.5" />
        <line x1="0" y1="24" x2="48" y2="24" stroke="white" strokeOpacity="0.07" strokeWidth="0.5" />
        <line x1="0" y1="36" x2="48" y2="36" stroke="white" strokeOpacity="0.07" strokeWidth="0.5" />

        {/* Building silhouette */}
        <path
          d="M8 38 L8 20 L16 20 L16 14 L24 10 L32 14 L32 20 L40 20 L40 38 Z"
          fill="white"
          fillOpacity="0.12"
        />

        {/* AK monogram - letter A */}
        <path
          d="M10 36 L17 18 L24 36"
          stroke="#F59E0B"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line x1="12.5" y1="29" x2="21.5" y2="29" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />

        {/* AK monogram - letter K */}
        <line x1="27" y1="18" x2="27" y2="36" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path
          d="M27 27 L38 18"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27 27 L38 36"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Gold accent bar bottom */}
        <rect x="8" y="38" width="32" height="2.5" rx="1.25" fill="#F59E0B" />
      </svg>

      {/* Text */}
      {showText && (
        <div>
          <span
            className={`font-bold text-xl leading-none transition-colors duration-300 ${
              scrolled ? 'text-primary' : 'text-white'
            }`}
          >
            DÉBLOQUÉ BTP
          </span>
          <p
            className={`text-xs leading-none mt-0.5 transition-colors duration-300 ${
              scrolled ? 'text-accent' : 'text-gray-300'
            }`}
          >
            Abdoulaye KEITA · Mali
          </p>
        </div>
      )}
    </div>
  )
}
