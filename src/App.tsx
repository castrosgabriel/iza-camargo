import './App.css'
import Hero from './components/hero/Hero'
import ContentCards from './components/content-cards/ContentCards'
import BookSeller from './components/book-seller/BookSeller'
import Store from './components/store/Store'
import OlaSection from './components/ola-section/OlaSection'
import LivingRoom from './components/living-room/LivingRoom'
import Footer from './components/footer/Footer'
import { useEffect, useState } from 'react'
import MenuWrapper from './components/menu/MenuWrapper'

function App() {

  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMouseX(e.clientX / window.innerWidth * 100)
      setMouseY(e.clientY / window.innerHeight * 100)
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  })

  return (
    <>
      <MenuWrapper whichIsActive='home'/>
      <>
        <Hero mouseMove={{ x: mouseX, y: mouseY }} />
        <OlaSection mouseMove={{ x: mouseX, y: mouseY }} />
        <ContentCards mouseMove={{ x: mouseX, y: mouseY }} />
        <BookSeller />
        <LivingRoom mouseMove={{ x: mouseX, y: mouseY }} />
        <Store mouseMove={{ x: mouseX, y: mouseY }} />
        <Footer />
      </>
    </>
  )
}

export default App
