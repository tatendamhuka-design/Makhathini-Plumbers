import { motion } from 'framer-motion'
import { FaBolt, FaMoneyBillWave, FaUserTie, FaTrophy, FaShieldAlt, FaClock } from 'react-icons/fa'

const features = [
  { icon: FaBolt, title: 'Fast Response', desc: 'Same-day service in Amanzimtoti & surrounds' },
  { icon: FaMoneyBillWave, title: 'Affordable Pricing', desc: 'Transparent quotes, no hidden fees' },
  { icon: FaUserTie, title: 'Professional Service', desc: 'Certified plumbers, modern tools' },
  { icon: FaTrophy, title: 'BBBEE Level 1', desc: '100% compliant & trusted' },
  { icon: FaShieldAlt, title: 'Fully Insured', desc: 'PIRB registered & COC certified' },
  { icon: FaClock, title: '24/7 Emergency', desc: 'Available around the clock' }
]

const WhyChooseUs = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-teal-500 border-b-4 border-teal-200 pb-2">Why Choose Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-all"
            >
              <feature.icon className="text-4xl text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-teal-600 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs