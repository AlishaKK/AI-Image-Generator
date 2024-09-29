"use client"

import Link from 'next/link';
import { useState } from 'react';
import { ModeToggle } from '../ui/toggle';
import Image from 'next/image';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gradient-to-r  from-blue-950 to-blue-400 mt-4 rounded-sm shadow-md fixed top-0 w-full z-10">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-lg font-bold text-white hover:text-gray-200 flex items-center">
                          
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-8 w-8 mr-2">
                                <circle cx="50" cy="50" r="40" fill="blue">
                                    <animate attributeName="fill" from="blue" to="red" dur="1s" begin="mouseover" repeatCount="indefinite" />
                                </circle>
                            </svg>
                            ArtifyAI
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="text-white mt-4 hover:text-gray-200">Home</Link>
                        <Link href="/about" className="text-white mt-4 hover:text-gray-200">About</Link>
                        <Link href="/services" className="text-white mt-4 hover:text-gray-200">Services</Link>
                        <Link href="/contact" className="text-white mt-4 hover:text-gray-200">Contact</Link>
                       <div className='mt-2.5 mr-2 w-8 h-8'><ModeToggle/></div> 
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button onClick={toggleMenu} className="text-white hover:text-gray-200 focus:outline-none">
                            {isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-blue-700 text-white">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block text-gray-300 hover:text-gray-200">Home</Link>
                        <Link href="/about" className="block text-gray-300 hover:text-gray-200">About</Link>
                        <Link href="/services" className="block text-gray-300 hover:text-gray-200">Services</Link>
                        <Link href="/contact" className="block text-gray-300 hover:text-gray-200">Contact</Link>
                     
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
