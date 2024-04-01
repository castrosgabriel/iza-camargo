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
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { Observer, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

const App = () => {

  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [scrollBottom, setScrollBottom] = useState(false)

  const footerHeight = document.querySelector('.footer')?.clientHeight

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleScrollDown = () => {
    const mm = gsap.matchMedia();
    mm.add('screen and (min-width: 768px)', () => {
      gsap.to(window, {
        duration: 1.8,
        scrollTo: { y: `+=${window.innerHeight}`, autoKill: false },
        ease: 'power2.inOut',
        onComplete: () => setIsAnimating(false),
      })
    }
    )
  }

  const handleScrollUp = () => {
    const mm = gsap.matchMedia();
    mm.add('screen and (min-width: 768px)', () => {
      if (scrollBottom) {
        gsap.to(window, {
          scrollTo: { y: `-=${footerHeight}`, autoKill: false },
          ease: 'power2.inOut',
          duration: 1.8,
          onComplete: () => setIsAnimating(false),
        })
      } else {
        gsap.to(window, {
          duration: 1.8,
          scrollTo: { y: `-=${window.innerHeight}`, autoKill: false },
          ease: 'power2.inOut',
          onComplete: () => setIsAnimating(false),
        })
      }
    }
    )
  }

  console.log(scrollBottom)

  useEffect(() => {
    const scrollTriggerBottom = ScrollTrigger.create({
      trigger: '.footer',
      start: 'center bottom',
      end: 'bottom bottom',
      onEnter: () => setScrollBottom(true),
      onLeaveBack: () => setScrollBottom(false),
    })
    scrollTriggerBottom.enable()
    return () => {
      scrollTriggerBottom.kill()
    }
  }, [])


  useEffect(() => {
    const observer = Observer.create({
      target: window,
      type: 'wheel',
      onDown: () => !isAnimating && handleScrollDown(),
      onUp: () => !isAnimating && handleScrollUp(),
      preventDefault: true,
      onWheel: () => setIsAnimating(true),
      onStop: () => setIsAnimating(false),
      onStopDelay: 0,
    })

    const mm = gsap.matchMedia();
    mm.add('screen and (max-width: 768px)', () => {
      observer.disable()
    })

    return () => {
      observer.kill()
    }
  }, [isAnimating])

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMouseX(e.clientX / window.innerWidth * 100)
      setMouseY(e.clientY / window.innerHeight * 100)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <MenuWrapper whichIsActive='home' />
      <div className='content-home'>
        <Hero mouseMove={{ x: mouseX, y: mouseY }} />
        <OlaSection mouseMove={{ x: mouseX, y: mouseY }} />
        <ContentCards mouseMove={{ x: mouseX, y: mouseY }} />
        <BookSeller />
        <LivingRoom mouseMove={{ x: mouseX, y: mouseY }} />
        <Store mouseMove={{ x: mouseX, y: mouseY }} />
        <Footer />
      </div>
    </>
  )
}

export default App