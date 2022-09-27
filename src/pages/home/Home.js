import Certifications from "../../components/certifications/Certifications"
import Discuss from "../../components/discuss/Discuss"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Hero from "../../components/hero/Hero"

import './home.scss'

const Home = () => {
  return (
    <div className="home">
        <Header />
        <Hero />
        <Discuss />
        <Certifications />
        <Footer />
    </div>
 
  )
}

    export default Home