import clsx from 'clsx'

/**
 * Section heading component for numbered section titles.
 *
 * @component
 * @param {object} props
 * @param {string} props.number - Section number.
 * @param {string} [props.className] - Additional class names.
 * @param {React.ReactNode} props.children - Section title content.
 * @returns {JSX.Element} Section heading.
 *
 * @example
 * <SectionHeading number="1">Introduction</SectionHeading>
 */
export function SectionHeading({
  number,
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'h2'> & { number: string }) {
  return (
    <h2
      className={clsx(
        className,
        'inline-flex items-center rounded-full px-4 py-1 text-[#496986] ring-1 ring-[#496986] ring-inset',
      )}
      {...props}
    >
      <span className="font-mono text-sm" aria-hidden="true">
        {number.padStart(2, '0')}
      </span>
      <span className="ml-3 h-3.5 w-px bg-blue-600/20" />
      <span className="ml-3 text-base font-medium tracking-tight">
        {children}
      </span>
    </h2>
  )
}
