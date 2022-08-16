
/* This example requires Tailwind CSS v2.0+ */
import React , { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

import { getURL } from '../../utils/getSiteURL';

import { businessData } from '../../data';
 

const people = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' },
  { id: 4, name: 'd' },
  { id: 5, name: 'e' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function InputSelect() {
  const [selected, setSelected] = useState(people[3])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700"> Job request type </Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}


// const encode = (data) => {
//   return Object.keys(data)
//       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//       .join("&");
// }


class ContactForm extends React.Component {

  constructor(props) {
      super(props);
      this.state = { 
        name: "", email: "", message: "" , phone: "" , foundBy: ""
      };
  }


  clearFORM = e => this.setState({ name: "", email: "", message: "" , phone: "" , foundBy: "" });
  

  handleSubmit = e => {

    console.log( 'url: ' , `/api/email`  );

    fetch( `https://jolly-pixie-7a2217.netlify.app/api/email` , {
      method: "POST" ,
      body: JSON.stringify( this.state )
    })
    .then( ( res ) => {
      if ( !res.ok ) {  
        console.log( res );
        throw new Error( "Not 2xx response", { cause: res } );
      }
      else {
        return res;
      }
    })
    .then( ( response ) => response.json( ) )
    .then(( data ) => {
        console.log( data );
        if ( data.code == 200 ) {
            alert(`your email has been sent. we'll get right back to you.`);
        } else {
            alert(`your email could not be sent.`);
        }
    }) 
    .catch(error => {
         console.log('error' , error );
    });

    e.preventDefault(); 
    this.clearFORM();
  };

  handleChange = e => this.setState({ [ e.target.name ] : e.target.value });

  render() {

    const { name , email , message , phone , foundBy } = this.state;
     

    return (
       <form name="contact" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Full name
                </label>
                <div className="mt-1">
                  <input
                    value={ name } onChange={this.handleChange}
                    required
                    type="text"
                    name="name"
                    id="first-name"
                    autoComplete="given-name"
                    className="p-4 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div> 
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <div className="mt-1">
                  <input
                    value={ email } onChange={this.handleChange}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="p-4 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div> 
              
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Your Phone number
                  </label>
                </div>

                <div className="mt-1">
                  <input
                    value={ phone } onChange={this.handleChange}
                    required
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    aria-describedby="phone-description"
                    className="p-4 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    How can we help you?
                  </label>
                  <span id="how-can-we-help-description" className="text-sm text-gray-500">
                    Max. 500 characters
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    value={message} onChange={this.handleChange}
                    required
                    id="how-can-we-help"
                    name="message"
                    aria-describedby="how-can-we-help-description"
                    rows={4}
                    className="p-4 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="foundBy" className="block text-sm font-medium text-gray-700">
                  How did you hear about us?
                </label>
                <div className="mt-1">
                  <input
                    value={ foundBy } onChange={this.handleChange}
                    type="text"
                    name="foundBy"
                    id="foundBy"
                    className="p-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="text-right sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
      </form>
    );
  }
}

export default function ComponentForm( ) {
    return (
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://res.cloudinary.com/dezoqwmss/image/upload/v1660388549/paid_work/22030957-f3f6-4d4c-8941-a90d22afb2f9_jkfnv2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl"> Get in contact </h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                Send us a message using our form or phone us on 
                 <span className="text-blue-600 font-bold"> { businessData.contact } </span>. 
                 We’d love to hear from you. 
              </p>
              
              <ContactForm />

            </div>
          </div>
        </div>
      </div>
    )
  }
  