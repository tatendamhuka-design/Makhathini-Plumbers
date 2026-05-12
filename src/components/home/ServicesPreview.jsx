import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services } from '../../data/services'

const ServicesPreview = () => {
  const previewServices = services.slice(0, 6)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-teal-500 border-b-4 border-teal-200 pb-2">Our Professional Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-teal-600 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <Link
                to={`/services/${service.slug}`}
                className="inline-block text-teal-500 font-semibold text-sm hover:text-teal-700 transition-colors"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-primary inline-block">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview