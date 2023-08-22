import { useMediaQuery } from 'react-responsive'
import bg from '../assets/background.svg'
import bgm from '../assets/background-mobile.svg'


const Banner = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  return (<main className="bg-[#F7F8F9] w-screen lg:h-[35rem] h-[30rem] flex justify-center items-center">
    <img src={isMobile ? bgm.src : bg.src} className="lg:w-2/3 w-[90%] absolute z-10 bg-gray-50" />
    <section className="lg:h-[35%] h-[30%] lg:p-4 p-8 absolute z-20 flex flex-col justify-between items-center text-center">
      <h1 className="text-white lg:text-5xl text-[1.7rem] font-bold">Society of Hispanic<br></br>Professional Engineers</h1>
      <h2 className="text-slate-400 lg:text-xl text-sm font-medium ">Empowering UCF students to realize their fullest potential</h2>
      <a className="lg:w-52 lg:h-12 w-44 h-9 px-7 py-4 bg-yellow-400 rounded-md shadow justify-center items-center inline-flex text-black lg:text-base text-xs font-medium" href="https://form.jotform.com/70387424224151" target="_blank">Become a Member</a>
      <p className="text-slate-400 text-sm font-medium ">We are familia!</p>
    </section>
  </main>
  )
}

export default Banner