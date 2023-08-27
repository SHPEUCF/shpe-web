import logo from "../assets/logo.svg"
import menu from "../assets/menu.svg"

interface Prop {
    isMobile: any
}

const NavBar = ({isMobile}: Prop) => {
    return (<nav className="h-[5rem] text-gray-500 flex items-center justify-between p-2 px-6">
        <img src={logo.src} />
        {isMobile ? <img src={menu.src} /> : <></> }
        <section className={`${isMobile ? "hidden" : ""} w-[90%] flex items-center justify-between`}>
            <a href="#about">About</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-afMh4hdQtk6HfmeaEOxptbqrMK4Nei9ukQXQBaFB0rwKOQ/viewform" target="_blank">News</a>
            <a href="#team">Our Team</a>
            <a href="#calendar">Calendar</a>
            <a href="contact">Contact Us</a>
            <a href="https://form.jotform.com/70387424224151" target="_blank" className="text-white text-sm w-[127px] h-9 px-4 py-2 bg-orange-500 rounded-md shadow justify-center items-center gap-1.5 inline-flex">Members</a>
        </section>
    </nav>
    )
}

export default NavBar