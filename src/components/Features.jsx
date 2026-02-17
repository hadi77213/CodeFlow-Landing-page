import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { gradientDark, nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'
const features = [
    {
        title: "AI Code Completion",
        description: "An intelligent development tool that uses machine learning and natural language processing to predict and suggest code in real-time. ",
        codeSnippet: `const posts = [1, 2, 3, 4, 5, 6];
  {posts.map((id) => (
    <div key={id} className="aspect-square bg-gray-300 hover:bg-gray-400" />
  ))}
</div>`  ,
        imagePosition: "left"
    },
    {
        title: "Automated Testing",
        description: "The process of using specialized software tools and pre-written scripts to execute test cases on an application without human intervention. ",
        codeSnippet: `/* 1. FLEX: Centers the text perfectly inside the button. */
/* 2. ROUNDED: 'rounded-lg' matches the medium curve in your image. */
/* 3. TRANSITION: 'active:scale-95' adds a "non-stagnant" feel when clicked. */

<button className="flex items-center justify-center bg-gray-100 ">
  Edit Profile
</button>`,
        imagePosition: "right"
    },
    {
        title: "Smart Debugging",
        description: "the evolution of troubleshooting, where AI and advanced instrumentation move beyond manual print statements to predict, explain, and fix bugs automatically. ",
        codeSnippet: `/* 1. FLEX: Aligns items in a horizontal row. */
/* 2. GAP: Evenly spaces the stats so they don't "gang up" or overlap. */
/* 3. BOLD: Emphasizes the numbers to show progress and growth. */

<div className="flex gap-8 p-4 border-b border-gray-200">
  <div><span className="font-bold">12</span> posts</div>
  <div><span className="font-bold">450</span> followers</div>
  <div><span className="font-bold">320</span> following</div>
</div>`,
        imagePosition: "left"
    }
]
console.log(features)
const Features = () => {

    return (
        <section id='features' className=''>
            <div className='  flex flex-col'>
                <div className='flex flex-col justify-center  items-center my-3'>
                    <h2 className='text-white text-3xl sm:text-4xl md:text-5xl'> Your Complete</h2>
                    <h2 className='text-white text-3xl sm:text-4xl md:text-5xl'>Development</h2>
                    <h2 className='text-blue-300 text-3xl sm:text-4xl md:text-5xl'>WorkFlow</h2>
                </div>
                <div >
                    {features.map((feature, key) => (
                        <div className='bg-white/5 backdrop-blur-sm rounded-lg w-full ' >
                            <div key={key} className='flex flex-col justify-center mt-6 '>

                                <div className='flex flex-row m-3   '>
                                    <div className=' flex justify-start items-start ' >
                                        <span className='bg-red-700 inline-block rounded-full size-2 mx-1'></span>
                                        <span className='bg-yellow-500 inline-block rounded-full size-2 mx-1'></span>
                                        <span className='bg-green-600 inline-block rounded-full size-2 mx-1'></span>
                                    </div>
                                    <div className='text-gray-400 text-xs sm:text-sm mt-1 '>
                                        {feature.title}
                                    </div>
                                </div>

                                <div className='   text-gray-400 w-full h-30  '>
                                    <SyntaxHighlighter
                                        language="javascript"

                                        customStyle={{

                                            height: "100%"
                                        }}>
                                        {feature.codeSnippet}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Features