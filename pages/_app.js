import Layout from '../comps/Layout'
import '../styles/globals.css'


// here is where all our pages are rendered so the difference
// between standalone React is that we render all pages in index.js where
//  typically one component is imporeted with all components in it like App.js:
// index.js
// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));
//  in Next.js index.js file is for the global route with no slash
// so usally our home page goes there and _app.js is doing both:
// it does what in React index.js does which is grabs 'root' element and renders 
// itselsf there, plus gathers all components like App.js in React


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
