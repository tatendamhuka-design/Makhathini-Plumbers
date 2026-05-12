import { Helmet } from 'react-helmet-async'

const ReviewSchema = ({ reviews }) => {
  const aggregateRating = {
    "@type": "AggregateRating",
    "ratingValue": 5,
    "reviewCount": reviews.length,
    "bestRating": 5,
    "worstRating": 1
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Makhathini Plumbers (Pty) Ltd",
    "aggregateRating": aggregateRating,
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5
      },
      "reviewBody": review.text
    }))
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default ReviewSchema