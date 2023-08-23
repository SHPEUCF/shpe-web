import bg from '../assets/wavepattern.svg'
import bgm from '../assets/wavepattern-mobile.svg'
import m from '../assets/microsoft.svg'
import a from '../assets/accen.svg'
import t from '../assets/tesla.svg'
import d from '../assets/disney.svg'
import n from '../assets/nasa.svg'
interface Prop {
    isMobile: any
}

const Sponsors = ({isMobile} : Prop) => {
    return (<main className="lg:h-[27rem] h-[45rem] bg-white">
        <img src={isMobile ? bgm.src : bg.src} className="absolute z-10 w-screen" />
        <section className="absolute z-20 lg:pt-[3.5em] flex flex-col items-center h-[45rem]">
            <p className="pb-4 text-center text-slate-300 text-xl font-medium">Know some of our partners</p>
            <figure className={`${isMobile ? "flex-col h-[30rem]" : ""} flex justify-around items-center w-screen`}>
                <img src={a.src} />
                <img src={t.src} />
                <img src={d.src} />
                <img src={n.src} />
                <img src={m.src} />
            </figure>
        </section>
    </main>
    )
}

export default Sponsors