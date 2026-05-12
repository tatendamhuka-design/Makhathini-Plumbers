import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import bathroomImg from '../../assets/images/bathroom.jpeg'
import toiletImg from '../../assets/images/toilet.jpeg'
import geyserImg from '../../assets/images/geyser.jpeg'
import pipesImg from '../../assets/images/pipes.jpeg'
import jojoImg from '../../assets/images/jojo.jpeg'
import pipingImg from '../../assets/images/piping.jpg'

const portfolioItems = [
  { 
    id: 1, 
    image: bathroomImg, 
    title: 'Bathroom Renovation', 
    icon: '🚿',
    desc: 'Complete bathroom transformation from outdated to modern luxury. New tiles, modern fixtures, and efficient plumbing layout.',
    category: 'Renovation'
  },
  { 
    id: 2, 
    image: toiletImg, 
    title: 'Toilet Installation', 
    icon: '🚽',
    desc: 'Professional toilet installation with water-efficient modern unit. Includes new pan, cistern, and waste pipe connection.',
    category: 'Installation'
  },
  { 
    id: 3, 
    image: geyserImg, 
    title: 'Geyser Installation', 
    icon: '⚡',
    desc: 'New energy-efficient geyser installation with safety valves and proper piping. Reliable hot water guaranteed.',
    category: 'Installation'
  },
  { 
    id: 4, 
    image: pipesImg, 
    title: 'Sink & Water Pipes Replacement', 
    icon: '🔧',
    desc: 'Complete replacement of corroded pipes under kitchen sink. Upgraded to durable copper piping. Eliminated leaks.',
    category: 'Repair'
  },
  { 
    id: 5, 
    image: jojoImg, 
    title: 'JoJo Tank Installation', 
    icon: '💧',
    desc: 'Complete rainwater harvesting system. 2500L JoJo tank with pressure pump and overflow management.',
    category: 'Installation'
  },
  { 
    id: 6, 
    image: pipingImg, 
    title: 'Piping & Drainage System', 
    icon: '🏭',
    desc: 'Professional piping installation for industrial kitchen. High-quality PVC and copper pipes.',
    category: 'Commercial'
  }
]

const Portfolio = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-teal-500 border-b-4 border-teal-200 pb-2">Our Recent Projects</span>
          </h2>
          <p className="text-gray-600 mt-4">Take a look at some of our completed plumbing work</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => { 
                    e.target.src = 'https://placehold.co/600x400/2A8C8C/FFFFFF?text=' + encodeURIComponent(item.title)
                  }}
                />
                <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
              </div>
              <div className="p-5">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="text-xl font-bold text-teal-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <Link 
                  to="/contact" 
                  className="inline-block text-teal-500 font-semibold text-sm hover:text-teal-700 transition-colors"
                >
                  Get a similar quote →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio