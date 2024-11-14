import React, { Suspense } from 'react'
import './styles/global.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollButton } from './components/ScrollButton'

const News = React.lazy(() => import('news/News'))

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col gap-14">
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <News />
      </Suspense>

      <ScrollButton />
      <Footer />
    </div>
  )
}

export default App
