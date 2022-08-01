import { serviceData } from '../../data';
const { linkTo , servicesPage } = serviceData;

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function ComponentServicesList({ title = 'Services we provide' , showTitle = true }) {
  return (
    <div className="py-6">

        { showTitle ? <h3 className="text-3xl py-5 font-bold text-center"> { title } </h3> : '' }

        <div className="p-6 rounded-lg overflow-hidden shadow-lg divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
            { servicesPage.map((action, actionIdx) => (
                <div>

                  <div className="mt-8">

                      <h3 className="text-lg font-medium">
                          <a href={action.href} className="focus:outline-none">
                              {/* Extend touch target to entire panel */}
                              <span className="absolute inset-0" aria-hidden="true" />
                              {action.title}
                          </a>
                      </h3>

                      <p className="mt-2 text-md text-gray-500">
                        Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et
                        quo et molestiae.
                      </p>

                      <ul className="mt-5">
                          { action.sub.map( ( subItem ) =>
                              <li className="mb-3 text-md text-gray-500"> { subItem } </li>
                          )}
                      </ul>
                      
                  </div>
                </div>
            ) ) }  
        </div>

        <h3 className="text-xl font-medium text-center pt-5">
            <a href={ linkTo } className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                View all of our services
            </a>
        </h3>

    </div> 
  )
}
