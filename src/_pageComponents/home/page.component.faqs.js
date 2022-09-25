import { Disclosure } from '@headlessui/react'; 

const faqs = [
    { 
      question: "Do you provide free estimates",
      answer:
        `We provide free insurance quotations and all installations come with a manufacturer’s warranty. 
        Naturally, we are fully insured and are happy to offer free estimates and advice to all customers 
        whether the job is as large as a new build or as small as a single bathroom window.`
    } , 
    {
      question: "would you visit my residence to make an estiate / quote free of charge" , 
      answer: 
        `As part of our service, we offer a free site visit to your home or property along 
        with a quick no fuss and highly competitive quotation. If the problem isn’t an 
        emergency we’ll arrange an appointment slot at a time convenient for you.`
    }
]
   

export default function ComponentHomeFAQS () {
  return (
    <div className="bg-gray-50">
      
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">

            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Experties
            </h2>

            <div className="flex my-5">
                  <p className="mr-5 leading-7">
                          We pride ourselves on providing an exceptional, reliable, cost effective repair and installation service for 
                          domestic and commercial customers across Bristol and Bath,
                          Our experienced skilled technicians can repair all makes of windows, doors and conservatories and most if not all repairs 
                          can even be carried out on the spot without needing to replace the whole window or door.
                  </p>

                  <p className='leading-7'> 
                          Our repair vans are stocked with hundreds of fittings and we have a chain of well trusted and high quality suppliers providing an efficient service 
                          enabling us to complete your repair work promptly and efficiently anywhere in Bristol and Bath 
                  </p>
            </div> 

            <div className="mt-16 mx-auto max-w-3xl divide-y-2 divide-gray-200">
                <dl className="mt-6 space-y-6 divide-y divide-gray-200">

                  <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                     Frequently asked questions
                  </h2>

                  {faqs.map((faq) => (
                    <Disclosure as="div" key={faq.question} className="pt-6">
                      {({ open }) => (
                        <>
                          <dt className="text-lg">
                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                              <span className="font-medium text-gray-900">{faq.question} ? </span>  
                              <span className="ml-6 flex h-7 items-center"> 
                              </span>
                            </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel as="dd" className="mt-2 pr-12">
                            <p className="text-base text-gray-500">{faq.answer}</p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
            </div>
      </div>
    </div>
  )
}