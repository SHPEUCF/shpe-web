import bg from "../assets/join.svg"
import bgm from "../assets/join-mobile.svg"
import styles from './Join.module.css'

interface Prop {
  isMobile: any
}

const Join = ({isMobile} : Prop) => {
  return (<div className={styles.split}>
    <section className="rounded-md lg:w-[80%] w-[90%] lg:h-[22rem] h-[18rem] absolute z-10 bg-[#2A3342] text-white flex justify-around items-center">
      <article className="2xl:w-[30rem] lg:w-[26rem] w-[12rem]">
        <h3 className="2xl:text-6xl lg:text-4xl text-2xl font-bold pb-4">Join our Familia!</h3>
        <p className="2xl:text-2xl text-slate-400 lg:text-xl text-sm font-medium" >You don&apos;t need to be hispanic to be part of this change</p>
      </article>
      <article className="2xl:w-[40%] w-[30%] flex justify-between">
        <a href="https://form.jotform.com/70387424224151" target="_blank" className="2xl:w-60 2xl:h-20 2xl:text-2xl lg:w-40 lg:h-14 w-24 h-10 lg:px-7 py-4 bg-yellow-400 rounded-md shadow justify-center items-center lg:gap-2 inline-flex text-black lg:text-lg text-sm font-medium">Get Started</a>
        { isMobile ? <></> : 
        <a href="#events" className="2xl:w-60 2xl:h-20 2xl:text-2xl w-40 h-14 px-7 py-4 bg-white rounded-md shadow border border-gray-300 justify-center items-center gap-2 inline-flex text-slate-700 text-lg font-medium">Learn More</a>}
      </article>
    </section>
  </div>
  )
}

export default Join