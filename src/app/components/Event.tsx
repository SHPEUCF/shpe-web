import yellow from "../assets/yellow.svg"

interface EventProps {
    title: string,
    description: string
}

const Event = ({title, description} : EventProps) => {
    return (<section className="flex justify-between lg:w-[28rem] w-[20rem]">
        <img src={yellow.src} />
        <article className="lg:w-[22rem] w-[14rem] mt-[4rem]">
            <h3 className="text-slate-800 text-2xl font-bold mb-2">{title}</h3>
            <p className="text-slate-500 text-base font-medium">{description}</p>
        </article>
    </section>
    )
}

export default Event

