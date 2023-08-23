'use client'
import { useState } from 'react'
import w1 from "../assets/wave2.svg"
import w2 from "../assets/wave3.svg"
import w1m from "../assets/wave2-mobile.svg"
import w2m from "../assets/wave3-mobile.svg"
import TeamCard from "./TeamCard"
import TeamModal from './TeamModal'
import Modal from "@mui/material/Modal"
interface Prop {
  isMobile: any
}

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

const members = [
  {
    id: 1,
    name: "Juan G. Trawczynski",
    pos: "President",
    pic: "/board/juan.JPG",
    major: "Computer Engineering",
    linkedin: "https://www.linkedin.com/in/juan-gio-trawczynski/",
    email: "juan.trawczynski@outlook.com",
    age: 24,
    futureJob: "Tech",
    hobbies: ["Futbol"],
    bio: `I'm a Computer Engineer major currently serving as the President of SHPE UCF. Previously, I served as the Conference Director under Pro-Dev and the Social Chair. Over the summer I was a Technical Program Manager Intern at Amazon Lab126 in Sunnyvale, CA working on a debug hardware for Echo devices. Outside of work/school, I'm a foodie who loves exploring new dishes. Additionally, I'm a dog lover and my husky is my companion and four-legged pillow. In my free time, I enjoy playing and watching soccer, and I'm always up for a game of futbol!`
  },
  {
    id: 2,
    name: "Leandro Taveras",
    pos: "External Vice President",
    pic: "/board/leo.JPG",
    major: "Industrial Engineering",
    linkedin: "https://www.linkedin.com/in/leandro-taveras/",
    email: "taverasleandro@gmail.com",
    age: 18,
    futureJob: "Industrial, Systems or Manufacturing engineering",
    hobbies: ["Going to new places", "Running", "Hanging out with my friends"],
    bio: "I am Leo Taveras, I was born in New York City and my parents were both born and raised in the Dominican Republic. I have 1 little brother and I also like to play American football."
  },
  {
    id: 3,
    name: "Daniella Espinoza-Escobar",
    pos: "Internal Vice President ",
    pic: "/board/daniella.JPG",
    major: "Industrial Engineering",
    linkedin: "https://www.linkedin.com/in/daniellaescobar1",
    email: "Internalvp@shpeucf.com",
    age: 21,
    futureJob: "Program/Product Management ",
    hobbies: ["Going to Festivals", "Gym", "traveling"],
    bio: `Hey there, I'm Daniella! A Senior pursuing a major in Industrial Engineering. Formerly a Facilities Engineering CWEP at Lockheed Martin, I spent last summer in Atlanta, Georgia, interning at Microsoft as a technical program manager.`
  },
  {
    id: 4,
    name: "Catalina Ocampo",
    pos: "Treasurer",
    pic: "/board/cata.JPG",
    major: "Computer Science",
    linkedin: "https://www.linkedin.com/in/catalinaocampo03/",
    email: "treasurer@shpeucf.com",
    age: 19,
    futureJob: "Software Engineer",
    hobbies: ["Sports", "Coding", "Painting", "Hanging out with friends"],
    bio: "South Florida | Colombian Heritage | UCF Computer Science Major | SHPE Treasurer | Blending cultures and code for success! 🌟"
  },
  {
    id: 5,
    name: "Maria Pombo",
    pos: "Secretary",
    pic: "/board/maria.JPG",
    major: "Industrial Engineering",
    linkedin: "https://www.linkedin.com/in/maria-jose-pombo/",
    email: "secretary@shpeucf.com",
    age: 18,
    futureJob: "Undecided !",
    hobbies: ["Travel", "Thrifting", "Art", "Trying new foods"],
    bio: `I'm an Industrial Engineering major, born in Bogota, Colombia, currently interning part time for Caterpillar Inc. in the global logistics field`
  },
  {
    id: 6,
    name: "Dennis Garcia",
    pos: "Projects Chair",
    pic: "/board/dennis.JPG",
    major: "Mechanical Engineering",
    linkedin: "https://www.linkedin.com/in/dennis-garcia-/",
    email: "dennisgarcia1354@gmail.com",
    age: 19,
    futureJob: "Manufacturing Engineering",
    hobbies: ["Training for triathlons", "Reading", "Playing guitar"],
    bio: `Hello everyone! I'm Dennis and I'm the Projects Chair for this academic year. I loved being involved in SHPE last year so I wanted to give back by getting involved as a board member. I can't wait to help get others involved through Projects this upcoming semester; I hope to see you at one of my meetings!`
  },
  {
    id: 7,
    name: "Karla Montesinos",
    pos: "Marketing Chair",
    pic: "/board/karla.JPG",
    major: "Mechanical Engineering",
    linkedin: "",
    email: "montesinoskarla55@gmail.com",
    age: 21,
    futureJob: "Design Engineering",
    hobbies: ["Art", "Design", "Hanging out with Friends", "Pretty Notes", "Good music"],
    bio: "Hola!! Hi, I am so excited to be your marketing director this year!! Reach out to workout, hang out, study or get cute to sit at a cute coffee shop! "
  },
  {
    id: 8,
    name: "Miguel Parra",
    pos: "Socials Chair",
    pic: "/board/miguel.JPG",
    major: "Computer Science",
    linkedin: "https://www.linkedin.com/in/miguel-parra44",
    email: "paramiguel44@gmail.com",
    age: 19,
    futureJob: "Program Manager for Tech Company",
    hobbies: ["Gym", "Sports", "Video Games", "Hanging out"],
    bio: "Venezuelan 🇻🇪 South Florida Socials Chair 🗣️ Goal to create stronger community 🫵"
  },
  {
    id: 9,
    name: "Josefina Hofmann",
    pos: "SHPETinas Chair",
    pic: "/board/jose.JPG",
    major: "Civil Engineering",
    linkedin: "https://www.linkedin.com/in/josefinahofmann",
    email: "josefinahofmann9@gmail.com",
    age: 19,
    futureJob: "Construction",
    hobbies: ["Traveling", "Reading"],
    bio: `Hi everyone! My name is Josefina but I go by Jose. I'm so excited for this year and can't wait to get started!`
  },
  {
    id: 10,
    name: "Rebecca Calderon",
    pos: "Pro Dev Co-Chair",
    pic: "/board/rebecca.JPG",
    major: "Computer Science",
    linkedin: "https://www.linkedin.com/in/rebeccacalderon1/",
    email: "Rebecca_Calderon@hotmail.com",
    age: 22,
    futureJob: "Software Engineer",
    hobbies: ["Yoga", "Anime", "Traveling", "Hiking"],
    bio: `Hello! My name is Rebecca but I go by Becca. I'm 🇨🇴&🇻🇪 and a rising Senior this year and I am excited for an awesome school year. Peace and blessings🧘🏽!`
  },
  {
    id: 11,
    name: "Andres Acevedo Polo",
    pos: "Pro Dev Co-Chair",
    pic: "/board/andres.JPG",
    major: "Electrical Engineering",
    linkedin: "https://www.linkedin.com/in/joseandresacevedopolo",
    email: "jo543625@ucf.edu",
    age: 24,
    futureJob: "Anything but defense",
    hobbies: ["Jiu-jitsu", "video games", "music"],
    bio: "Just trying to make a difference"
  },
  {
    id: 12,
    name: "Nicole Nascimento",
    pos: "Tech Chair",
    pic: "/board/nicole.JPG",
    major: "Computer Science",
    linkedin: "https://www.linkedin.com/in/nicole-zolnier/",
    email: "nizocareer@gmail.com",
    age: 21,
    futureJob: "Software Engineer",
    hobbies: ["Listening to music", "cooking", "gym", "watching movies"],
    bio: "Hey! My name is Nicole and I am from the best country in South America: Brazil! I am a third-year Computer Science major, work as an Undergraduate Teaching Assistant for Intro to C and as a Software Engineer at UCF. A fun fact is that I built and designed the website that you are in right now!"
  }
]

