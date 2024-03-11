import { useState } from "react"
import logo from "../assets/logo.svg"
import menu from "../assets/menu.svg"

interface Prop {
    isMobile: any
}

const NavBar = ({ isMobile }: Prop) => {
    const [openMenu, setOpenMenu] = useState(false)

    return (<nav className="2xl:h-[8rem] h-[5rem] text-gray-500 flex items-center justify-between p-2 px-6">
        <img className="2xl:w-[12%]" src={logo.src} />
        {isMobile ? <button onClick={() => setOpenMenu(!openMenu)}><img src={menu.src} /></button> : <></>}
        {openMenu ? <div id="dropdown" className="z-30 w-1/2 top-16 right-0 absolute">
            <ul className="py-2 flex flex-col p-4 border shadow-md border-gray-100 rounded-lg bg-gray-50 text-sm text-gray-700">
                <li>
                    <a onClick={() => setOpenMenu(!openMenu)} href="#about" className="block px-4 py-2 hover:bg-gray-100">About</a>
                </li>
                <li>
                    <a onClick={() => setOpenMenu(!openMenu)} href="https://docs.google.com/forms/d/e/1FAIpQLSd-afMh4hdQtk6HfmeaEOxptbqrMK4Nei9ukQXQBaFB0rwKOQ/viewform" target="_blank" className="block px-4 py-2 hover:bg-gray-100">News</a>
                </li>
                <li>
                    <a onClick={() => setOpenMenu(!openMenu)} href="#team" className="block px-4 py-2 hover:bg-gray-100">Our Team</a>
                </li>
                <li>
                    <a onClick={() => setOpenMenu(!openMenu)} href="#calendar" className="block px-4 py-2 hover:bg-gray-100">Calendar</a>
                </li>
                <li>
                    <a onClick={() => setOpenMenu(!openMenu)} href="https://www.shopshpeucf.com/" className="block px-4 py-2 hover:bg-gray-100">Shop</a>
                </li>
                <li>
                    <a onClick={() => setOpenMenu(!openMenu)} href="#contact" className="block px-4 py-2 hover:bg-gray-100">Contact Us</a>
                </li>
            </ul>
        </div> : <></>}

        <section className={`${isMobile ? "hidden" : ""} 2xl:text-2xl w-[90%] flex items-center justify-between`}>
            <a className="px-4 py-2 hover:bg-gray-100" href="#about">About</a>
            <a className="px-4 py-2 hover:bg-gray-100" href="https://docs.google.com/forms/d/e/1FAIpQLSd-afMh4hdQtk6HfmeaEOxptbqrMK4Nei9ukQXQBaFB0rwKOQ/viewform" target="_blank">News</a>
            <a className="px-4 py-2 hover:bg-gray-100" href="#team">Our Team</a>
            <a className="px-4 py-2 hover:bg-gray-100" href="#calendar">Calendar</a>
            <a href="https://www.shopshpeucf.com/" className="block px-4 py-2 hover:bg-gray-100">Shop</a>
            <a className="px-4 py-2 hover:bg-gray-100" href="#contact">Contact Us</a>
            <a href="https://form.jotform.com/70387424224151" target="_blank" className="text-white 2xl:text-2xl 2xl:h-14 2xl:w-[200px] text-sm w-[127px] h-9 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-md shadow justify-center items-center gap-1.5 inline-flex">Members</a>
        </section>
    </nav>
    )
}

export default NavBar