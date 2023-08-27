interface TopicProps {
  color: string,
  title: string,
  description: string
}

const Topic = ({ color, title, description }: TopicProps) => {
  return (<section className="flex flex-col w-80 h-60 justify-start items-center mb-[4rem]">
    <img src={color} />
    <h5 className="py-4 text-center text-slate-800 text-2xl font-bold ">{title}</h5>
    <p className="text-center text-slate-500 text-base font-medium ">{description}</p>
  </section>
  )
}

export default Topic