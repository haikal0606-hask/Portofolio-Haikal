import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './pages/Home'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    })
  }, [])

  return (
    <Home />
  )
}

export default App
