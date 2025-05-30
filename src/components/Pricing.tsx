import clsx from 'clsx'

import { Button } from '@/components/Button'
import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'

function Plan({
  name,
  description,
  price,
  features,
  href,
  featured = false,
}: {
  name: string
  description: string
  price: string
  features: Array<string>
  href: string
  featured?: boolean
}) {
  return (
    <div
      className={clsx(
        'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
        featured && 'bg-[#E55F4C] sm:shadow-lg',
      )}
    >
      {featured && (
        <div className="absolute inset-0 mask-[linear-gradient(white,transparent)] text-white/10">
          <GridPattern x="50%" y="50%" />
        </div>
      )}
      <div className="relative flex flex-col">
        <h3
          className={clsx(
            'mt-7 text-lg font-semibold tracking-tight',
            featured ? 'text-white' : 'text-slate-900',
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            'mt-2 text-lg tracking-tight',
            featured ? 'text-white' : 'text-slate-600',
          )}
        >
          {description}
        </p>
        <p className="order-first flex font-display font-bold">
          <span
            className={clsx(
              'text-[1.75rem]/9',
              featured ? 'text-blue-200' : 'text-slate-500',
            )}
          >
            $
          </span>
          <span
            className={clsx(
              'mt-1 ml-1 text-7xl tracking-tight',
              featured ? 'text-white' : 'text-slate-900',
            )}
          >
            {price}
          </span>
        </p>
        <div className="order-last mt-8">
          <ul
            role="list"
            className={clsx(
              '-my-2 divide-y text-base tracking-tight',
              featured
                ? 'divide-white/10 text-white'
                : 'divide-slate-200 text-slate-900',
            )}
          >
            {features.map((feature) => (
              <li key={feature} className="flex py-2">
                <CheckIcon
                  className={clsx(
                    'h-8 w-8 flex-none',
                    featured ? 'fill-white' : 'fill-slate-600',
                  )}
                />
                <span className="ml-4">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          href={href}
          color={featured ? 'white' : 'slate'}
          className="mt-8"
          aria-label={`Get started with the ${name} plan for $${price}`}
        >
          Get started
        </Button>
      </div>
    </div>
  )
}

export interface PricingProps {
  plans?: Array<{
    name: string
    description: string
    price: string
    features: Array<string>
    href: string
    featured?: boolean
  }>
  heading?: string
  subheading?: string
  description?: string
}

export function Pricing({
  plans = [
    {
      name: 'Essential',
      description:
        'Stay stocked with the basics! With the Credera Essentials Subscription, you’ll receive a monthly delivery of staple Credera-branded items like t-shirts, mugs, notebooks, and stickers. Perfect for new team members or anyone who wants to keep their Credera swag collection fresh and up-to-date.',
      price: '15',
      href: '#',
      features: [
        'Monthly delivery of Credera-branded basics',
        'Includes t-shirts, mugs, notebooks, and stickers',
        'Early access to new staple merchandise',
        'Welcome gift in your first box',
        'Easy plan management and cancellation',
        'Standard shipping included',
      ],
    },
    {
      featured: true,
      name: 'Complete',
      description:
        'Elevate your swag game! The Credera Premium Experience delivers a curated box of exclusive, limited-edition Credera merchandise every month. Enjoy premium apparel, tech gadgets, and surprise seasonal items you won’t find anywhere else. Treat yourself or a colleague to the ultimate Credera gear experience!',
      price: '50',
      href: '#',
      features: [
        'Monthly delivery of exclusive, limited-edition Credera gear',
        'Premium apparel (hoodies, polos, hats, etc.)',
        'Tech gadgets and unique accessories',
        'Surprise seasonal and themed items',
        'Priority customer support',
        'Early access to special releases and collaborations',
        'Welcome box with bonus premium item',
        'Free expedited shipping',
      ],
    },
  ],
  subheading = 'Pick your subscription',
  description = 'A subscription ensures you never miss out on the latest Credera swag, making it easy and fun to stay stocked with fresh, branded gear all year long.',
}: PricingProps) {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pt-16 pb-8 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-0 lg:pb-16"
    >
      <Container>
        <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          {subheading}
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          {description}
        </p>
      </Container>
      <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
