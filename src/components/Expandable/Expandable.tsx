'use client'

import { Children, createContext, useContext, useState } from 'react'

/**
 * Down arrow icon for ExpandableButton.
 *
 * @param {React.ComponentPropsWithoutRef<'svg'>} props - SVG props
 * @returns {JSX.Element} SVG arrow icon
 */
function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m17 14-5 5-5-5M12 18.5V5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ExpandableContext = createContext({
  isExpanded: false,
  expand: () => {},
})

/**
 * Expandable section component for showing/hiding additional content.
 *
 * Provides context for ExpandableItems and ExpandableButton.
 *
 * @component
 * @example
 * <Expandable>
 *   <ExpandableItems limit={2}>
 *     <div>Item 1</div>
 *     <div>Item 2</div>
 *     <div>Item 3</div>
 *   </ExpandableItems>
 *   <ExpandableButton>Show more</ExpandableButton>
 * </Expandable>
 */
export function Expandable(props: React.ComponentPropsWithoutRef<'div'>) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <ExpandableContext.Provider
      value={{
        isExpanded,
        expand: () => {
          setIsExpanded(true)
        },
      }}
    >
      <div {...props} data-expanded={isExpanded ? '' : undefined} />
    </ExpandableContext.Provider>
  )
}

/**
 * Renders a subset of children, expanding to show all when expanded.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The items to display.
 * @param {number} [props.limit=2] - Number of items to show before expanding.
 * @returns {React.ReactNode}
 *
 * @example
 * <ExpandableItems limit={2}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </ExpandableItems>
 */
export function ExpandableItems({
  children,
  limit = 2,
}: {
  children: React.ReactNode
  limit?: number
}) {
  let { isExpanded } = useContext(ExpandableContext)

  return Children.toArray(children).slice(0, isExpanded ? undefined : limit)
}

/**
 * Button to expand the Expandable section and show all items.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Button label/content.
 * @returns {JSX.Element | null}
 *
 * @example
 * <ExpandableButton>Show more</ExpandableButton>
 */
export function ExpandableButton({ children }: { children: React.ReactNode }) {
  let { isExpanded, expand } = useContext(ExpandableContext)

  return (
    !isExpanded && (
      <div className="mt-10 flex justify-center">
        <button
          type="button"
          className="flex items-center text-base font-medium tracking-tight text-slate-900 hover:text-slate-700"
          onClick={expand}
        >
          {children}
          <ArrowDownIcon className="ml-2 h-6 w-6" />
        </button>
      </div>
    )
  )
}
