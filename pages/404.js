import Link from 'next/link'
import { useEffect } from 'react'
// we use useRouter hook from next/router library to redirect
import { useRouter } from 'next/router'

// much like index.js is specially named file that fill catch 
// all routes that dont exist, it dosent have to be called NotFound
// (simirlay what inside index.js it up to us) but the file 
// HAS TO BE  named 404.js

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>Going back to the <Link href="/"><span className='link'>Homepage</span></Link> is 3 seconds...</p>
    </div>
  );
}
 
export default NotFound;