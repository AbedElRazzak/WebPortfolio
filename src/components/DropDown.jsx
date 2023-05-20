import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

        {/* <div className=' h-16 w-64 flex flex-row place-content-between rounded-3xl items-center justify-start bg-secondary-50 drop-shadow-5xl cursor-pointer'> */}
          {/* <div className='p1 text-primary-400  min-w-fit rounded-[40px] pl-6'>Web projects</div>
          <div className='h-full w-full  flex items-center justify-end rounded-3xl '> */}
            {/* <div className='bg-down-arrow-black  bg-no-repeat bg-contain bg-center h-3 w-2 pr-10 '></div> */}
            {/* <div className='pr-5'>
              <img src='https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/down-arrow-black.png'/>
            </div>
          </div>
        </div> */}

        // h-16 w-64 flex flex-row place-content-between rounded-3xl items-center justify-start bg-secondary-50 drop-shadow-5xl cursor-pointer

export default function DropDown() {


  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className=''>
        <Menu.Button className="h-16 w-64 flex flex-row place-content-between rounded-3xl items-center justify-start bg-secondary-50 drop-shadow-5xl cursor-pointer">
          {/* WebApps */}
          {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
          {/* <img src='https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/down-arrow-black.png'/> */}
                    <div className='p1 text-primary-400  min-w-fit rounded-[40px] pl-6'>WebApps</div>
          <div className='h-full w-full  flex items-center justify-end rounded-3xl '>
            <div className='bg-down-arrow-black  bg-no-repeat bg-contain bg-center h-3 w-2 pr-10 '></div>
        <div className='pr-5'>
              <img src='https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/down-arrow-black.png'/>
            </div>
          </div>
        </Menu.Button>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="py-1 bg-secondary-50 drop-shadow-5xl">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  WebApps
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Designs
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Other
                </a>
              )}
            </Menu.Item>
            {/* <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}