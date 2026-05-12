import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AppRoutes from './routes/AppRoutes'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/layout/WhatsAppFloat'
import BackToTop from './components/layout/BackToTop'
import GoogleAnalytics from './components/seo/GoogleAnalytics'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <GoogleAnalytics />
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
        <WhatsAppFloat />
        <BackToTop />
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App