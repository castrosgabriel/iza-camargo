import './App.css'
import Hero from './components/hero/Hero'
import ContentCards from './components/content-cards/ContentCards'
import BookSeller from './components/book-seller/BookSeller'
import Store from './components/store/Store'
import OlaSection from './components/ola-section/OlaSection'
import LivingRoom from './components/living-room/LivingRoom'
import Footer from './components/footer/Footer'
import { useEffect } from 'react'
import MenuWrapper from './components/menu/MenuWrapper'
import GaleryTestimonal from './components/galery/GaleryTestimonal'
import { useSinglePrismicDocument } from '@prismicio/react'

const App = () => {
  const [homeContent] = useSinglePrismicDocument('home')

  const renderHomeContent = (field: string) => {
    return homeContent?.data[field]?.[0].text
  }

  const bigNumberArray = homeContent?.data.big_numbers.map((item: any) => ({
    number: item.number?.[0].text,
    description: item.description?.[0].text
  })) ?? [];

  const cardData = homeContent?.data.cards?.map((card: any) => ({
    subtitle: card.card_over_title?.[0].text,
    title: card.card_title?.[0].text,
    description: card.card_description?.[0].text,
    image: card.card_image.url,
    ctaText: card.card_button?.[0].text,
    link: card.card_link.url,
  })) ?? [];

  const testimonals = homeContent?.data.depoimentos?.map((item: any) => ({
    image: item.depoimento_avatar.url,
    name: item.depoimento_name?.[0].text,
    subtitle: item.depoimento_company?.[0].text,
    description: item.depoimento_text?.[0].text
  })) ?? [];

  useEffect(() => {
    window.scrollTo(0, 0)

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
        whichIsActive='home'
      />
      <div className='content-home'>
        <Hero
          title={renderHomeContent('hero_home')}
          bigNumbersArray={bigNumberArray}
        />
        <OlaSection
          text={homeContent?.data.ola_text}
          button={renderHomeContent("button_ola_section")}
        />
        <ContentCards
          cardArray={cardData}
        />
        <BookSeller
          title={renderHomeContent("book_title")}
          description={renderHomeContent("book_description")}
          button={renderHomeContent("book_button")}
        />
        <LivingRoom
          podcastLink={homeContent?.data.podcast_link.url}
          podcastTitle={renderHomeContent("podcast_title")}
          podcastButton={renderHomeContent("podcast_button")}
        />
        <GaleryTestimonal
          testimonials={testimonals}
        />
        <Store
          title={renderHomeContent("store_title")}
          button={renderHomeContent("store_button")}
        />
        <Footer />
      </div>
    </>
  )
}

export default App