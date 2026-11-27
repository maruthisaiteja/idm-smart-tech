interface BrandLogoProps {
  /** 'light' places the logo directly on clean light surfaces; 'dark-badge' frames it in a crisp white seal for dark navy surfaces */
  variant?: 'light' | 'dark-badge';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  showTagline?: boolean;
  className?: string;
}

const SIZE_MAP = {
  xs: 'h-7 w-7',
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
  lg: 'h-14 w-14',
};

export function BrandLogo({
  variant = 'light',
  size = 'md',
  showWordmark = false,
  showTagline = false,
  className = '',
}: BrandLogoProps) {
  const isDarkSurface = variant === 'dark-badge';

  return (
    <span className={`inline-flex items-center gap-3 shrink-0 ${className}`}>
      <span
        className={`inline-flex items-center justify-center shrink-0 transition-transform duration-200 ${
          SIZE_MAP[size]
        } ${
          isDarkSurface
            ? 'rounded-lg bg-white p-1.5 border border-[#F8D501]/70 shadow-sm'
            : 'rounded-md bg-white/90 p-0.5 border border-[#0B1B42]/15 shadow-xs'
        }`}
      >
        <img
          src="/idm-logo.png"
          alt="IDM Smart Tech Logo"
          className="h-full w-full object-contain"
        />
      </span>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-serif text-[18px] sm:text-[19.5px] font-bold tracking-[-0.015em] ${
              isDarkSurface ? 'text-white' : 'text-[#0B1B42]'
            }`}
          >
            IDM{' '}
            <span className={isDarkSurface ? 'text-[#F8D501]' : 'text-[#162E68]'}>
              Smart Tech
            </span>
          </span>
          {showTagline && (
            <span
              className={`mt-1 font-mono text-[8.5px] tracking-[0.2em] uppercase font-bold ${
                isDarkSurface ? 'text-[#F8D501]' : 'text-[#162E68]'
              }`}
            >
              GROWTH &amp; TECHNOLOGY
            </span>
          )}
        </span>
      )}
    </span>
  );
}
