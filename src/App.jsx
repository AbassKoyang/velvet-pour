import gsap from 'gsap';
import {ScrollTrigger, SplitText} from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Footer from './components/Footer';
gsap.registerPlugin(ScrollTrigger, SplitText);
import { useState
} from 'react';
import { useEffect } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true);

const assetPromises = [];

const imagesUrl = [
  '/images/hero-left-leaf.png',
  '/images/hero-right-leaf.png',
  '/images/noise.png',
];

imagesUrl.forEach((src) => {
  const promise = new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  }); 

  assetPromises.push(promise);
})

const videoUrls = [
  '/images/output.mp4',
];
imagesUrl.forEach((src) => {
  const promise = new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.src = src;
    video.oncanplaythrough = resolve;
    video.onerror = reject;
  }); 

  assetPromises.push(promise);
})

assetPromises.push(document.fonts.ready);

Promise.all(assetPromises)
  .then(() => {
    console.log("All assets loaded!");
    setLoading(false);
  })
  .catch((error) => {
    console.error("Failed to load one or more assets:", error);
    setLoading(false);
  });

  return (
    <>
    {
      loading ? (
        <h1>Loading</h1>
      ) : (
        <main>
          <Navbar />
          <Hero />
          <Cocktails />
          <About />
          <Art />
          <Menu />
          <Footer />
      </main>
      )
    }
    </>
  )
}

export default App