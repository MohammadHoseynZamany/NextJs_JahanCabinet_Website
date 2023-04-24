import '@/styles/globals.css'
import HomeMain from '@/components/HomeMain'

export default function App({ Component, pageProps }) {
  
  return (
    <HomeMain>
      <Component {...pageProps} />
    </HomeMain>
  )
}
