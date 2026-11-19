import type { EmblemKey } from '../data/idmContent';

interface GeometricEmblemProps {
  emblem: EmblemKey;
  className?: string;
}

export function GeometricEmblem({ emblem, className = 'w-5 h-5' }: GeometricEmblemProps) {
  switch (emblem) {
    case 'aureon':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M3 8.5C5.2 6.5 7.8 6.5 10 8.5C12.2 10.5 14.8 10.5 17 8.5C18.5 7.1 19.8 6.8 21 7.3"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M3 13C5.2 11 7.8 11 10 13C12.2 15 14.8 15 17 13C18.5 11.6 19.8 11.3 21 11.8"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M3 17.5C5.2 15.5 7.8 15.5 10 17.5C12.2 19.5 14.8 19.5 17 17.5C18.5 16.1 19.8 15.8 21 16.3"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            opacity="0.45"
          />
        </svg>
      );
    case 'nordlys':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M3.5 6.5C6.5 6.5 9.8 7.4 12 9C14.2 7.4 17.5 6.5 20.5 6.5V18C17.5 18 14.2 18.8 12 20.2C9.8 18.8 6.5 18 3.5 18V6.5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path d="M12 9V20" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case 'meridian':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" fill="currentColor" />
          <path
            d="M12 2.5V5.2M12 18.8V21.5M2.5 12H5.2M18.8 12H21.5M5.3 5.3L7.2 7.2M16.8 16.8L18.7 18.7M18.7 5.3L16.8 7.2M7.2 16.8L5.3 18.7"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'solstice':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
        </svg>
      );
    case 'kintaro':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="4" y="4" width="6.5" height="6.5" rx="0.75" fill="currentColor" />
          <rect x="13.5" y="4" width="6.5" height="6.5" rx="0.75" fill="currentColor" opacity="0.4" />
          <rect x="4" y="13.5" width="6.5" height="6.5" rx="0.75" fill="currentColor" opacity="0.4" />
          <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="0.75" fill="currentColor" />
        </svg>
      );
    case 'halcyon':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M5 19L12 4.5L19 19H15.6L12 11.4L8.4 19H5Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'kamakshi':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M12 3.5C12 3.5 6 10.1 6 14.3C6 17.7 8.7 20.5 12 20.5C15.3 20.5 18 17.7 18 14.3C18 10.1 12 3.5 12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="14.6" r="1.6" fill="currentColor" />
        </svg>
      );
    case 'vasundhana':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M12 4.5A7.5 7.5 0 0 1 19.5 12"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'montra':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M10.2 5L5.8 19M17.2 5L12.8 19"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}
