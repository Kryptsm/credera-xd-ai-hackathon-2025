import { useId } from 'react'

/**
 * SVG grid pattern background for sections.
 *
 * @component
 * @param {object} props - Pattern SVG props (except id).
 * @returns {JSX.Element} SVG grid pattern.
 *
 * @example
 * <GridPattern x="50%" />
 */
export function GridPattern(
  props: Omit<React.ComponentPropsWithoutRef<'pattern'>, 'id'>,
) {
  let patternId = useId()

  return (
    <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
      <defs>
        <pattern
          id={patternId}
          width="128"
          height="128"
          patternUnits="userSpaceOnUse"
          {...props}
        >
          <path d="M0 128V.5H128" fill="none" stroke="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}
