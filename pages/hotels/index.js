import styles from '../../styles/Hotels.module.css'
import Link from 'next/link'

// getStaticProps is a async function, and we are exporting it
// this function runs at build time as our app is build and our components redndered
// it never runs in the browser
// It runs before the component Photos is rendered, fetches the data, waits for that data
// once it has the data it pumps it into component so thaht can be rendered with that data 
// inside it
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await res.json();

  return {
    props: { photos: data }
  }
}

const Photos = ({ photos }) => {
  

  return (
    <div>
      <h1>Our Best Hotels for You:</h1>
      {photos.map(photo => (
        <Link href={'/hotels/' + photo.id} key={photo.id}>
          <a className={styles.single}>
            <h3>{photo.title}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Photos;