import SEO from '../components/seo/SEO'
import ContactForm from '../components/contact/ContactForm'
import ContactDetails from '../components/contact/ContactDetails'

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us | Free Plumbing Quote Amanzimtoti"
        description="Get a free plumbing quote from Makhathini Plumbers. Call, WhatsApp, or email us for fast response. 24/7 emergency services available."
        keywords="contact plumber Amanzimtoti, plumbing quotes Durban South, emergency plumber"
      />

      <section className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg opacity-90">We're here to help with all your plumbing needs</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactDetails />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">Business Hours</h2>
          <p className="text-gray-700">Monday - Sunday: <span className="font-semibold">24/7 Emergency Service</span></p>
          <p className="text-gray-500 text-sm mt-2">Regular hours: 8:00 AM - 5:00 PM | Emergency: Always available</p>
        </div>
      </section>
    </>
  )
}

export default Contact