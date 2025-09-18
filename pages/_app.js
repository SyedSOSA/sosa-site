import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') document.documentElement.classList.add('dark')
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
