import { Author } from '@/components/Author'
import CrederaBlog from '@/components/CrederaBlog'
import CrederaHeader from '@/components/CrederaHeader'
import CrederaStore from '@/components/CrederaStore'
import CrederaTeam from '@/components/CrederaTeam'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Headline } from '@/components/Headline'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { ProductCardGroup } from '@/components/ProductCardGroup'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <NavBar />
      <CrederaHeader
        title="Credera Merch Marketplace"
        subtitle="Welcome to the Credera Merch Marketplace, your one-stop destination for exclusive Credera-branded gear and merchandise! Whether you’re looking to showcase your company pride or searching for the perfect gift for a fellow team member, we’ve got you covered with a curated selection of high-quality apparel, accessories, office supplies, and more. Explore our latest collections, enjoy easy online ordering, and show off your Credera spirit everywhere you go. Shop with us today and represent Credera in style!"
      />

      <Headline
        tagline="Featured"
        headline="Product of the Month"
        id="featured-product"
        number="1"
      />
      <CrederaStore />

      <Headline
        tagline="Featured"
        headline="The Intelligent Enterprise"
        id="intelligent-enterprise"
        number="2"
      />
      <Hero />
      <Introduction />
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
      <FreeChapters />
      <Testimonials />
      <Author />

      <Headline
        tagline="More"
        headline="Other Products"
        id="other-products"
        number="3"
      />
      <ProductCardGroup />

      <Headline
        tagline="Subscriptions"
        headline="Get Credera Swag Delivered Monthly"
        id="subscriptions"
        number="4"
      />
      <Pricing />

      <Headline
        tagline="Credera"
        headline="Learn More About Credera"
        id="learn-more"
        number="5"
      />
      <CrederaBlog />
      <CrederaTeam />

      <Footer />
    </>
  )
}
