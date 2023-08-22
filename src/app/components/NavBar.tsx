import { useMediaQuery } from 'react-responsive'
import logo from "../assets/logo.svg"
import menu from "../assets/menu.svg"

const NavBar = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

    return (<nav className="text-gray-500 flex items-center justify-between p-2 px-6">
        <img src={logo.src} />
        {isMobile ? <img src={menu.src} /> : <></> }
        <section className={`${isMobile ? "hidden" : ""} w-[90%] flex items-center justify-between`}>
            <p>About</p>
            <p>News</p>
            <p>Our Team</p>
            <p>Calendar</p>
            <p>Contact Us</p>
            <a href="https://form.jotform.com/70387424224151" target="_blank" className="text-white text-sm w-[127px] h-9 px-4 py-2 bg-orange-500 rounded-md shadow justify-center items-center gap-1.5 inline-flex">Members</a>
        </section>
    </nav>
    )
}

export default NavBar