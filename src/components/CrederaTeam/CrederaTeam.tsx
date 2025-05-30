const people = [
  {
    name: 'Justin Bell',
    role: 'Global CEO & President',
    imageUrl:
      'https://images.ctfassets.net/76f8cs5bg9si/yRhtv5W9tzd9nyaEIWRO4/f076a8807d46602d249c5dd3add54ef0/JB_square.jpg?w=800&h=800&q=90&fm=webp',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Kevin Erickson',
    role: 'CEO, North America',
    imageUrl:
      'https://images.ctfassets.net/76f8cs5bg9si/OnukyVlikPXaI4AaXwRvK/cbadfdb75ab658d1c9cb16cb6f9653a2/KME_2025_Headshot.png?w=800&h=814&q=90&fm=webp',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Chris Dean',
    role: 'Global CEO, Consulting',
    imageUrl:
      'https://images.ctfassets.net/76f8cs5bg9si/7M5vhPAYfge4StMa8dC7fk/9aa7dc7b61cff312e43a35f02dff50a9/Chris_Dean_square.jpg?w=800&h=800&q=90&fm=webp',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Kevin McDonald',
    role: 'CEO, Asia Pacific',
    imageUrl:
      'https://images.ctfassets.net/76f8cs5bg9si/1hLTCeYow3AeyeA2QDJXv6/58117ae0bddc8785b6d03c1c4dc39c20/Kevin_McDonald_square.jpg?w=800&h=800&q=90&fm=webp',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Donal Smith',
    role: 'CEO, UK',
    imageUrl:
      'https://images.ctfassets.net/76f8cs5bg9si/4CqijLaP1ajU63oDjokNwY/7d8b74c62638a9ec69acfae80617dedd/Donal_Smith.jpeg?w=800&h=800&q=90&fm=webp',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Thomas Vogt',
    role: 'CEO, Germany',
    imageUrl:
      'https://images.ctfassets.net/76f8cs5bg9si/5zxC41osWMxz0cWKCIgRDd/9448abee7d059d990bf88773b148ca1e/Thomas_Vogt_Credera.jpg?w=628&h=628&q=90&fm=webp',
    xUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

export default function CrederaTeam() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Our team
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                alt=""
                src={person.imageUrl}
                className="aspect-3/2 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-base/7 text-gray-600">{person.role}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a
                    href={person.xUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">X</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="size-5"
                    >
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="size-5"
                    >
                      <path
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
