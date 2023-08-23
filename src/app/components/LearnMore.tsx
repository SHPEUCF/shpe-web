import { useMediaQuery } from 'react-responsive'
import bg from '../assets/pattern.svg'
import bgm from '../assets/pattern-mobile.svg'
import dor from '../assets/dark-orange.svg'
import or from '../assets/orange.svg'
import y from '../assets/yellow.svg'
import lb from '../assets/light-blue.svg'
import b from '../assets/blue.svg'
import db from '../assets/dark-blue.svg'
import Topic from './Topic'

const LearnMore = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  return (<main id="about" className="bg-white lg:h-[60rem] h-[128rem]">
    <img src={isMobile ? bgm.src : bg.src} className="absolute z-10 w-screen" />
    <article className="absolute z-20 w-screen h-[35rem] flex flex-col justify-between pt-[5rem]">
      <h4 className="text-center text-slate-800 lg:text-4xl text-3xl font-bold pb-[2rem]">Learn more about SHPE</h4>
      <p className="text-center text-slate-500 lg:text-xl text-baseline font-medium pb-[6rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <section className="w-[80%] m-auto flex flex-wrap justify-between items-center">
        <Topic color={dor.src} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Topic color={or.src} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Topic color={y.src} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Topic color={lb.src} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Topic color={b.src} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Topic color={db.src} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      </section>
    </article>
  </main>
  )
}

export default LearnMore