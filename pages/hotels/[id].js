
// getStatcPaths is another function (next to the getStaticProps) that is going to run 
// at a build time; has to be exported and equal to asyncronous function because we need
// to tell Next how many pages to generate based on our data
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  // it will be [{params: { id: photo.id.toString() }},{...},{...}...]
  const paths = data.map(photo => {
    return {
      params: { id: photo.id.toString() }
    }
  })

  return {
    //Next is going to use 'paths' to build pages in the build time based on those id's
    // stored in paths - its the difference between React only and Next that those pages
    // are alredy build and ready before the reach the browser, they might be loadad lazaly
    // but data for them is alredy fetched
    paths,
    // fallback has to do with the fallback pages so when te user is 
    // trying visit the page with the id that dosent exist it will show the 404 page
    fallback: false
  }
}

// Next is going to run this function below based on those 'paths' returned above,
// so if we returned over there 10 objects its going to run 10 times;
// we get access to the id on the 'context' object that we automatically pass
//  an an argument
export const getStaticProps = async (context) => {
  // we can also use serverSide rendering for the purpose of this exercise but 
  // here is not needed server -side rendering
  // export const getServerSideProps = async (context) => {
  const id = context.params.id;
  // this runs as many times as there is ids and returns as many props as there 
  // are ids
  const res = await fetch('https://jsonplaceholder.typicode.com/photos/' + id);
  const data = await res.json();

  return {
    props: { photo: data }
  }
}

// (SIDENOTE: you can extraxt dynmic route parameter  value using useRouter hook
// import { useRouter } from 'next/router';
// const router = useRouter();
// const eventId = router.query.eventId;
// there is a difference between extracting params in the component function 
// and in getStatcprops, useRouer is ok for using id to fetch some data 
// but would only happen in the browser but if you want to prerender a page
// with help of getstaticprops and getStaticProps runs BEFORE the component
// functions runs  that s the wole idea of prerenderind the page)

// nad we are pomping each of that return value to the Details page as props
// and basically all those pages get build, so when we click link a link with their 
// id they are already there, fetching and buildin proccess is done on the server earlier
// -  with  React only based on individual id we would fetch the rest of the object and
// build only ONE page, in here all pages are built already// build only ONE page, in here all pages are built already
const Details = ({ photo }) => {
  return (
    <div className="details">
      <h3>{ photo.title}</h3>
      <img className="details__photo" src={photo.url}/>
      <img className="details__photo--mobile" src={photo.thumbnailUrl}/>
      {/* <p>{ ninja.email }</p>
      <p>{ ninja.website }</p>
      <p>{ ninja.address.city }</p> */}
    </div>
  );
}

export default Details;