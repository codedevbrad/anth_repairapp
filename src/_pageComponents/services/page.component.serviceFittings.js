import { serviceData } from '../../data';
const { work } = serviceData;

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ComponentServiceFittings({ title = 'set title' , showTitle = true }) {
  return (
    <div className="p-6">
        { showTitle ? <h3 className="text-3xl py-5 font-bold text-center"> { title } </h3> : '' }
        <div className="p-7 rounded-lg overflow-hidden shadow-lg divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                
                  <div>
                        <p className="mt-2 text-md text-gray-500">
                            {/* Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et
                            quo et molestiae. */}
                        </p>
                    </div>

                    <div>
                        <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 overflow-hidden">
                              <img src={ work.images.fitting } alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                          </div>
                    </div>
        </div>
    </div> 
  )
}
