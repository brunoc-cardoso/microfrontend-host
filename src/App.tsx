import React, { Suspense } from 'react'
import './styles/global.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollButton } from './components/ScrollButton'

const News = React.lazy(() => import('news/News'))

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between w-full">
      <Header />

      <div className="flex justify-center items-center">
        <Suspense fallback={<div>Loading...</div>}>
          <News />
        </Suspense>
      </div>

      <ScrollButton />
      <Footer />
    </div>
  )
}

export default App
