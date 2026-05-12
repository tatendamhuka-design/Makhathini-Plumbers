import { areas } from '../../data/areas'

const AreasMarquee = () => {
  // Double the areas for seamless loop
  const allAreas = [...areas, ...areas]

  return (
    <section className="py-16 bg-gradient-to-r from-teal-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-teal-500 border-b-4 border-teal-200 pb-2">Areas We Serve</span>
          </h2>
          <p className="text-gray-600 mt-4">Fast, reliable plumbing services across the South Coast region</p>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-left w-max">
            {allAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-full px-5 py-3 flex items-center gap-3 shadow-md border border-gray-100 whitespace-nowrap hover:bg-teal-500 hover:text-white transition-all cursor-pointer"
              >
                <span className="text-xl">{area.emoji}</span>
                <span className="font-semibold text-teal-600 group-hover:text-white">{area.name}</span>
                <span className="text-xs bg-gray-100 rounded-full px-2 py-1 text-gray-500">{area.distance} {area.direction !== 'main' && area.direction}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <span className="bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm">➕ Surrounding areas within 50km radius — just ask!</span>
        </div>
      </div>
    </section>
  )
}

export default AreasMarquee