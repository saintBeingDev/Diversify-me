import Head from 'next/head'
import {Header, Foot} from '../sections'

const Layout = ({ children }) => {
  return (
    <div>
    <Head>
      <title>Diversify Me</title>
      <meta name="Description" content='blogging site for all categories'/>
    </Head>
    <div>
      <Header/>
      <main>
        {children}
      </main>
      <Foot/>
    </div>
    </div>
  )
}

export default Layout