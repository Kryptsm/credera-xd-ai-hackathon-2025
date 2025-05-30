import Image from 'next/image'

import { Container } from '@/components/Container/Container'
import tshirtImage from '@/images/products/tshirt.png'
import travelMugImage from '@/images/products/travel-mug.png'
import notebookImage from '@/images/products/notebook.png'
import pajamasImage from '@/images/products/pajamas.png'

const products = [
	{
		title: 'Credera Classic T-Shirt',
		description:
			'Show your Credera pride with this comfortable, high-quality cotton t-shirt featuring the iconic Credera logo.',
		image: tshirtImage,
		price: '$19.99',
	},
	{
		title: 'Credera Stainless Steel Travel Mug',
		description:
			'Keep your drinks hot or cold on the go with this sleek, insulated stainless steel mug, branded with the Credera emblem.',
		image: travelMugImage,
		price: '$19.99',
	},
	{
		title: 'Credera Soft-Touch Notebook',
		description:
			'Jot down ideas in style with this premium, soft-touch notebook, complete with embossed Credera branding and an elastic closure.',
		image: notebookImage,
		price: '$19.99',
	},
	{
		title: 'Cozy Credera Pajama Set',
		description:
			'Relax in style with this ultra-soft Credera pajama set, featuring a matching long-sleeve top and pants adorned with the Credera logo—perfect for repping your team spirit even on your days off.',
		image: pajamasImage,
		price: '$45.99',
	},
]

/**
 * Product card group section for displaying Credera products.
 *
 * @component
 * @returns {JSX.Element} Product card group section.
 *
 * @example
 * <ProductCardGroup />
 */
export function ProductCardGroup() {
	return (
		<section
			id="product-card-group"
			className="scroll-mt-14 py-16 pt-0 sm:scroll-mt-32 sm:py-20 lg:py-32 lg:pt-0"
		>
			<Container size="lg">
				<ol
					role="list"
					className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
				>
					{products.map((product) => (
						<li key={product.title} className="[counter-increment:video]">
							<div
								className="relative flex h-44 items-center justify-center px-6 shadow-lg"
								style={{
									backgroundImage:
										'conic-gradient(from -49.8deg at 50% 50%, #E55F4C 0deg, #496986 59.07deg, #4E51FF 185.61deg, #496986 284.23deg, #E55F4C 329.41deg, #E55F4C 360deg)',
								}}
							>
								<div className="flex overflow-hidden shadow-sm">
									<Image src={product.image} alt="" unoptimized />
								</div>
							</div>
							<h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
								{product.title}
							</h3>
							<p className="mt-2 text-sm text-slate-600">
								{product.description}
							</p>
							<p className="mt-2 text-sm text-slate-900">
								{product.price}
							</p>
						</li>
					))}
				</ol>
			</Container>
		</section>
	)
}
