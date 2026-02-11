export const codeExamples = {
    "App.jsx": ` App = () => {
 return (
   <div
       className='bg-slate-950 flex flex-col  h-screen'>
   <Navbar />
   <Hero />
   <Features />
   <Pricing />
   <Testimonials />
   <Footer />

         </div>
            )
        }`

    ,
 "Hero.jsx": `
  Hero = () =>{
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
         function handleMouseMove(e) {
                console.log(e.clientX, e.clientY)
            }
        window.addEventListener("mousemove", handleMouseMove)

        })



    }`,
    "Navbar.jsx": `const navbar = () => {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

    return (
        <nav className='w-full z-50 sticky top-0 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm border-b'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-14 sm:h-16 md:h-20  '>
                    <div className="flex items-center cursor-pointer space-x-1 " >
                        <div>
                            <img src="assets/react.svg" alt="logo" className="w-6 h-6 sm:w-8" />
                        </div>
                        <span className="text-lg sm:text-2xl   font-medium">
                            <span className="text-white">Fit</span>
                            <span className="text-blue-500">exercise</span>
                        </span>
                    </div>`
}