import bg from "../assets/events.svg"
import bgm from "../assets/events-mobile.svg"
import event from "../assets/event.svg"
import Event from "./Event"
interface Prop {
  isMobile: any
}

const Events = ({isMobile} : Prop) => {
  return (<main className="bg-[#F7F8F9] lg:h-[70rem] h-[80rem] w-screen flex justify-around items-center">
    <img src={isMobile ? bgm.src : bg.src} className="absolute z-10 w-screen" />
    <section className="absolute z-20 w-screen lg:h-[70rem] h-[80rem] flex flex-col justify-around items-center lg:mt-[9rem]">
      <header className="w-[80%] h-[10%]">
        <h2 className="text-slate-800 lg:text-4xl text-3xl font-bold pb-6">Our Main Events</h2>
        <p className="lg:w-[75%] w-[100%] text-slate-500 text-xl font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </header>
      <section className={`${isMobile ? "flex-col" : ""} w-[90%] h-[80%] flex justify-around`}>
        <article>
          <Event title="Industry BBQ" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <Event title="SHPE Conference" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <Event title="SHPExchange" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        </article>
        <img className="lg:w-1/2 flex self-start" src={event.src} />
      </section>
    </section>
  </main>
  )
}

export default Events