import { ThemeProvider } from 'next-themes'
import { Layout } from '../components'
import '../styles/globals.css'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import Loader from '../Utils/Loader'

function Loading(){
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    // https://www.youtube.com/watch?v=2Tj6lcfJytA

    const handleStart = (url)=>(url!== router.asPath) && setLoading(true);
    const handleComplete = (url)=>(url=== router.asPath) && setLoading(false);

    router.events.on('routerChangeStart', handleStart)
    router.events.on('routerChangeComplete', handleComplete)
    router.events.on('routerChangeError', handleComplete)


    return ()=>{
      router.events.off('routerChangeStart', handleStart)
      router.events.off('routerChangeComplete', handleComplete)
      router.events.off('routerChangeError', handleComplete)
    }

    //routerChangeStart
    //routerChangeComplete
    //routerChangeError
  })

  return loading && (
    <div>
      loading...
    </div>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Loading/>
    <ThemeProvider attribute='class'>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
    </>
    
  )
}

export default MyApp
