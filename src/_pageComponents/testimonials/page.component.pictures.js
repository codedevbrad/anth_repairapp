
const images = [
        {
            job: 'Window repair',
         source: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
        {
            job: 'Window repair',
         source: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
        {
            job: 'Window repair',
         source: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
        {
            job: 'Window repair',
         source: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
        {
            job: 'Window repair',
         source: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        }
]
  

export default function ComponentPictures( ) {
    return (
    <div className="py-6">

        <h1 className="font-bold text-lg pb-5"> Past client Pictures </h1>

        <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">

                { images.map( ( image ) => (

                    <li key={ image.source } className="relative">

                        <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 overflow-hidden">
                            <img src={ image.source } alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                            <button type="button" className="absolute inset-0 focus:outline-none">
                                <span className="sr-only">
                                    View details for { image.title }
                                </span>
                            </button>
                        </div>

                        <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                            { image.job }
                        </p> 
                    </li>

                ))}
        </ul>
    </div>
     
    )
}
  