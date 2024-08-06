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
import GaleryTestimonal from './components/galery/GaleryTestimonal'
import { useSinglePrismicDocument } from '@prismicio/react'

const App = () => {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [homeContent] = useSinglePrismicDocument('home')

  console.log(homeContent)

  const testimonals = homeContent?.data.depoimentos?.map((item: any) => ({
    image: item.depoimento_avatar.url,
    name: item.depoimento_name[0].text,
    subtitle: item.depoimento_company[0].text,
    description: item.depoimento_text[0].text
  })) ?? [];
  

  const cardData = homeContent?.data.cards?.map((card: any) => ({
    subtitle: card.card_over_title[0].text,
    title: card.card_title[0].text,
    description: card.card_description[0].text,
    image: card.card_image.url,
    ctaText: card.card_button[0].text,
    link: card.card_link.url,
  })) ?? [];

  const bigNumberArray = homeContent?.data.big_numbers.map((item: any) => ({
    number: item.number[0].text,
    description: item.description[0].text
  }))

  useEffect(() => {
    window.scrollTo(0, 0)
    const handleMouseMove = (e: any) => {
      setMouseX(e.clientX / window.innerWidth * 100)
      setMouseY(e.clientY / window.innerHeight * 100)
    }

    const htmlElement = document.querySelector('html');
    if (!htmlElement) return
    const htmlStyle = htmlElement.style;
    htmlStyle.scrollSnapType = 'y mandatory';

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      htmlStyle.scrollSnapType = 'none';
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <MenuWrapper
        whichIsActive='home'
      />
      <div className='content-home'>
        <Hero
          title={homeContent?.data.hero_home[0].text}
          mouseMove={{ x: mouseX, y: mouseY }}
          bigNumbersArray={bigNumberArray}
        />
        <OlaSection
          text={homeContent?.data.ola_text}
          button={homeContent?.data.button_ola_section[0].text}
        />
        <ContentCards
          cardArray={cardData}
        />
        <BookSeller
          title={homeContent?.data.book_title[0].text}
          description={homeContent?.data.book_description[0].text}
          button={homeContent?.data.book_button[0].text}
        />
        <LivingRoom />
        <GaleryTestimonal
          testimonials={testimonals}
        />
        <Store mouseMove={{ x: mouseX, y: mouseY }} />
        <Footer />
      </div>
    </>
  )
}

export default App