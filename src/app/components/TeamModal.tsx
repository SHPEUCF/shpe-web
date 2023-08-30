interface Member {
  id: number,
  name: string,
  pos: string,
  pic: string,
  major: string,
  linkedin: string,
  email: string,
  age: number,
  futureJob: string,
  bio: string,
  hobbies: Array<string>
}


interface TMProps {
  close: any,
  id: number,
  member: Member
}

const TeamModal = ({ close, id, member }: TMProps) => {

  return (
    <div className="text-black w-[40rem] lg:h-[30rem] h-[32rem] p-2 pt-4 bg-white rounded-lg shadow border border-stone-300 justify-between items-center inline-flex px-4">
      <div className="self-start mt-[1rem] w-[25%] h-[70%] flex flex-col justify-around items-center">
        <img className="rounded-full lg:w-36 lg:h-36 w-24 h-24" src={member.pic} />
        <div className="flex w-[80%] justify-between">
          <a target="_blank" className="lg:w-[30%] w-[40%]" href={member.linkedin} ><img src="/assets/linkedin.svg" /></a>
          <a target="_blank" className="lg:w-[30%] w-[40%]" href={`mailto:${member.email}`}><img src="/assets/email.svg" /></a>
        </div>
        <h1 className="w-[100%] text-black ext-lg font-bold">{member.name}, {member.age}</h1>
        <h2 className="w-[100%] text-neutral-700 text-base font-medium">{member.pos}</h2>
      </div>
      <div className="w-[70%] h-[100%] flex flex-col">
        <div className="flex self-end"><svg onClick={close} className="cursor-pointer w-3 h-3 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg></div>
        <div className="w-[100%] h-[75%] flex flex-col justify-between">
          <div>
            <h3 className="w-[100%] text-black lg:text-base text-sm font-bold">Major:</h3>
            <p className="w-[100%] text-neutral-700 lg:text-base text-sm font-medium">{member.major}</p>
          </div>
          <div>
            <h3 className="w-[100%] text-black lg:text-base text-sm font-bold">Future Job Focus:</h3>
            <p className="w-[100%] text-neutral-700 lg:text-base text-sm font-medium">{member.futureJob}</p>
          </div>
          <div>
            <h3 className="w-[100%] text-black lg:text-base text-sm font-bold">Bio:</h3>
            <p className="w-[100%] text-neutral-700 lg:text-base text-sm font-medium">{member.bio}</p>
          </div>
          <div>
            <h3 className="w-[100%] text-black lg:text-base text-sm font-bold">Hobbies:</h3>
            <p className="w-[100%] text-neutral-700 lg:text-base text-sm font-medium">{member.hobbies.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamModal