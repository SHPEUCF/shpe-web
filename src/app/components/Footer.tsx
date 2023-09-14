import logo from "../assets/logo-footer.svg"

const Footer = () => {
    return (<div className="bg-[#2A3342] text-white 2xl:h-[35rem] h-[25rem] pt-3 flex flex-col justify-around items-center text-slate-400">
      <img className="2xl:w-[10%]" src={logo.src}/>
      <ul className="2xl:text-2xl flex justify-around lg:w-[50%] w-[100%] text-slate-400 text-center align-center">
        <li><a href="#about">About</a></li>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSd-afMh4hdQtk6HfmeaEOxptbqrMK4Nei9ukQXQBaFB0rwKOQ/viewform" target="_blank">News</a></li>
        <li><a href="#team">Our Team</a></li>
        <li><a href="#calendar">Calendar</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <p className="2xl:text-xl text-slate-400">© 2023 SHPE UCF. All rights reserved.</p>
    </div>
    )
  }
  
  export default Footer