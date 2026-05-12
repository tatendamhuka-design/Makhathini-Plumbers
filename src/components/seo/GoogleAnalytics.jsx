import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GoogleAnalytics = () => {
  const location = useLocation()

  useEffect(() => {
    // Send page view on route change
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      })
    }
  }, [location])

  return null
}

export default GoogleAnalytics