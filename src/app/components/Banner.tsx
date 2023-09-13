import bg from '../assets/background.svg'
import bgm from '../assets/background-mobile.svg'

interface Prop {
  isMobile: any
}


const Banner = ({isMobile} : Prop) => {

  return (<main className="w-screen bg-[#F7F8F9] 2xl:h-[48rem] lg:h-[35rem] h-[30rem] flex justify-center items-center">
    <img src={isMobile ? bgm.src : bg.src} className="lg:w-2/3 w-[90%] absolute z-10 bg-gray-50" />
    <section className="2xl:h-[45%] lg:h-[35%] h-[35%] lg:p-4 p-8 absolute z-20 flex flex-col justify-between items-center text-center">
      <h1 className="text-white 2xl:text-7xl lg:text-5xl text-[1.7rem] font-bold">Society of Hispanic<br></br>Professional Engineers</h1>
      <h2 className="text-slate-400 2xl:text-xl lg:text-xl text-sm font-medium ">Empowering UCF students to realize their fullest potential</h2>
      <a className="2xl:w-80 2xl:h-16 2xl:text-xl lg:w-52 lg:h-12 w-44 h-10 px-7 py-4 bg-yellow-400 hover:bg-yellow-500 rounded-md shadow justify-center items-center inline-flex text-black lg:text-base text-xs font-medium" href="https://form.jotform.com/70387424224151" target="_blank">Become a Member</a>
      <p className="text-slate-400 text-sm 2xl:text-2xl font-medium ">We are familia!</p>
    </section>
  </main>
  )
}

export default Banner