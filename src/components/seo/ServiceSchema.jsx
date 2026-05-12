import { Helmet } from 'react-helmet-async'

const ServiceSchema = ({ service, location }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "PlumbingContractor",
      "name": "Makhathini Plumbers (Pty) Ltd",
      "url": "https://makhathiniplumbers.co.za"
    },
    "areaServed": {
      "@type": "City",
      "name": location || "Amanzimtoti"
    },
    "description": service.description,
    "offers": {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "ZAR",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default ServiceSchema