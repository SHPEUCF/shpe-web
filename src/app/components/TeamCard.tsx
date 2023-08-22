interface TeamCardProps {
  handleOpen: any,
  name: string,
  pos: string,
  pic: string,
  id: number
}

const TeamCard = ({ name, pos, pic, handleOpen, id }: TeamCardProps) => {
  return (<div className="w-56 h-72 p-2 pt-4 bg-white rounded-lg shadow border border-stone-300 flex-col justify-between items-center gap-4 inline-flex">

    <div className="flex flex-col w-56">
      <img className="rounded-full w-24 h-24 m-auto" src={pic} />
      <h3 className="mt-4 ml-[1rem] flex self-start text-black text-lg font-bold">{name}</h3>
      <p className="ml-[1rem] flex self-start text-neutral-700 text-base font-medium">{pos}</p>
    </div>
    <button onClick={() => handleOpen(id)} className="mb-4 w-40 h-9 px-7 py-4 bg-yellow-400 rounded-md shadow justify-center items-center gap-2 inline-flex text-black text-lg font-medium">More</button>
  </div>
  )
}

export default TeamCard