type SpinnerProps = {
  /*Classname */
  className?: string
}

export function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <svg
      {...props}
      className={className}
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(2.5 2.5)" strokeWidth="5">
          <circle strokeOpacity=".25" cx="16" cy="16" r="16" />
          <path d="M32 16c0-9.94-8.06-16-16-16">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 16 16"
              to="360 16 16"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  )
}
