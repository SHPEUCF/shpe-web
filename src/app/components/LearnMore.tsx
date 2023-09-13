import bg from '../assets/pattern.svg'
import bgm from '../assets/pattern-mobile.svg'
import dor from '../assets/dark-orange.svg'
import or from '../assets/orange.svg'
import y from '../assets/yellow.svg'
import lb from '../assets/light-blue.svg'
import b from '../assets/blue.svg'
import db from '../assets/dark-blue.svg'
import Topic from './Topic'
interface Prop {
  isMobile: any
}

const LearnMore = ({isMobile} : Prop) => {

  return (<main id="about" className="bg-white 2xl:h-[110rem] xl:h-[70rem] lg:h-[60rem] h-[128rem]">
    <img src={isMobile ? bgm.src : bg.src} className="absolute z-10 max-w-[100%] w-screen" />
    <article className="absolute z-20 w-screen h-[100%] flex flex-col justify-between my-[5rem] pb-[5rem]">
      <h4 className="2xl:text-7xl text-center text-slate-800 lg:text-4xl text-3xl font-bold pb-[2rem]">Learn more about SHPE</h4>
      <p className="w-[90%] 2xl:pb-[10rem] self-center 2xl:text-3xl text-center text-slate-500 lg:text-xl text-baseline font-medium pb-[6rem]">We bring you the best professional development, engineering, and social experiences with a hispanic twist.</p>
      <section className="w-[80%] h-full m-auto flex flex-wrap justify-between items-center">
        <Topic color={dor.src} title="Mission" description="SHPE empowers the Hispanic community to unlock their full potential and create a global impact through heightened awareness, support, and comprehensive development in STEM disciplines." />
        <Topic color={or.src} title="Vision" description="SHPE envisions a world where Hispanics are esteemed and hold influence as premier innovators, scientists, mathematicians, and engineers, driving progress and diversity." />
        <Topic color={y.src} title="Familia" description="We take responsibility for our collective strength and passion by developing communities, building a diverse and inclusive membership, and challenging each other to be our best." />
        <Topic color={lb.src} title="Service" description="We act on a foundation of service. We commit to deliver the highest levels of quality, integrity, and ethical behavior. We act with empathy, patience, and understanding." />
        <Topic color={b.src} title="Education" description="We value formal education and professional development. We are dedicated to continuous improvement and renewal. We learn from successes, setbacks, and each other." />
        <Topic color={db.src} title="Resilience" description="Embracing diverse cultures and communities, we find strength in adaptation, thrive in unity, and persist with unwavering optimism, fostering growth and interconnectedness." />
      </section>
    </article>
  </main>
  )
}

export default LearnMore