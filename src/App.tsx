import React, { Suspense } from 'react'
import './styles/global.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollButton } from './components/ScrollButton'

const News = React.lazy(() => import('news/News'))
const Ads = React.lazy(() => import('ads/Ads'))
const Sponsors = React.lazy(() => import('sponsors/Sponsors'))
const Weather = React.lazy(() => import('weather/Weather'))

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <News />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Sponsors />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Ads />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Weather />
      </Suspense>

      <ScrollButton />
      <Footer />
    </div>
  )
}

export default App
