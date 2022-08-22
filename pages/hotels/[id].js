export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(photo => {
    return {
      params: { id: photo.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/photos/' + id);
  const data = await res.json();

  return {
    props: { ninja: data }
  }
}

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ ninja.name }</h1>
      <p>{ ninja.email }</p>
      <p>{ ninja.website }</p>
      <p>{ ninja.address.city }</p>
    </div>
  );
}

export default Details;