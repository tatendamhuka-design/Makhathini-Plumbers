import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/27765969429?text=Hello%20Makhathini%20Plumbers,%20I%20need%20a%20quote"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-50 animate-pulse-whatsapp"
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsAppFloat