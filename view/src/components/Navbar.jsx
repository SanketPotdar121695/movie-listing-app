import { Disclosure } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import logo from '../assets/MovieGuru_logo.png';
import { NavLink, useLocation } from 'react-router-dom';

let navigation = [
  { name: 'Trending', href: '/trending' },
  { name: 'Movies', href: '/movies' },
  { name: 'TV Series', href: '/tv_series' }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure as='nav' className='bg-gray-700 sticky top-0 z-50'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between gap-8'>
              <div className='absolute inset-y-0 right-0 flex items-center justify-center md:hidden gap-3'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-600'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>

              <div className='flex flex-1 items-center justify-start sm:items-stretch'>
                <div className='flex flex-shrink-0 items-center'>
                  <NavLink to='/'>
                    <img
                      className='h-20 w-auto'
                      src={logo}
                      alt='MovieGuru_logo'
                    />
                  </NavLink>
                </div>

                <div className='hidden sm:ml-6 md:block m-auto'>
                  <div className='flex space-x-3 lg:space-x-4 justify-center items-center'>
                    {navigation.map((item) => (
                      <NavLink
                        to={item.href}
                        key={item.name}
                        className={classNames(
                          item.href === location.pathname
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white',
                          'rounded-md p-3 text-md font-medium'
                        )}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              <div className='relative rounded-md shadow-sm mx-14 xs:mr-24 md:mx-auto'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <button className='block h-full pr-2'>
                    <MagnifyingGlassIcon
                      className='block h-6 w-6 text-white/50 hover:text-white/100'
                      aria-hidden='true'
                    />
                  </button>
                </div>

                <input
                  type='text'
                  className='block w-full rounded-md border-0 outline-none bg-slate-800 py-2.5 pl-12 pr-28 text-white sm:text-sm sm:leading-6'
                  placeholder='Search movies/TV series'
                />

                <div className='absolute inset-y-0 right-2 flex items-center justify-center'>
                  <select className='h-full rounded-md border-0 border-l border-sky-600 rounded-l-none place-items-center outline-none bg-slate-800 py-0 px-2 text-white sm:text-sm'>
                    <option>Movies</option>
                    <option>TV Series</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='md:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <NavLink
                  to={item.href}
                  key={item.name}
                  className={classNames(
                    item.href === location.pathname
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  <Disclosure.Button>{item.name}</Disclosure.Button>
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
