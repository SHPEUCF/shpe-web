import bg from "../assets/events.svg"
import bgm from "../assets/events-mobile.svg"
import event from "../assets/event.svg"
import Event from "./Event"
interface Prop {
  isMobile: any
}

const Events = ({isMobile} : Prop) => {
  return (<main id="events" className="bg-[#F7F8F9] 2xl:h-[105em] lg:h-[70rem] h-[80rem] w-screen flex justify-around items-center max-w-[100%]">
    <img src={isMobile ? bgm.src : bg.src} className="absolute z-10 w-screen" />
    <section className="absolute z-20 w-screen 2xl:h-[105rem] lg:h-[70rem] h-[80rem] flex flex-col justify-around items-center 2xl:pt-[9rem] lg:mt-[9rem] max-w-[100%]">
      <header className="w-[80%] h-[10%]">
        <h2 className="2xl:text-7xl text-slate-800 lg:text-4xl text-3xl font-bold pb-6">Our Main Events</h2>
        <p className="2xl:text-3xl lg:w-[75%] w-[100%] text-slate-500 text-xl font-medium">Learn, interview, network, celebrate, and socialize. There really is something for everyone!</p>
      </header>
      <section className={`${isMobile ? "flex-col" : ""} w-[90%] h-[80%] flex justify-around`}>
        <article>
          <Event link="https://shpeucfbbq.webflow.io/" title="Industry BBQ" description="A great opportunity to get to network with recruiters in a chill environment!" />
          <Event link="https://shpe.org/engage/events/national-convention/" title="SHPE Conference" description="Join SHPE in our signature event and the largest gathering of Hispanics in STEM in the country in Salt Lake City, Utah." />
          <Event link="https://shpe.org/shpexchange/" title="SHPExchange" description="This online series will give companies and attendees an opportunity to exchange ideas and make connections in a setting focused on their industry alone." />
        </article>
        <img className="lg:w-1/2 flex self-start" src={event.src} />
      </section>
    </section>
  </main>
  )
}

export default Events