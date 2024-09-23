"use client" 

interface Props { 
    className?: string
}


export default function QuoteComponent({ className }: Props) {

    return( 
        <svg

        xmlns="http://www.w3.org/2000/svg"
        width="179"
        height="159"
        viewBox="0 0 179 159"
        fill="none"
        className={`h-[40px] md:w-auto  w-[100px] ${className}`}
      >
        <path
          d="M0 159V78.0954C0 27.9046 22.6322 2.06007 67.8965 0.561829L77.4357 0V38.7668H68.4577C52.372 40.265 44.3292 52.2509 44.3292 74.7244V83.7138H77.4357V159H0ZM179 38.7668H170.022C153.936 40.265 145.893 52.2509 145.893 74.7244V83.7138H179V159H102.125V78.0954C102.125 28.2791 124.571 2.43462 169.461 0.561829L179 0V38.7668Z"
          fill="url(#paint0_linear_61_43)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_61_43"
            x1="89.2933"
            y1="118.499"
            x2="208.5"
            y2="0.150533"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EDE7DC" />
            <stop offset="1" stop-color="#EDE7DC" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

    )
}
