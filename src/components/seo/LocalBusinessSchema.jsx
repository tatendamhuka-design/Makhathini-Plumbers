import { Helmet } from 'react-helmet-async'

const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PlumbingContractor",
    "name": "Makhathini Plumbers (Pty) Ltd",
    "alternateName": "Makhathini Plumbers",
    "description": "Professional plumbing services from Amanzimtoti to Scottburgh. BBBEE Level 1 compliant. 24/7 emergency, geyser repairs, bathroom installations, blocked drains.",
    "image": "https://makhathiniplumbers.co.za/images/hero-plumbing-bg.jpg",
    "logo": "https://makhathiniplumbers.co.za/images/logo.png",
    "url": "https://makhathiniplumbers.co.za",
    "telephone": "+27765969429",
    "email": "makhathiniplumbing@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Amanzimtoti Main Road",
      "addressLocality": "Amanzimtoti",
      "addressRegion": "KwaZulu-Natal",
      "postalCode": "4125",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-30.0522",
      "longitude": "30.8950"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [
      "https://wa.me/27765969429",
      "https://web.facebook.com/profile.php?id=100063562945187"
    ],
    "areaServed": [
      "Amanzimtoti", "Kingsburgh", "Warner Beach", "Doonside", "Illovo Beach", "Karridene",
      "Umgababa", "Winklespruit", "St Winifred's", "Ezembeni", "Isipingo", "Athlone Park",
      "KwaMakhuta", "Umkomaas", "Scottburgh", "Park Rynie"
    ],
    "hasMap": "https://maps.google.com/?q=Amanzimtoti+South+Africa",
    "paymentAccepted": "Cash, EFT, Credit Card",
    "priceRange": "R450 - R15,000",
    "foundingDate": "2012",
    "founders": [
      {
        "@type": "Person",
        "name": "Makhathini Family"
      }
    ],
    "description": "Family-owned plumbing business serving Amanzimtoti and South Coast since 2012. BBBEE Level 1, PIRB registered, fully insured."
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default LocalBusinessSchema