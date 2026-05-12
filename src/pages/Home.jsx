import SEO from '../components/seo/SEO'
import LocalBusinessSchema from '../components/seo/LocalBusinessSchema'
import Hero from '../components/home/Hero'
import EmergencyCTA from '../components/home/EmergencyCTA'
import ServicesPreview from '../components/home/ServicesPreview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Testimonials from '../components/home/Testimonials'
import AreasMarquee from '../components/home/AreasMarquee'
import FAQSchema from '../components/seo/FAQSchema'
import { faqs } from '../data/faqs'
import Portfolio from '../components/home/Portfolio'

const Home = () => {
  return (
    <>
      <SEO 
        title="Professional Plumbing Services"
        keywords="plumber Amanzimtoti, emergency plumber Durban South, geyser repairs Amanzimtoti, blocked drains, burst pipes"
      />
      <LocalBusinessSchema />
       <FAQSchema faqs={faqs.slice(0, 6)} />
      
      <Hero />
      <EmergencyCTA />
      <ServicesPreview />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <AreasMarquee />
    </>
  )
}

export default Home