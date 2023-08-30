import yellow from "../assets/yellow-plain.svg"

interface EventProps {
    title: string,
    description: string,
    link: string
}

const Event = ({title, description, link} : EventProps) => {
    return (<a href={link} className="flex justify-between 2xl:w-[38rem] lg:w-[28rem] w-[20rem]">
        <img src={yellow.src} />
        <article className="2xl:w-[32rem] lg:w-[22rem] w-[14rem] 2xl:mt-[8rem]  mt-[4rem]">
            <h3 className="2xl:text-5xl text-slate-800 text-2xl font-bold mb-2 2xl:mb-4">{title}</h3>
            <p className="2xl:text-2xl text-slate-500 text-base font-medium">{description}</p>
        </article>
    </a>
    )
}

export default Event

