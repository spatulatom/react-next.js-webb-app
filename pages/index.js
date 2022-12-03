import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

// index.js is specially named file which is gining to be 
// rendered on top of the routes with / only 
// Note: when indes.js is created inside a folder like 
// in hotels folder the routing will look like: url/hotels/

export default function Home() {
  return (
    <>
      <Head>
        <title>California Holidays | Home</title>
        <meta name="keywords" content="california"/>
      </Head>
      <div>
        <h1 className={styles.title}>California Destinations</h1>
        
        <p className={styles.text}>Lorem ipsum ipsim dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <Link href="/hotels/">
          <span className={styles.btn}>See Our HOTELS</span>
        </Link>
      </div>
    </>
  )
}
