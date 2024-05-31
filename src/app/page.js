'use client'
import React from 'react';
import  './home.css';
import Image from 'next/image';
import Script from 'next/script';
import poster from "./poster.jpg";
import { useRouter } from 'next/navigation';

const App = () => {
  const router = useRouter();
  return (
        <div>

          <div className="content">
            <div className="navigation-bar" id="help">
              <div id="navigation-container">
                <li>
                  <a href="login.html">Contact</a>
                </li>
              </div>
            </div>
            <div id="abc">
              <h1>
                <span style={{ color: '#ff9900' }}>Dish</span>covery
              </h1>
                <h1 className="ml5">
                  <span className="text-wrapper">
                    <span className="line line1"></span>
                    <span style={{ color: '#ff9900' }} className="letters letters-left">
                      Discover Culinary Creativity
                    </span>
                    <span className="line line2"></span>
                  </span>
                </h1>
              <p id="txt">
                <br />
                <br />
                <br />
                <br />
                <br />
                <span style={{ fontSize: '44px' }}>
                  Unleash Your Inner Chef <br /> with Food Recipes
                </span>
              </p>
              {/* JSX */}
              <button className="button-32" role="button" onClick={()=>router.push('/main')}>
                Get It!
              </button>
            </div>
          </div>
          <Image className='gambar' src={poster}
          alt="poster"/>
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js" />
        </div>

  );
};

{/* <head>
        <title>Food-Recipes</title>
        <link rel="stylesheet" type="text/css" href="Home.css" />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
      </head> */}
export default App;