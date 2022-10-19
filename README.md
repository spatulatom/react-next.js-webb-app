<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">


  <p>
    California Destinations is a Next.js web app - this repository contains its source code     
    <br />
    <br />
    <a href="https://react-next-js-webb-app.vercel.app/"><strong>View the deployed app»</strong></a>
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
     <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#next-general-info">Next.js General Info</a></li>
    <li><a href="#images-usage">Images</a></li>
    <li><a href="#customizing-page-title-for-each-page">Customizing Page Title For Each Page</a></li>
    <li><a href="#fetching-data">Fetching Data</a></li>
    <li><a href="#dynamic-routes">Dynamic Routes</a></li>
     <li><a href="#deploy-on-vercel">Deploy on Vercel</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This little project is a demo tourist website where user can choose a hotel from the list of hotels:

![Product Name Screen Shot](imgs/cd1.png)

List of dummy hotels is fetched from JSONPlaceholder APIs:

![Product Name Screen Shot](imgs/cd2.png)

It explores many Next.js features like how to make pages and routes, how to link between them, how to use styles, how to create a Layout 
component used across all app like Navbar or Footer, how to use static assests like images, how to insert different metadata to each page, how to fetch data on the server side (from JSONPlaceholder APIs) with Next.js build in functions: getStaticProps() and getStaticPaths() and finally how to deploy the app on
the Vercel Platform.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* HTML, CSS
* [![React][React.js]][React-url]
* Next.js
* Github as a remote repository
* Chrome, Firefox, Brave Browser, Edge and Opera for browser testing the responsiveness.
* Chrome Developer Tools for testing screen sizes and using Lighthouse.
* Visual Studio Code as a local IDE & repository.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments


* this project was completed at the end of The Net Ninja tutorial <a href="https://www.youtube.com/watch?v=MJT_WXdSPjE&list=LL&index=16">see more</a>



<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Getting Started
to run the Next app server:
npm run dev
or
yarn dev.
This app is deployed on Vercel: https://react-next-js-webb-app.vercel.app/.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Next general info
Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such 
as server-side rendering and generating static websites as oppose to 'traditional' React apps that can only render their content in the client-side browser.

<p align="right">(<a href="#readme-top">back to top</a>)</p> 

## Images usage
 For any static assets like images in Next.js they have to placed in 'public' folder. 
 Then we could use img src="public/kkkk" or import Image from 'next/image'
 and use that component that allows us direct styling - another
 good thing about using this Image component is that it loads images lazely, so for example if the image was somewhere at the bottom of the page it only loads it if we sroll down to the bottom; 
    see index.js for its aplication

    
<p align="right">(<a href="#readme-top">back to top</a>)</p>

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


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Fetching Data
For fetching data I am keeping it very simple and are using JSONPlaceholder APIs where I can choose different resoures like /comments, /photos, /users and so one. I am going to be using
/photos resource. 
When using React 0nly for fetching data i would use useEffect Hook but because with Next 
I am not fetching data in the browser but on the server, for that I am using special function provided by Next getStaticProps() and getStaticPaths().


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Dynamic Routes
for dyanmic routing in Next I need to use [] when naming the file: [id].js


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Deploy on Vercel

The easiest way to deploy  Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out  [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
This app is deployed on Vercel: https://react-next-js-webb-app.vercel.app/


<p align="right">(<a href="#readme-top">back to top</a>)</p>

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
