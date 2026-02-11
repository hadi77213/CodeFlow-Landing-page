import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const navbar = () => {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

    return (
        <nav className='w-full z-50 stcky top-0 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm border-b'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-14 sm:h-16 md:h-20  '>
                    <div className="flex items-center cursor-pointer space-x-1 " >
                        <div>
                            <img src="assets/react.svg" alt="logo" className="w-6 h-6 sm:w-8" />
                        </div>
                        <span className="text-lg sm:text-2xl   font-medium">
                            <span className="text-white">Code</span>
                            <span className="text-blue-500">Flow</span>
                        </span>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <a href="#features" className="text-gray-400 hover:text-white text-sm lg:text-base">
                            Features
                        </a>
                        <a href="# pricing" className="text-gray-400 hover:text-white text-sm lg:text-base">
                            Pricing
                        </a>
                        <a href="# testimonial" className="text-gray-400 hover:text-white text-sm lg:text-base">
                            Testimonials
                        </a>

                    </div>

                    <button
                        className="md:hidden  text-gray-400 hover:text-white cursor-pointer"
                        onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
                        {
                            mobileMenuIsOpen ? (
                                <IoMdClose className="sm:w-6 sm: h-6" />) :
                                (<IoIosMenu className=" sm:w-6 sm: h-6" />)

                        }
                    </button>

                </div>
            </div>
            {mobileMenuIsOpen && <div className="md:hidden bg-slate-950/95 border-t border-t-slate-800 slide-In-From-Top" >
                <div className="flex flex-col items-center text-white gap-2 py-6  ">

                    <a

                        href="#features" onClick={() => setMobileMenuIsOpen(false)}
                        className="text-gray-400 hover:text-white text-sm lg:text-base">
                        Features

                    </a>
                    <a

                        href="# pricing" onClick={() => setMobileMenuIsOpen(false)}
                        className="text-gray-400 hover:text-white text-sm lg:text-base
                       ">
                        Pricing
                    </a>
                    <a


                        href="#testimonial" onClick={() => setMobileMenuIsOpen(false)}
                        className="text-gray-400 hover:text-white text-sm lg:text-base">

                        Testimonials
                    </a>

                </div>
            </div>}
        </nav>
    )
}

export default navbar
