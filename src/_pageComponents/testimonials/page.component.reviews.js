/* This example requires Tailwind CSS v2.0+ */
import { StarIcon } from '@heroicons/react/solid'

const reviews = [
  {
    id: 1,
    title: 'Amazing work. Love the new tree',
    rating: 5,
    content: `
      <p>I've searched my entire life for a tree that reflects my outlook on life. Scientists said it couldn't be done, but when I look at this tree, I see white light bouncing right back into my eyes. Incredible!</p>
    `,
    author: 'Mark Edwards',
    avatarSrc:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    title: 'Amazing work. Love the new tree',
    rating: 5,
    content: `
      <p>I've searched my entire life for a tree that reflects my outlook on life. Scientists said it couldn't be done, but when I look at this tree, I see white light bouncing right back into my eyes. Incredible!</p>
    `,
    author: 'Mark Edwards',
    avatarSrc:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    title: 'Amazing work. Love the new tree',
    rating: 5,
    content: `
      <p>I've searched my entire life for a tree that reflects my outlook on life. Scientists said it couldn't be done, but when I look at this tree, I see white light bouncing right back into my eyes. Incredible!</p>
    `,
    author: 'Mark Edwards',
    avatarSrc:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function ComponentReviews ( ) {
  return (
      <div className="py-4">

        <h1 className="font-bold text-lg pb-5"> Past client Reviews </h1>

        <h2 id="reviews-heading" className="sr-only">
          Reviews
        </h2>

        <div className="space-y-10">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col sm:flex-row">
              <div className="mt-6 order-2 sm:mt-0 sm:ml-16">
                <h3 className="text-sm font-medium text-gray-900">{review.title}</h3>
                <p className="sr-only">{review.rating} out of 5 stars</p>

                <div
                  className="mt-3 space-y-6 text-sm text-gray-600"
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
              </div>

              <div className="order-1 flex items-center sm:flex-col sm:items-start">
                <img src={review.avatarSrc} alt={`${review.author}.`} className="h-12 w-12 rounded-full" />

                <div className="ml-4 sm:ml-0 sm:mt-4">
                  <p className="text-sm font-medium text-gray-900">{review.author}</p>
                  <div className="mt-2 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.rating > rating ? 'text-gray-900' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}
