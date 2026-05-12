import { FaPhone, FaWhatsapp } from 'react-icons/fa'

const EmergencyCTA = () => {
  return (
    <div className="bg-teal-500 text-white py-4 text-center">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <span className="text-lg font-semibold">🚨 24/7 EMERGENCY SERVICE</span>
          <a href="tel:0765969429" className="flex items-center gap-2 bg-white text-teal-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
            <FaPhone /> Call Now: 076 596 9429
          </a>
          <span className="text-sm">Response within 1 hour</span>
        </div>
      </div>
    </div>
  )
}

export default EmergencyCTA