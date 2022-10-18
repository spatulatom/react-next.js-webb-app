<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">


  <p>
    'california destination' is a Next.js web app - this repository contains its source code     
    <br />
    <br />
    <a href="https://react-next-js-webb-app.vercel.app/"><strong>View the deployed app on Vercel»</strong></a>
    <br />
    <br />
   
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
     <li><a href="#getting-started">Acknowledgments</a></li>
    <li><a href="#next-general-info">Acknowledgments</a></li>
    <li><a href="#images-usage">Acknowledgments</a></li>
    <li><a href="#customizing-page-title-for-each-page">Acknowledgments</a></li>
    <li><a href="#fetching-data">Acknowledgments</a></li>
    <li><a href="#dynamic-routes">Acknowledgments</a></li>
     <li><a href="#deploy-on-vercel">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

1. This app is a social media platform where users can:
* log in/create an account,
* upload photos/create posts (about upcoming social events),
* add likes,
* add comments,
* tag their event's location on the Google map ,
* change their passwords.

![Product Name Screen Shot](imgs/cd1.png)


2. There are currently a few dummy users accounts created and all of them users have already posted some events as seen below:

![Product Name Screen Shot](imgs/cd2.png)



3. Below we have an example of an event created by User1
* titled 'Lorem Ipsum'
* with the date and time of the creation
* it received 3 likes by Guest, User1 and User3
* by using the three buttons the event can be seen on Google Maps, 
Updated or Deleted
* there were two comments made by Guest and User3

![Product Name Screen Shot](imgs/eb6.png)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* HTML, CSS
* [![React][React.js]][React-url]
* Node.js, Express.js, Mongoose 
* MongoBD for a database
* Amazon Web Services API for stroing photos
* Google Maps Platform API for events locations
* SendGrid API for password change
* Multer middleware library for uploading photos
* bcrypt library for hashing passwords
* jsonwebtoken for creating login token
* Firebase for deploying the frontend
* Heroku for deploying the backend

Heavy usage of React Hooks like useReducer for managing complex state and useContext (as a part of the Context API that is being used for a "global" state managment) also useEffect, useRef, useCallback and useState. There are also custom hooks built and that is form-hook.js for managing form data, http-hook.js for all fetching requests and auth-hook.js for managing back end login token through the rerender cycles.
All sorts of errors that are being handled on the backend  (like an incorrect password) are sent to the frontend and are displayed in a modal window on UI for better UX.
As for the CSS styling, Block/Element/Modifier convention is being followed.



<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- ACKNOWLEDGMENTS -->
## Acknowledgments


* this project was completed at the end of the Udemy course <a href="https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/learn/lecture/16833284?start=15#overview">The MERN Guide</a>

* all users' accounts and all events have been created with the usage of free-to-use photos from www.pexels.com



<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Getting Started
to run the Next app server:
npm run dev
or
yarn dev.
This app is deployed on Vercel: https://react-next-js-webb-app.vercel.app/.



## Next general info
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

<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/tomasz-s-069249244/
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
