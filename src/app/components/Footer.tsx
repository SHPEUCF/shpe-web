import logo from "../assets/logo-footer.svg"

const Footer = () => {
    return (<div className="bg-[#2A3342] text-white h-[20rem] pt-3 flex flex-col justify-around items-center text-slate-400">
      <img src={logo.src}/>
      <ul className="flex justify-around lg:w-[50%] w-[100%] text-slate-400">
        <li>About</li>
        <li>News</li>
        <li>Our Team</li>
        <li>Calendar</li>
        <li>Contact Us</li>
      </ul>
      <p className="text-slate-400">© 2023 SHPE UCF. All rights reserved.</p>
    </div>
    )
  }
  
  export default Footer