import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={ styles.title }>Homepage</h1>
        <p className={ styles.text }>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nemo delectus necessitatibus ipsa repudiandae dolorum quidem beatae, facere voluptas obcaecati explicabo impedit et, officiis eum quam ipsam. Vel, facilis commodi?</p>
        <p className={ styles.text }>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nemo delectus necessitatibus ipsa repudiandae dolorum quidem beatae, facere voluptas obcaecati explicabo impedit et, officiis eum quam ipsam. Vel, facilis commodi?</p>

        <Link href="/ninjas" className={ styles.btn }>See Ninja Listing</Link>
      </div>
    </>
  )
}
