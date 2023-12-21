import React from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import {navLinks} from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-4 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
            <img 
            src={headerLogo}
            alt="Logo" 
            width={130}
            height={29}
            /> 
            </a>
            <ul 
            id='menu'
            className='flex-1 flex justify-center items-center gap-16 max-lg:hidden '>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray hover:text-[#FF6452] transition ease-in-out duration-700 '
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
                <li>
                <a href="#sign-in" class="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group md:my-0">
                <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                </span>
                <span class="relative text-white">Sign in/Explore now</span>
                </a>
                </li>
            </ul>
            <div className='hidden max-lg:block'>
                <button onClick={() => setNavbarOpen(!navbarOpen)}>
                    <img 
                    src={hamburger}
                    alt="Hamburger"
                    width={25} 
                    height={25}
                    />
                </button>
            </div>
        </nav>
        
    </header>
  )
}

export default Nav;