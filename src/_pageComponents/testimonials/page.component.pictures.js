
const images = [
        {
            job: 'Window repair',
         source: 'https://res.cloudinary.com/dezoqwmss/image/upload/v1660388567/paid_work/73fe6756-ba78-462b-9e90-a4c8f85e41c7_isstbt.jpg',
        },
        {
            job: 'Window repair',
         source: 'https://res.cloudinary.com/dezoqwmss/image/upload/v1660388572/paid_work/95e7b2ec-233f-4f85-87f4-2218cb58ee5d_aljcaw.jpg',
        },
        {
            job: 'Window repair',
         source: 'https://res.cloudinary.com/dezoqwmss/image/upload/v1660388536/paid_work/25c8baed-e3d3-4cc2-8d07-358659751432_ucyssh.jpg',
        },
        {
            job: 'Window repair',
         source: 'https://res.cloudinary.com/dezoqwmss/image/upload/v1660388555/paid_work/3097ed6c-f67a-4ef3-b588-08146394d84c_vzjlme.jpg',
        },
        {
            job: 'Window repair',
         source: 'https://res.cloudinary.com/dezoqwmss/image/upload/v1660388542/paid_work/b547a221-cf17-40c4-a462-c6d713c2ffe2_lmfxfd.jpg',
        } , 
        {
           job: '' , 
        source: 'https://res.cloudinary.com/dezoqwmss/image/upload/v1660388560/paid_work/5ea402c5-0a68-4fa9-a9ea-c8b8f1410117_zbdm5o.jpg'
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

                        {/* <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                            { image.job }
                        </p>  */}
                    </li>

                ))}
        </ul>
    </div>
     
    )
}
  