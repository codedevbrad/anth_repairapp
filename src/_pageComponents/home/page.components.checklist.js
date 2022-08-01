/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon , BanIcon } from '@heroicons/react/outline';

const featuresAgreed = [
  'Vitae in pulvinar odio id utobortis in inter.',
  'Sed sed id viverra viverra augue eget massa.',
  'Urna, gravida amet, a, integer venenatis.',
  'Lobortis sed pharetra amet vitae eleifend.',
  'Ullamcorper blandit a consequat donec elit aoreet.'
]

const featuresWontCharge = [ 
  'Dolor quo assumenda.',
  'Esse rerum distinctio maiores maiores.',
  'Eos enim officiis ratione.'
]


const List = ( { title , list , Icon } ) => {
    return (
        <>
            <p className="mt-2 text-2xl font-extrabold text-gray-900 py-4"> 
              { title } 
            </p>
            { list.map( ( feature, featureIdx ) =>
              featureIdx === 0 ? (
                <li key={feature} className="py-4 flex md:py-0 md:pb-4">
                  <Icon.Icon className={`flex-shrink-0 h-6 w-6  aria-hidden="true" ${ Icon.color } `} />
                  <span className="ml-3 text-base text-gray-500">
                     { feature }
                  </span>
                </li>
              ) : (
                <li key={feature} className="py-4 flex">
                   <Icon.Icon className={`flex-shrink-0 h-6 w-6  aria-hidden="true" ${ Icon.color } `} />
                  <span className="ml-3 text-base text-gray-500">
                     { feature }
                  </span>
                </li>
              )
            )}
        </>
    )
}


export default function ComponentChecklist ( ) {
  return (
      <div className="py-10 sm:py-12">
        <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
          <div>
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Everything you need</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">No Hidden costs </p>
            <p className="mt-4 text-lg text-gray-500">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla
              nec. Urna, sed a lectus elementum blandit et.
            </p>
          </div>

          <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
            <ul role="list" className="divide-y divide-gray-200">
                <List title='What we Provide' list={ featuresAgreed } Icon={ { Icon: CheckIcon , color: 'text-green-500' }} />
            </ul>

            <ul role="list" className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
                <List title="What we won't charge for" list={ featuresWontCharge } Icon={ { Icon: BanIcon , color: 'text-red-500' }} />
            </ul>
          </div>
        </div>
      </div>
  )
}
