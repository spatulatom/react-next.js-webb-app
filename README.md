This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`]

## Getting Started
to run the Next app server:
npm run dev
or
yarn dev.
This app is deployed on Vercel: https://react-next-js-webb-app.vercel.app/.



## About
Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such 
as server-side rendering and generating static websites as oppose to 'traditional' React apps that can only render their content in the client-side browser.

This little project is a demo tourist website. It explores many Next.js features like how to make pages and routes, how to link between them, how to use styles, how to create a Layout 
component used across all app like Navbar or Footer, how to use static assests like images, how to insert different metadata to each page, how to fetch data on the server side (from JSONPlaceholder APIs) with Next.js build in functions: getStaticProps() and getStaticPaths() and finally how to deploy the app on
the Vercel Platform.

## Images usage
 For any static assets like images in Next.js they have to placed in 'public' folder. 
 Then we could use <img src="public/kkkk"> or import Image from 'next/image'
 and use that component that allows us direct styling - another
 good thing about using this Image component is that it loads images lazely, so for example if the image was somewhere at the bottom of the page it only loads it if we sroll down to the bottom; 
    see index.js for its aplication

## Customizing page title for each page
we can add meta data for each page:
I will use the Head component thaht is built into next;
import Head from 'next/head'
<Head>
<title>California Holidays | About</title>
<meta name="keywords" content="about"/>
</Head>
now it the head when we on about page we will see 'California Holidays | About';
With another component we need to use React.Fragment since there can only be one element rendered in React, for that in Next.js we only need: 
<>
mutiple elements
</>

## Fetching Data
For fetching data I am keeping it very simple and are using JSONPlaceholder APIs where I can choose different resoures like /comments, /photos, /users and so one. I am going to be using
/photos resource. 
When using React 0nly for fetching data i would use useEffect Hook but because with Next 
I am not fetching data in the browser but on the server, for that I am using special function provided by Next getStaticProps() and getStaticPaths().

## Dynamic Routes
for dyanmic routing in Next I need to use [] when naming the file: [id].js

## Deploy on Vercel

The easiest way to deploy  Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out  [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
This app is deployed on Vercel: https://react-next-js-webb-app.vercel.app/