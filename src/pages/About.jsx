import SEO from '../components/seo/SEO'
import LocalBusinessSchema from '../components/seo/LocalBusinessSchema'
import aboutTeam from '../assets/images/about-team.jpg'
import { FaChartLine, FaBuilding, FaShieldAlt, FaCertificate, FaUserCheck, FaTools, FaTrophy, FaClock, FaUsers, FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const About = () => {
  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: FaTools },
    { number: '98%', label: 'Customer Satisfaction', icon: FaStar },
    { number: '24/7', label: 'Emergency Support', icon: FaClock },
    { number: '10+', label: 'Years Experience', icon: FaUsers }
  ]

  const certifications = [
    { icon: FaChartLine, title: 'BBBEE Level 1', desc: '100% Compliance', color: 'text-green-600', bg: 'bg-green-50' },
    { icon: FaBuilding, title: 'Company Reg', desc: '2013/0652060/07', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: FaShieldAlt, title: 'PIRB Registered', desc: 'Legal compliance', color: 'text-teal-600', bg: 'bg-teal-50' },
    { icon: FaCertificate, title: 'COC Certified', desc: 'Quality assured', color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: FaUserCheck, title: 'Fully Insured', desc: 'Peace of mind', color: 'text-amber-600', bg: 'bg-amber-50' },
    { icon: FaTrophy, title: 'Award Winning', desc: 'Service excellence', color: 'text-yellow-600', bg: 'bg-yellow-50' }
  ]

  return (
    <>
      <SEO 
        title="About Us | BBBEE Level 1 Plumbing Company Amanzimtoti"
        description="Makhathini Plumbers is a BBBEE Level 1 certified, family-owned plumbing company serving Amanzimtoti and the South Coast since 2012. PIRB registered, COC certified, and fully insured."
        keywords="about Makhathini Plumbers, BBBEE plumbing company, licensed plumbers Durban South, family owned plumbers Amanzimtoti"
      />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16 md:py-20">
        <div className="container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Makhathini Plumbers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg opacity-90 max-w-2xl mx-auto"
          >
            Your Local Plumbing Experts Since 2012
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-teal-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all"
              >
                <stat.icon className="text-4xl text-teal-500 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-teal-600">{stat.number}</div>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story with Team Image */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold text-teal-600 mb-4">Your Local Plumbing Experts Since 2012</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Makhathini Plumbers (Pty) Ltd is a family-owned business that has been serving Amanzimtoti and greater Durban South area with integrity and excellence.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We combine decades of hands-on experience with modern equipment to solve complex plumbing challenges — from burst geysers to new bathroom installations. 
                Our certified team prioritises safety, transparency, and long-lasting results.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We treat every home and business like our own, ensuring minimal disruption and maximum quality. 
                Whether it's an emergency call-out or large-scale industrial project, we deliver on time and within budget.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-700 transition">
                  Get a Free Quote
                </Link>
                <a 
                  href="https://wa.me/27765969429?text=Hello%20Makhathini%20Plumbers,%20I%20need%20a%20quote" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-teal-600 text-teal-600 px-6 py-2 rounded-full font-semibold hover:bg-teal-600 hover:text-white transition"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>

            {/* Right Side - Team Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-200 rounded-2xl -z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-100 rounded-2xl -z-0"></div>
                <img 
                  src={aboutTeam} 
                  alt="Makhathini Plumbers professional plumbing team" 
                  className="w-full rounded-2xl shadow-xl relative z-10 object-cover h-96"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/800x600/2A8C8C/FFFFFF?text=Makhathini+Plumbers+Team'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-teal-50 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-teal-600 mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To provide reliable, affordable, and professional plumbing services to the Amanzimtoti community and surrounding areas, 
                ensuring customer satisfaction through quality workmanship and transparent pricing.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-teal-50 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-teal-600 mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To be the most trusted and recognized plumbing service provider on the South Coast, 
                known for excellence, integrity, and community commitment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">
              <span className="text-teal-500 border-b-4 border-teal-200 pb-2">Our Certifications</span>
            </h2>
            <p className="text-gray-600 mt-4">Proudly compliant with South African plumbing regulations</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`${cert.bg} rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all`}
              >
                <cert.icon className={`text-4xl ${cert.color} mx-auto mb-3`} />
                <h3 className="font-bold text-gray-800 mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-500">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BBBEE Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <FaChartLine className="text-5xl mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-3">BBBEE Level 1 Contributor</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
              Makhathini Plumbers is proud to be a BBBEE Level 1 compliant company, 
              demonstrating our commitment to transformation and economic empowerment.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-2 rounded-full">
              <span className="font-semibold">100% Compliance</span>
              <span>•</span>
              <span>Verified Contributor</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">Need a Reliable Plumber?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Get a free quote today. Our team is ready to help with all your plumbing needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition inline-block">
              Get a Quote →
            </Link>
            <a 
              href="tel:0765969429" 
              className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-600 hover:text-white transition inline-block"
            >
              Call 076 596 9429
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About