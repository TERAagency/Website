
import './App.css'
import About from './Components/AboutUs/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/NavBar/NavBar'
import Services from './Components/Services/Services'

function App() {

  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App
