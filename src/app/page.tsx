'use client'
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
  return (<div className="bg-[#F7F8F9] text-black">
    <NavBar />
    <Banner />
    <Sponsors />
    <LearnMore />
    <Join />
    <Events />
    <Team />
    <Connected />
    <Footer />
  </div>
  )
}

export default Home