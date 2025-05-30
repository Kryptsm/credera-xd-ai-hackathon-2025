import { Container } from '@/components/Container/Container'
import { SectionHeading } from '@/components/SectionHeading/SectionHeading'

type HeadlineProps = {
  tagline?: string
  headline?: string
  id?: string
  number?: string
}

/**
 * Headline section for page headings and taglines.
 *
 * @component
 * @param {object} props
 * @param {string} [props.tagline] - Tagline text.
 * @param {string} [props.headline] - Main headline text.
 * @param {string} [props.id] - Section id.
 * @param {string} [props.number] - Section number.
 * @returns {JSX.Element} Headline section.
 *
 * @example
 * <Headline tagline="Welcome" headline="Main Title" />
 */
export function Headline({ tagline, headline, id, number }: HeadlineProps) {
  return (
    <section
      id={id ?? ''}
      aria-labelledby="pricing-title"
      className="scroll-mt-14 sm:scroll-mt-326"
    >
      <div className="mx-auto my-12 w-full max-w-7xl px-6 text-left lg:px-8">
        <div className="w-full max-w-3xl lg:mx-0">
          {tagline && (
            <SectionHeading number={number ?? ''} id={id}>
              {tagline}
            </SectionHeading>
          )}
          <h3 className="mt-8 text-left text-5xl font-semibold tracking-tight text-[#E55F4C]">
            {headline}
          </h3>
        </div>
      </div>
      {/* </Container> */}
    </section>
  )
}
