import type { NextPage } from 'next'
import { Seo } from '../components/Seo'


const Home: NextPage = () => {


  return (
    <>
      <Seo title="olá mundo" description='tudo bem?' shareImage='https://www.google.com' />
      <h1>hello world</h1>
    </>
  )
}

export default Home