const Team = ({isMobile} : Prop) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState<any>(undefined);

  const handleOpen = (id: number) => {
    console.log("here")
    let mem = members.find(x => x.id === id)
    setIsClicked(mem)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false);
    setIsClicked(undefined);
  }

  return (<main id="team" className="h-full">
    {isClicked && (<Modal
      open={isOpen}
      onClose={handleClose}
      style={{display:'flex',alignItems:'center',justifyContent:'center'}}
    >
      <TeamModal member={isClicked} close={handleClose} id={isClicked.id} />
    </Modal>
    )}


    <img className="w-screen" src={isMobile ? w1m.src : w1.src} />
    <section className="lg:h-[80rem] h-[280rem] w-screen bg-[#2A3342] flex flex-col justify-around items-center pb-[4rem]">
      <div className="w-[80%] lg:h-[6rem] h-[2rem] justify-around flex flex-col text-start">
        <h2 className="text-white lg:text-4xl text-[1.6rem] font-bold lg-pb-0 pb-4">Get to know our Team</h2>
        <p className="text-slate-400 text-xl font-medium">Know the face of SHPE UCF</p>
      </div>
      <div className="w-[90%] flex flex-wrap justify-around gap-[4rem]">
        {members.map((mem) => (
          <TeamCard key={mem.id} handleOpen={handleOpen} id={mem.id} name={mem.name} pic={mem.pic} pos={mem.pos} />
        ))}
      </div>

    </section>
    <img className="w-full bg-white" src={isMobile ? w2m.src : w2.src} />
  </main>
  )
}

export default Team