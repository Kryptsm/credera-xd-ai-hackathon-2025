const posts = [
  {
    id: 1,
    title: 'Green Week 2025: A commitment to sustainability for Earth Day',
    href: 'https://www.credera.com/en-gb/insights/green-week-2025-a-commitment-to-sustainability-for-earth-day',
    description:
      'In celebration of Earth Day 2025, Credera hosted Green Week - a series of interactive, educational, and hands-on initiatives that brought sustainability to the forefront of our operations across all four UK offices. In this blog, we cover the various initiatives undertaken during Green Week to further promote sustainability across the firm.',
    imageUrl:
      'https://images.ctfassets.net/ywqnfgyb2dcs/43iTe7dzM3WeMyFhdwCESJ/5245f49885611cf04001d9eec5066afe/Image__1_.jpeg?w=1200&h=900&q=90&fm=webp',
    date: 'Apr 25, 2025',
    datetime: '2025-04-25',
    category: { title: 'Culture', href: '#' },
    author: {
      name: 'Sophia Bell',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.ctfassets.net/ywqnfgyb2dcs/tbLvlunMgEfmclqyvcMSA/3548ec93e28e5cd65c796f8fda591528/Sophia_Bell.jpg?w=150&h=150&q=90&fm=webp',
    },
  },
  {
    id: 2,
    title: 'Is fear of AI ‘going rogue’ slowing you down?',
    href: 'https://www.credera.com/en-gb/insights/is-fear-of-ai-going-rogue-slowing-you-down',
    description:
      'Worried AI might “go rogue”? You’re not alone. But with the proper guardrails, organisations can manage risk without stalling innovation. This article shows how layered controls work in practice and why fear doesn’t need to mean inaction.',
    imageUrl:
      'https://images.ctfassets.net/ywqnfgyb2dcs/5nnoa3ylWxMjMIQvT0dvQC/9a7cb49c93da8b444e1ccd414a3fcf2a/2025-04_AI_going_rogue.png?w=1200&h=630&q=90&fm=webp',
    date: 'Apr 14, 2025',
    datetime: '2025-04-14',
    category: { title: 'AI', href: '#' },
    author: {
      name: 'Richard Kernick',
      role: 'CFO',
      href: '#',
      imageUrl:
        'https://images.ctfassets.net/ywqnfgyb2dcs/6Z11UlTivKKZmVFpnzHC3s/e7bb1ae24c49e769cb0a6f4d6e85c636/Richard_Kernick.jpg?w=150&h=150&q=90&fm=webp',
    },
  },
  {
    id: 2,
    title:
      'How the UK’s £14 billion AI investment will transform public and private sectors',
    href: 'https://www.credera.com/en-gb/insights/how-the-uks-14-billion-ai-investment-will-transform-public-and-private-sectors',
    description:
      'Worried AI might “go rogue”? You’re not alone. But with the proper guardrails, organisations can manage risk without stalling innovation. This article shows how layered controls work in practice and why fear doesn’t need to mean inaction.',
    imageUrl:
      'https://images.ctfassets.net/ywqnfgyb2dcs/1gWHSxqrhzCHLbX3aJBhVH/5005d0171dd8ab5fdbfc055749182da3/UK_AI_news.jpg?w=1200&h=800&q=90&fm=webp',
    date: 'Jan 14, 2025',
    datetime: '2025-01-14',
    category: { title: 'AI', href: '#' },
    author: {
      name: 'Slavina Racheva',
      role: 'Partner',
      href: '#',
      imageUrl:
        'https://images.ctfassets.net/ywqnfgyb2dcs/4vbCITfs4XKETuiBWR5N2N/c8fe8d2cdba5383aa194f02a318b5d30/Slavina.jpeg?w=150&h=150&q=90&fm=webp',
    },
  },
  // More posts...
]

/**
 * Blog section component displaying a list of posts.
 *
 * @component
 * @returns {JSX.Element} Blog section with posts.
 *
 * @example
 * <CrederaBlog />
 */
export default function CrederaBlog() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Get insights from Credera professionals on a broad array of
            subjects.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  alt=""
                  src={post.imageUrl}
                  className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    alt=""
                    src={post.author.imageUrl}
                    className="size-10 rounded-full bg-gray-100"
                  />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
