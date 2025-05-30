import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon/CheckIcon'
import { Container } from '@/components/Container/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Artificial Intelligence (AI) is reshaping industries and driving
          innovation.
        </p>
        <p className="mt-4">
          But the vast majority of businesses actually don’t get value from
          their data and AI projects. Understanding how to leverage its power is
          crucial for business leaders. The Intelligent Enterprise: An
          Executive's Guide to Realizing Value from AI and Datais your essential
          guide to creating and maximizing value from AI initiatives within your
          organization.
        </p>
        <p className="mt-4">
          If you’re not already using AI effectively to enhance your business,
          be warned: there are likely a dozen startups out there that are
          implementing AI to disrupt you.
        </p>
        <p className="mt-4">
          This book takes you on a journey through the evolving landscape of AI,
          offering clear insights into its potential and strategic applications.
          You’ll learn how to navigate the complexities of AI implementation,
          from setting clear objectives and aligning with business goals to
          creating a culture of continuous improvement and adaptation.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Identify Opportunities: Uncover the specific areas where AI can drive the most impact in your organization, enhancing efficiency and profitability.',
            'Implement Effectively: Master the best practices for integrating AI solutions into your existing systems, ensuring seamless transitions that boost productivity without disrupting operations.',
            'Lead Strategically: Empower your team with the knowledge and tools needed to thrive in an AI-driven landscape, enhancing collaboration and innovation across departments.',
            'Measure Success: Establish metrics and feedback loops to assess the performance of your AI initiatives, allowing for agile adjustments that align with evolving business needs.',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          Whether you’re just starting your AI journey or looking to refine
          existing initiatives, The Intelligent Enterprise: An Executive's Guide
          to Realizing Value from AI and Dataequips you with the insights and
          strategies needed to drive sustainable growth and competitive
          advantage in today’s digital age. Embrace the future of business and
          unlock the true potential of your data with AI!
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Get two free chapters straight to your inbox{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
