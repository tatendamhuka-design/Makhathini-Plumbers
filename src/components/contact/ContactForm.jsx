import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, phone, message } = formData
    const whatsappMessage = `🔧 *NEW CALLBACK REQUEST - Makhathini Plumbers* 🔧%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A${message ? `*Message:* ${encodeURIComponent(message)}%0A` : ''}%0A_Please contact this customer as soon as possible._`
    window.open(`https://wa.me/27765969429?text=${whatsappMessage}`, '_blank')
    setSubmitted(true)
    setFormData({ name: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-teal-600 mb-4">Send a Message</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-teal-500" />
        </div>
        <div className="mb-4">
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-teal-500" />
        </div>
        <div className="mb-4">
          <textarea name="message" value={formData.message} onChange={handleChange} rows="3" placeholder="Tell us about your plumbing issue..." className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-teal-500"></textarea>
        </div>
        <button type="submit" className="w-full bg-teal-500 text-white py-3 rounded-full font-semibold hover:bg-teal-600 transition-all">
          Request Callback
        </button>
      </form>
      {submitted && <p className="text-green-600 text-center mt-3">✅ Request sent! We'll contact you shortly.</p>}
      <p className="text-xs text-gray-400 text-center mt-3">We'll get back to you within 30 minutes.</p>
    </div>
  )
}

export default ContactForm