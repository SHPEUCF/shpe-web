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
    futureJob: "Technology",
    hobbies: ["Futbol"],
    bio: `I'm a Computer Engineer major currently serving as the President of SHPE UCF. Previously, I served as the Conference Director under Pro-Dev and the Social Chair. Over the summer I was a Technical Program Manager Intern at Amazon Lab126 in Sunnyvale, CA working on a debug hardware for Echo devices. Outside of work/school, I'm a foodie who loves exploring new dishes. Additionally, I'm a dog lover and my husky is my companion and four-legged pillow. In my free time, I enjoy playing and watching soccer, and I'm always up for a game of futbol!`
  },
  {
    id: 2,
    name: "Leo (Leandro) Taveras",
    pos: "External Vice President",
    pic: "/board/leo.JPG",
    major: "Industrial Engineering",
    linkedin: "https://www.linkedin.com/in/leandro-taveras/",
    email: "taverasleandro@gmail.com",
    age: 18,
    futureJob: "Tech, Aerospace, Entertainment, Automotive ",
    hobbies: ["Going to new places", "Running", "Hanging out with my friends"],
    bio: "Hey! My name is Leo and I am from the Dominican Republic! I am a second-year Industrial Engineering major and I work as an Industrial engineering co-op for Universal Orlando. A fun fact is that I love to travel and make travel plans!"
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
    futureJob: "Technology, Fin-Tech, Data Analytics",
    hobbies: ["Going to Festivals", "Gym", "traveling"],
    bio: `Hey! My name is Daniella and I am from Venezuela! I am fourth-year Industrial Engineering major, I have done previous internships at Lockheed Martin as Facilities Engineering CWEP and at Microsoft as a Technical Program Manager intern. A fun fact is that I love going to festivals!`
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
    futureJob: "Technology",
    hobbies: ["Sports", "Coding", "Painting", "Hanging out with friends"],
    bio: "Hello! My name is Catalina and I am originally from Colombia. I am a second year computer science major and work as a software engineer intern at Titan America. A fun fact is that I am going to be studying abroad in Europe."
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
    futureJob: "Defense, Space, Automotive",
    hobbies: ["Training for triathlons", "Reading", "Playing guitar"],
    bio: `HELLOOOOO! My name is Dennis Garcia and I'm from Cuba! I am a second-year Mechanical Engineering major at UCF. A fun fact is that I train for triathlons on my free time!`
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
    futureJob: "UX design, Creative Engineering Design, Project Management",
    hobbies: ["Art", "Design", "Hanging out with Friends", "Pretty Notes", "Good music"],
    bio: "¡¡Hola Hola!!  My name is Karla, and I was born in Mexico City and am so proud of my heritage!! I am a fourth year Mechanical Engineering student. I am also minoring in Computer Science. A fun fact about me that I don’t know how to drive! "
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
    futureJob: "Technology, Program Management",
    hobbies: ["Gym", "Sports", "Video Games", "Hanging out"],
    bio: "Hey Everyone!! My name is Miguel and I was born here in Florida, but my family is Venezuelan! I am a second-year Computer Science major and currently work for Lockheed Martin as a Software Engineer. A fun fact about me is that I love to play sports whenever or whatever the sport is."
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
    futureJob: "Construction and Design",
    hobbies: ["Traveling", "Reading"],
    bio: `Hey! My name is Josefina and I'm from Chile! I'm a second-year Civil Engineering major and I am continuing my summer internship with Ajax Building Company over the course of fall semester. I love travel and all things architecture, construction and design!`
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
    futureJob: "Technology",
    hobbies: ["Yoga", "Anime", "Traveling", "Hiking"],
    bio: `Hey! My name is Becca and I am a proud Venezuelan 🇻🇪 Colombia 🇨🇴. I am a four-year Computer Science student and I work as a Technical Resident for Abbott, a biomedical company. A fun fact about me is that I am an adrenaline junkie and love to travel so anything adventurous, count me in!`
  },
  {
    id: 11,
    name: "Mariana Ramirez Velasco",
    pos: "Pro Dev Co-Chair",
    pic: "/board/mariana.JPG",
    major: "Computer Engineering & Game Design ",
    linkedin: "https://www.linkedin.com/in/marianaramirez71/",
    email: "marianar2241@gmail.com",
    age: 21,
    futureJob: "Space",
    hobbies: ["Art", "Working Out", "Video Games"],
    bio: "Hola! My name is Mariana, and I'm a third year in Computer Engineering & Game Design at UCF. I've had experience at NASA for the Artemis 2 & 3 missions, and continuing to collaborate till today. A fun fact about me is I have a burning passion for my country, Colombia, and for the future of space exploration and technology!"
  },
  {
    id: 12,
    name: "Kayla Cheung",
    pos: "Outreach Chair",
    pic: "/board/kayla.JPG",
    major: "Materials Science",
    linkedin: "www.linkedin.com/in/kayla-lcheung",
    email: "kaylacheung04@gmail.com",
    age: 18,
    futureJob: "Sustainable Textiles/Design and Manufacturing",
    hobbies: ["Drawing", "Cooking", "Movies"],
    bio: "Hi! My name is Kayla and I am a first-year Materials Science major. I am from Miami and proudly Cuban! A fun fact is that in my free time I can be found watching old fashion shows on Vogue or Youtube. "
  },
  {
    id: 13,
    name: "Nicole Nascimento",
    pos: "Tech Co-Chair",
    pic: "/board/nicole.JPG",
    major: "Computer Science",
    linkedin: "https://www.linkedin.com/in/nicole-zolnier/",
    email: "nizocareer@gmail.com",
    age: 21,
    futureJob: "Technology",
    hobbies: ["Listening to music", "cooking", "gym", "watching movies"],
    bio: "Hey! My name is Nicole and I am from the best country in South America: Brazil! I am a third-year Computer Science major, work as an Undergraduate Teaching Assistant for Intro to C and as a Software Engineer at UCF. A fun fact is that I built and designed the website that you are in right now!"
  },
  {
    id: 14,
    name: "Zain E Yousaf Fuentes",
    pos: "Tech Co-Chair",
    pic: "/board/zain.JPG",
    major: "Computer Science",
    linkedin: "https://www.linkedin.com/in/zeyf",
    email: "zeyfcareer@gmail.com",
    age: 21,
    futureJob: "Technology",
    hobbies: ["Destroying in dominoes", "gym", "hanging out with friends"],
    bio: "Hey everyone I'm Zain. I'm a senior Computer Science major from Dominican Republic. Fun fact this is my second time being a tech chair for SHPE!"
  },
]

const Team = ({ isMobile }: Prop) => {
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
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <TeamModal member={isClicked} close={handleClose} id={isClicked.id} />
    </Modal>
    )}
    <img className="w-screen" src={isMobile ? w1m.src : w1.src} />
    <section className="h-full max-w-[100%] w-screen bg-[#2A3342] py-[2rem] flex flex-col justify-around items-center pb-[6rem]">
      <article className="w-[80%] 2xl:h-[16rem] lg:h-[12rem] h-[10rem] justify-around flex flex-col text-start py-6 pb-10">
        <h2 className="2xl:text-7xl text-white lg:text-4xl text-[1.6rem] font-bold lg-pb-0 pb-4">Get to know our Team</h2>
        <p className="2xl:text-3xl text-slate-400 text-xl font-medium">Know the faces of SHPE UCF</p>
      </article>
      <section className="w-[90%] h-full flex flex-wrap justify-around gap-[3rem]">
        {members.map((mem) => (
          <TeamCard key={mem.id} handleOpen={handleOpen} id={mem.id} name={mem.name} pic={mem.pic} pos={mem.pos} />
        ))}
      </section>

    </section>
    <img className="w-screen bg-white" src={isMobile ? w2m.src : w2.src} />
  </main>
  )
}

export default Team