import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import heroBg from '../../assets/images/hero-plumbing-bg.jpg'

const Hero = () => {
  return (
    <section 
      className="relative text-white py-20 md:py-28 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Reliable Plumbing Services You Can Trust
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Specialists in Domestic & Industrial Plumbing in Amanzimtoti and surrounding areas
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105">
              📋 Get a Quote
            </Link>
            <a
              href="https://wa.me/27765969429?text=Hello%20Makhathini%20Plumbers,%20I%20need%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-green-600 transition-all hover:scale-105"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero