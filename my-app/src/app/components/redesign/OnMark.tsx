interface OnMarkProps {
  className?: string;
}

/** Geometric “On” mark. Strokes use currentColor so it matches surrounding type. */
export function OnMark({ className }: OnMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2270 1056"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g transform="translate(24 24)">
        <g fill="none" stroke="currentColor" strokeWidth={50} strokeLinecap="round">
          <path d="M 545.75 26.82 A 479 479 0 1 1 69.88 301.57" />
          <line x1="465.68" y1="437.63" x2="260.12" y2="81.6" />
        </g>
        <g transform="translate(1188 0)">
          <clipPath id="on-mark-n">
            <rect width="1034" height="1008" />
          </clipPath>
          <line
            x1="25"
            y1="0"
            x2="1009"
            y2="1008"
            stroke="currentColor"
            strokeWidth={50}
            strokeLinecap="butt"
            clipPath="url(#on-mark-n)"
          />
          <rect x="0" y="284" width="50" height="724" fill="currentColor" />
          <rect x="984" y="0" width="50" height="1008" fill="currentColor" />
        </g>
      </g>
    </svg>
  );
}
