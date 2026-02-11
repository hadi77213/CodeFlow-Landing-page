import React from 'react'
const features = [
    {
        title: "AI Code Completion",
        discription: "An intelligent development tool that uses machine learning and natural language processing to predict and suggest code in real-time. ",
        image: "code-completion ",
        imagePosition: "left"
    },
    {
        title: "Automated Testing",
        discription: "The process of using specialized software tools and pre-written scripts to execute test cases on an application without human intervention. ",
        image: "Testing ",
        imagePosition: "right"
    },
    {
        title: "Smart Debugging",
        discription: "the evolution of troubleshooting, where AI and advanced instrumentation move beyond manual print statements to predict, explain, and fix bugs automatically. ",
        image: "debugging",
        imagePosition: "left"
    }
]
const Features = () => {

    return (
        <section id='features' className=''>
            <div className=' max-w-6xl '>
                <div className='flex flex-col justify-center  items-center my-3 delay-100'>
                    <h2 className='text-white text-3xl sm:text-4xl md:text-5xl'> Your Complete</h2>
                    <h2 className='text-white text-3xl sm:text-4xl md:text-5xl'>Development</h2>
                    <h2 className='text-blue-300 text-3xl sm:text-4xl md:text-5xl'>WorkFlow</h2>
                </div>
                <div >
                    {features.map((feature, key) => (
                        <div key={key}>
                            <div>
                                <div>
                                    <span className='bg-red-700 inline-block rounded-full size-2 mx-1'></span>
                                    <span className='bg-yellow-500 inline-block rounded-full size-2 mx-1'></span>
                                    <span className='bg-green-600 inline-block rounded-full size-2 mx-1'></span>

                                </div>
                                <span>
                                    {features.title} 
                                </span>

                            </div> 
                        </div>
                    )
                    )}
                </div>
            </div>
        </section >
    )
}

export default Features