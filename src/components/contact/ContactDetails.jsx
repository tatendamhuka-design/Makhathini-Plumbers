import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa'

const ContactDetails = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-teal-600 mb-4">📞 Contact Details</h3>
      
      <div className="bg-white rounded-xl p-4 flex items-start gap-4 shadow-md hover:shadow-lg transition-all">
        <FaMapMarkerAlt className="text-teal-500 text-2xl mt-1" />
        <div>
          <p className="text-xs uppercase font-semibold text-gray-400">ADDRESS</p>
          <p className="font-semibold">Amanzimtoti, Durban South, 4125</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 flex items-start gap-4 shadow-md hover:shadow-lg transition-all">
        <FaEnvelope className="text-teal-500 text-2xl mt-1" />
        <div>
          <p className="text-xs uppercase font-semibold text-gray-400">EMAIL US</p>
          <a href="mailto:makhathiniplumbing@gmail.com" className="font-semibold hover:text-teal-500">makhathiniplumbing@gmail.com</a>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 flex items-start gap-4 shadow-md hover:shadow-lg transition-all">
        <FaPhone className="text-teal-500 text-2xl mt-1" />
        <div>
          <p className="text-xs uppercase font-semibold text-gray-400">CALL US</p>
          <a href="tel:0765969429" className="font-semibold text-xl hover:text-teal-500">076 596 9429</a>
        </div>
      </div>

      <a href="https://wa.me/27765969429?text=Hello%20Makhathini%20Plumbers,%20I%20need%20a%20quote" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all mt-4">
        <FaWhatsapp /> Chat on WhatsApp →
      </a>
    </div>
  )
}

export default ContactDetails