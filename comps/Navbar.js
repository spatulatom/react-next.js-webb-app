import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/" className='logo-link'>
        
        <Image src="/logo.png" alt="site logo" width={128} height={77} />
        
        </Link>
      </div>
      <Link href="/"><span className='link'>Home</span></Link>
      <Link href="/about"><span className='link'>About</span></Link>
      <Link href="/hotels/"><span className='link'>Our Hotels</span></Link>
    </nav>
  );
}
 
export default Navbar;