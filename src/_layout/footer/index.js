import { businessData , navigationLinks } from "../../data"
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">

        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          { navigationLinks.main.map( ( item ) => (
            <div key={item.name} className="px-5 py-2">
              <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <div className="mt-8 flex justify-center space-x-6">
          { navigationLinks.social.map( ( item ) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center space-x-6">
           <Image src='https://res.cloudinary.com/dezoqwmss/image/upload/v1660828278/paid_work/logo_full_saxzv5.jpg' width='170px' height='130px' />
        </div>    

        <p className="mt-8 text-center text-base text-gray-400">
            &copy; { businessData.licence }
        </p>
        <p className="mt-8 text-center text-base text-gray-400">
            { businessData.trademark }
        </p>

      </div>
    </footer>
  )
}
