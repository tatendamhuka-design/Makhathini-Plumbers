import { Link } from 'react-router-dom'
import { FaFacebookF, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBuilding, FaChartLine } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Makhathini Plumbers (Pty) Ltd</h3>
            <p className="text-sm mb-2">Quality plumbing solutions since 2012</p>
            <p className="text-xs text-teal-400"><FaBuilding className="inline mr-1" /> Reg: 2013/0652060/07</p>
            <p className="text-xs text-teal-400 mt-1"><FaChartLine className="inline mr-1" /> BBBEE Level 1 - 100%</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <p className="flex items-center gap-2 text-sm mb-2"><FaMapMarkerAlt className="text-teal-400" /> Amanzimtoti, Durban South, 4125</p>
            <p className="flex items-center gap-2 text-sm mb-2"><FaPhone className="text-teal-400" /> <a href="tel:0765969429" className="hover:text-white">076 596 9429</a></p>
            <p className="flex items-center gap-2 text-sm mb-2"><FaEnvelope className="text-teal-400" /> <a href="mailto:makhathiniplumbing@gmail.com" className="hover:text-white">makhathiniplumbing@gmail.com</a></p>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://web.facebook.com/profile.php?id=100063562945187" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-teal-500 transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://wa.me/27765969429?text=Hello%20Makhathini%20Plumbers,%20I%20need%20a%20quote" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition-colors">
                <FaWhatsapp />
              </a>
            </div>
            <a href="/contact" className="inline-block bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-teal-600 transition-colors">
              Get a Free Quote
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>Designed by <a href="https://inkspiredigitaldesigns.co.za" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">Inkspire Digital Designs</a></p>
          <p className="mt-2">© 2026 Makhathini Plumbers (Pty) Ltd — All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer