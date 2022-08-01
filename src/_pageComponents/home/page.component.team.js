
const team = {
      name: 'Get to know the team',
      description:
       `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptat`,
      imageSrc: 'https://images.unsplash.com/photo-1606492775219-7babadc15e83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80',
      imageAlt: 'Printed photo of bag being tossed into the sky on top of grass.',
 }

  
export default function ComponentTeam() {
    return ( 
        <div className="max-w-7xl mx-auto sm:px-2 lg:px-4">
          <div className="max-w-2xl mx-auto px-4 lg:max-w-none">

             <div key={team.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center">

                    <div className="mt-6 lg:mt-0 lg:col-span-5 xl:col-span-4">
                      <h2 className="text-2xl font-bold text-gray-900">
                        {team.name}
                      </h2>
                      <p className="mt-2 text-md text-gray-500 leading-7">
                        {team.description}
                      </p>
                    </div>

                    <div className="flex-auto lg:col-span-7 xl:col-span-8">
                      <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                        <img src={team.imageSrc} alt={team.imageAlt} className="object-center object-cover" />
                      </div>
                    </div>
            </div>
            
          </div>
        </div> 
    )
}
  