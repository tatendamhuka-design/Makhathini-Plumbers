import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogImage = '/images/hero-plumbing-bg.jpg',
  ogType = 'website'
}) => {
  const siteTitle = 'Makhathini Plumbers | BBBEE Level 1 Plumbing Services'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const defaultDescription = 'Professional plumbing services from Amanzimtoti to Scottburgh. BBBEE Level 1 compliant. 24/7 emergency, geyser repairs, bathroom installations.'
  const metaDescription = description || defaultDescription
  const siteUrl = 'https://makhathiniplumbers.co.za'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={canonicalUrl || `${siteUrl}/`} />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl || `${siteUrl}/`} />
      <meta property="og:site_name" content="Makhathini Plumbers" />
      <meta property="og:locale" content="en_ZA" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Geo Tags */}
      <meta name="geo.position" content="-30.0522;30.8950" />
      <meta name="geo.region" content="ZA-KZN" />
      <meta name="geo.placename" content="Amanzimtoti" />
    </Helmet>
  )
}

export default SEO