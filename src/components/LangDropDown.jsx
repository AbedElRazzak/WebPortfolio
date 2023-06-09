/* eslint-disable no-unused-vars */
import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function LangDropDown(props) {

  

  


  return (
    <Menu as="div" className="relative text-left w-full ">
      <div className='w-full flex justify-end'>
        <div  className='w-20'>
        <Menu.Button className="hidden lg:flex invisible lg:visible w-full flex flex-row items-center justify-end ">
        <div className='flex flex-row  w-full  bg-primary-400 items-center px-3 py-1 rounded-md cursor-pointer '>
              <div className='text-secondary-50 p2 w-full'>{props.lang}</div>
              <div className='h-2 w-full flex justify-center items-center pl-5'>
                <div className='h-full bg-down-arrow w-3 bg-no-repeat bg-center bg-contain'></div>
              </div>
            </div>
        </Menu.Button>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-20 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="py-1 bg-secondary-50 drop-shadow-xl">
            <Menu.Item>
              
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => props.handleLangChange("En")}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  En
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => props.handleLangChange("Fr")}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Fr
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}