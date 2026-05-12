import { Link } from 'react-router-dom'
import { FaTimes, FaWhatsapp } from 'react-icons/fa'

const MobileMenu = ({ isOpen, onClose, navLinks }) => {
  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      <div className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white z-50 shadow-xl p-6 animate-slide-in-right">
        <div className="flex justify-end">
          <button onClick={onClose} className="p-2 text-gray-500">
            <FaTimes size={24} />
          </button>
        </div>
        
        <nav className="flex flex-col gap-6 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={onClose}
              className="text-lg font-medium text-gray-700 hover:text-teal-500 py-2 border-b border-gray-100"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/27765969429?text=Hello%20Makhathini%20Plumbers,%20I%20need%20a%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-5 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-green-600 transition-all mt-4"
            onClick={onClose}
          >
            <FaWhatsapp /> WhatsApp Now
          </a>
        </nav>
      </div>
    </>
  )
}

export default MobileMenu