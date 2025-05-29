import { Author } from '@/components/Author'
import CrederaBlog from '@/components/CrederaBlog'
import CrederaHeader from '@/components/CrederaHeader'
import CrederaStore from '@/components/CrederaStore'
import CrederaTeam from '@/components/CrederaTeam'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <CrederaHeader />
      <CrederaBlog />
      <CrederaTeam />
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Jake Carter',
          role: 'Partner',
          image: avatarImage1,
        }}
      >
        <p>
          Worth a read! I've worked with both Vincent and Jason for years and
          can 100% confirm they know what they're talking about when it comes to
          enterprise-scale AI.
        </p>
      </Testimonial>
      <Screencasts />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Daniel Moreno',
          role: 'Amazon Review',
          image: avatarImage2,
        }}
      >
        <p>
          I love the premise of this book. Many people in the past were afraid
          to include computers in their daily work, and this turned out to be a
          complete success. Those companies that refused to do so ended up not
          so well. The same thing will happen with AI.
        </p>
      </Testimonial>
      <Resources />
      <FreeChapters />
      <Pricing />
      <Testimonials />
      <Author />
      <CrederaStore />
      <Footer />
    </>
  )
}
