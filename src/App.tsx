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
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const App = () => {

  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [firstScroll, setFirstScroll] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const handleMouseMove = (e: any) => {
      setMouseX(e.clientX / window.innerWidth * 100)
      setMouseY(e.clientY / window.innerHeight * 100)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)

  }, [])

  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#hero-home',
      start: '30% top',
      end: '70% top',
      toggleClass: 'active',
      onEnter: () => setFirstScroll(true),
      onEnterBack: () => setFirstScroll(false),
    })
    
    const htmlElement = document.querySelector('html');
    if (!htmlElement) return
    const htmlStyle = htmlElement.style;
    htmlStyle.scrollSnapType = 'y mandatory';

    return () => {
      htmlStyle.scrollSnapType = 'none';
    }
    
  }, [])

  return (
    <>
      <MenuWrapper
        darkBg={!firstScroll}
        whichIsActive='home'
      />
      <div className='content-home'>
        <Hero mouseMove={{ x: mouseX, y: mouseY }} />
        <OlaSection />
        <ContentCards />
        <BookSeller />
        <LivingRoom mouseMove={{ x: mouseX, y: mouseY }} />
        <Store mouseMove={{ x: mouseX, y: mouseY }} />
        <Footer />
      </div>
    </>
  )
}

export default App