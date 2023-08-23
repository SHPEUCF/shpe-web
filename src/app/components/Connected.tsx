import { useMediaQuery } from 'react-responsive'
import bg from "../assets/contact.svg"
import bgm from "../assets/contact-mobile.svg"
import Social from "./Social"

const Connected = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  return (<main id="contact" className="bg-white lg:h-[91rem] h-[78rem] pt-10">
    <img src={isMobile ? bgm.src : bg.src} className="absolute z-10 w-screen" />
    <section className="absolute z-20 w-screen lg:h-[80rem] h-[70rem] flex flex-col justify-around items-center">
      <header className="h-[5%]">
        <h2 className="text-center text-slate-800 text-4xl font-bold mb-6">Let&apos;s stay connected</h2>
        <p className="text-center text-slate-500 text-xl font-medium">Please reach out to us with any questions, suggestions or issues</p>
      </header>
      <section className="lg:h-[10%] h-[30%] w-screen flex flex-wrap items-center justify-center">
        <Social link="mailto:secretary@shpeucf.com" icon="/assets/email.svg" title="Email" />
        <Social link="https://discord.com/invite/gRamS65mqT" icon="/assets/discord.svg" title="Discord" />
        <Social link="https://www.instagram.com/shpeucf/" icon="/assets/instagram.svg" title="Instagram" />
        <Social link="https://chat.whatsapp.com/LotVd4J7FNzJQzAX2rxDjc" icon="/assets/whatsapp.svg" title="Whatsapp" />
      </section>
      <iframe id="calendar" src="https://calendar.google.com/calendar/embed?src=shpe.ucf.chapter%40gmail.com&ctz=America%2FNew_York"
        className="lg:w-[75vw] w-[85vw] lg:h-[80vh] h-[45vh]"
      />
    </section>
  </main>
  )
}

export default Connected