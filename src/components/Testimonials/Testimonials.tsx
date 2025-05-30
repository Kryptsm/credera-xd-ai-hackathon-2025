import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable/Expandable'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import avatarImage7 from '@/images/avatars/avatar-7.png'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'
import avatarImage10 from '@/images/avatars/avatar-10.png'
import avatarImage11 from '@/images/avatars/avatar-11.png'

const testimonials = [
  [
    {
      content:
        'This book does deliver real value. It helped me understand how to apply AI with strategic vision, beyond the tech hype. It is full of concrete examples and approaches for anyone who wants results.',
      author: {
        name: 'Antonio Littel',
        role: 'Frontend Developer',
        image: avatarImage3,
      },
    },
    {
      content:
        "In this book, I found a lot of relevant information that instead of generating fear or anxiety of what could mean a future with the advances of this tool, it helped me to understand how I could start using it in my company's processes to generate more revenue and above all more agile and effective processes.",
      author: {
        name: 'Lynn Nolan',
        role: 'Growth Marketer',
        image: avatarImage4,
      },
    },
    {
      content:
        '"The Intelligent Enterprise" is a clear, insightful guide for executives navigating the AI and data landscape. It breaks down complex topics into actionable strategies with real business impact. A must-read for leaders serious about unlocking value through innovation. Highly practical and inspiring.',
      author: {
        name: 'Krista Prosacco',
        role: 'Professional Designer',
        image: avatarImage9,
      },
    },
  ],
  [
    {
      content:
        'Goth and Yates provide clear insights on how to leverage AI to drive business value, from identifying opportunities to implementing effective strategies.',
      author: {
        name: 'Cameron Considine',
        role: 'Entrepreneur',
        image: avatarImage7,
      },
    },
    {
      content:
        "They've worked with a wide range of Fortune 500 companies across sectors, from telecom to life sciences to financial services, helping them transform their businesses using data and AI. Their book is worth a read!",
      author: {
        name: 'Regina Wisoky',
        role: 'Design Student',
        image: avatarImage11,
      },
    },
    {
      content:
        'I appreciated how the book emphasized setting clear goals, finding actual high-impact use cases, and building a culture that supports continuous learning and adaptation.',
      author: {
        name: 'Vernon Cummerata',
        role: 'UI Engineer',
        image: avatarImage8,
      },
    },
  ],
  [
    {
      content:
        'I couldn’t believe how fast Credera moved with AI tools compared to my own workflow. I’m designing LLMs more accurately in half the time with the shortcuts I learned from these videos.',
      author: {
        name: 'Steven Hackett',
        role: 'Bootcamp Instructor',
        image: avatarImage5,
      },
    },
    {
      content:
        'All I can say is wow — this is easily the best AI resource I’ve ever encountered.',
      author: {
        name: 'Leah Kiehn',
        role: 'Creative Director',
        image: avatarImage6,
      },
    },
  ],
]

function Testimonial({
  author,
  children,
}: {
  author: { name: string; role: string; image: ImageProps['src'] }
  children: React.ReactNode
}) {
  return (
    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-slate-50">
          <Image
            className="h-12 w-12 object-cover"
            src={author.image}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <div className="text-base/6 font-medium tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Some kind words from early customers...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          I worked with a small group of early access customers to make sure all
          of the content in the book was exactly what they needed. Hears what
          they had to say about the finished product.
        </p>
      </Container>
      <Expandable className="group mt-16">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
        >
          {testimonials
            .map((column) => column[0])
            .map((testimonial, testimonialIndex) => (
              <li key={testimonialIndex} className="lg:hidden">
                <Testimonial author={testimonial.author}>
                  {testimonial.content}
                </Testimonial>
              </li>
            ))}
          {testimonials.map((column, columnIndex) => (
            <li
              key={columnIndex}
              className="hidden group-data-expanded:list-item lg:list-item"
            >
              <ul role="list">
                <ExpandableItems>
                  {column.map((testimonial, testimonialIndex) => (
                    <li
                      key={testimonialIndex}
                      className={clsx(
                        testimonialIndex === 0 && 'hidden lg:list-item',
                        testimonialIndex === 1 && 'lg:mt-8',
                        testimonialIndex > 1 && 'mt-8',
                      )}
                    >
                      <Testimonial author={testimonial.author}>
                        {testimonial.content}
                      </Testimonial>
                    </li>
                  ))}
                </ExpandableItems>
              </ul>
            </li>
          ))}
        </ul>
        <ExpandableButton>Read more testimonials</ExpandableButton>
      </Expandable>
    </section>
  )
}
