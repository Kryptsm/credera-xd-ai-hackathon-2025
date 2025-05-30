import { useId } from 'react'

/**
 * SVG pattern component for decorative backgrounds.
 *
 * @component
 * @param {object} props
 * @param {number} [props.size=40] - Size of each pattern cell.
 * @param {number} [props.gapX=16] - Horizontal gap between cells.
 * @param {number} [props.gapY=8] - Vertical gap between cells.
 * @param {Array<Array<0|1>>} [props.pattern] - Pattern matrix.
 * @returns {JSX.Element} SVG pattern.
 *
 * @example
 * <Pattern size={40} gapX={16} gapY={8} />
 */
export function Pattern({
  size = 40,
  gapX = 16,
  gapY = 8,
  pattern = [
    [0, 1, 0, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 0, 0, 0, 1],
    [0, 1, 0, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 0, 0, 0, 1],
  ],
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  size?: number
  gapX?: number
  gapY?: number
  pattern?: Array<Array<0 | 1>>
}) {
  let id = useId()
  let width = pattern[0].length * size + (pattern[0].length - 1) * gapX
  let height = pattern.length * size + (pattern.length - 1) * gapY

  return (
    <svg aria-hidden="true" width={width} height={height} {...props}>
      <defs>
        <symbol id={`${id}-0`} width={size} height={size}>
          <rect className="fill-blue-500" width={size} height={size} />
          <circle
            className="fill-[#496986]"
            cx={size / 2}
            cy={size / 2}
            r={size * (13 / 40)}
          />
        </symbol>
        <symbol id={`${id}-1`} width={size} height={size}>
          <circle
            className="fill-blue-300"
            cx={size / 2}
            cy={size / 2}
            r={size / 2}
          />
          <rect
            className="fill-[#496986]"
            width={size / 2}
            height={size / 2}
            x={size / 4}
            y={size / 4}
          />
        </symbol>
      </defs>
      {pattern.map((row, rowIndex) =>
        row.map((shape, columnIndex) => (
          <use
            key={`${rowIndex}-${columnIndex}`}
            href={`#${id}-${shape}`}
            x={columnIndex * size + columnIndex * gapX}
            y={rowIndex * size + rowIndex * gapY}
          />
        )),
      )}
    </svg>
  )
}
