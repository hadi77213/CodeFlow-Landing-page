import React, { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { codeExamples } from '../codeExample';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
const Hero = () => {
    //     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    //     useEffect(() => {
    //         function handleMouseMove(e) {
    //             console.log(e.clientX, e.clientY)
    //         }
    //         window.addEventListener("mousemove", handleMouseMove)

    //     })
    const [showAppCode, setShowAppCode] = useState()
    const [activeTab, setActiveTab] = useState("App.jsx")
    return (
        <section className=' md:flex items-center justify-between md:my-10 mx-7'>
            <div className='flex flex-col justify-center items-center py-4 '>
                <div className='px-2 py-1 text-gray-600 rounded-full bg-slate-900 flex items-center text-xs sm:text-sm md:text-md delay-100'> Introducing codeFlow AI 2.0

                </div>
                <div className='flex flex-col justify-center  items-start my-3 delay-100'>
                    <div className='text-white text-3xl sm:text-4xl md:text-5xl'> Code Faster</div>
                    <div className='text-blue-300 text-3xl sm:text-4xl md:text-5xl'>Build Better</div>
                    <div className='text-white text-3xl sm:text-4xl md:text-5xl'>with CodeFlow AI</div>
                </div>
                <div className='text-gray-400 xs:text-xs delay-100'>Jupiter,Satern and earth</div>
                <div className='flex flex-col delay-100 md:flex-row  w-full md:w-120 my-4 mt-8  items-center'>
                    <button className='mx-2 text-sm md:text-md bg-blue-400 rounded-md h-10 w-115 '> Start Coding Free  </button>
                    <button className=' mx-2 text-sm md:text-md bg-gray-600 rounded-md h-10 mt-1 w-115 '> Watch Demo</button>
                </div>
            </div>

            <div className='flex justify-center items-center  '>
                <div className=' my-5 rounded-lg mx-2 flex justify-center items-center bg-white/5 backdrop-blur-xl border border-white/10 w-100 md:w-115 lg:w-130 lg:80 md:h-90'>

                    <div className='my-5 rounded-lg bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-md  h-67.5 w-76.5 sm:w-80 border border-white/10'>

                        <div className=' bg-white/5 py-1 my-2  border border-white/10 backdrop-blur-sm flex justify-between '>
                            <div className=''>
                                <span className='bg-red-700 inline-block rounded-full size-2 mx-1'></span>
                                <span className='bg-yellow-500 inline-block rounded-full size-2 mx-1'></span>
                                <span className='bg-green-600 inline-block rounded-full size-2 mx-1'></span>
                                <span className='text-sm '>codeFlow AI</span>
                            </div>
                        </div>

                        <div className='flex gap-1 m-1' >
                            <button
                                onClick={() => setActiveTab("App.jsx")}
                                className={`bg-white/5 hover:bg-white/70 p-2 rounded-sm
                                
                                    ${activeTab === "App.jsx" ?
                                        "bg-blue-500/30 text-white border-blue-400/20"
                                        : "bg-white/5 text-gray-300 border-white/10 "} `}>
                                App.jsx </button>
                            <button
                                onClick={() => setActiveTab("Hero.jsx")} className={`bg-white/5 hover:bg-white/70 p-2 rounded-sm
                                ${activeTab === "Hero.jsx" ?
                                        "bg-blue-500/30 text-white border-blue-400/20"
                                        : "bg-white/5 text-gray-300 border-white/10 "} `}>Hero.Jsx </button>
                            <button
                                onClick={() => setActiveTab("Navbar.jsx")}
                                className={`bg-white/5 hover:bg-white/70 p-2 rounded-sm
                                ${activeTab === "Navbar.jsx" ?
                                        "bg-blue-500/30 text-white border-blue-400/20"
                                        : "bg-white/5 text-gray-300 border-white/10 "} `}>Navbar.Jsx</button>

                        </div>
                        <div className='overflow-auto h-49  '>
                            <SyntaxHighlighter
                                language="javascript"
                            >
                                {codeExamples[activeTab]}
                            </SyntaxHighlighter>
                        </div>

                        <div className='flex justify-center items-center mt-3'>

                        </div>
                    </div>
                </div>


            </div>

        </section >)
}

export default Hero