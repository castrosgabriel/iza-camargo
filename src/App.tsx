import './App.css'
import Hero from './components/hero/Hero'
import ContentCards from './components/content-cards/ContentCards'
import BookSeller from './components/book-seller/BookSeller'
import Store from './components/store/Store'
import OlaSection from './components/ola-section/OlaSection'
import LivingRoom from './components/living-room/LivingRoom'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Hero />
      <OlaSection />
      <ContentCards />
      <BookSeller />
      <LivingRoom/>
      <Store />
      <Footer />
    </>
  )
}

export default App
