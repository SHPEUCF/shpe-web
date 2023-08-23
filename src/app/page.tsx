'use client'
import { useMediaQuery } from 'react-responsive'
import NavBar from "@/app/components/NavBar"
import Banner from "./components/Banner"
import LearnMore from "./components/LearnMore"
import Sponsors from "./components/Sponsors"
import Join from "./components/Join"
import Events from "./components/Events"
import Team from "./components/Team"
import Connected from "./components/Connected"
import Footer from "./components/Footer"

const Home = () => {
  let isMobile = useMediaQuery({ query: `(max-width: 760px)` })
  
  return (<div className="bg-[#F7F8F9] text-black">
    <NavBar isMobile={isMobile} />
    <Banner isMobile={isMobile} />
    <Sponsors isMobile={isMobile} />
    <LearnMore isMobile={isMobile} />
    <Join isMobile={isMobile} />
    <Events isMobile={isMobile} />
    <Team isMobile={isMobile} />
    <Connected isMobile={isMobile} />
    <Footer />
  </div>
  )
}

export default Home