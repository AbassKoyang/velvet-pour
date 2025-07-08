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

useEffect(() => {
  const assetPromises = [];

const imagesUrl = [
  'public/images/hero-left-leaf.png',
  'public/images/hero-right-leaf.png',
  'public/images/noise.png',
  'public/images/abt1.png',
  'public/images/abt2.png',
  'public/images/abt3.png',
  'public/images/abt4.png',
  'public/images/abt5.png',
  'public/images/arrow.png',
  'public/images/check.png',
  'public/images/cocktail-left-leaf.png',
  'public/images/cocktail-right-leaf.png',
  'public/images/cup-2.png',
  'public/images/drink-1.png',
  'public/images/drink-2.png',
  'public/images/drink-3.png',
  'public/images/drink-4.png',
  'public/images/fav.png',
  'public/images/fb.png',
  'public/images/footer-drinks.png',
  'public/images/footer-left-leaf.png',
  'public/images/footer-right-leaf.png',
  'public/images/insta.png',
  'public/images/left-arrow.png',
  'public/images/mask-img.png',
  'public/images/noise.png',
  'public/images/profile1.png',
  'public/images/profile2.png',
  'public/images/profile3.png',
  'public/images/profile4.png',
  'public/images/right-arrow.png',
  'public/images/slider-left-leaf.png',
  'public/images/slider-right-leaf.png',
  'public/images/under-img.jpg',
  'public/images/x.png',
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

}, [loading])

  return (
    <>
    {
      loading ? (
        <div className='h-dvh w-dvw flex-center'>
          <img className='size-14 md:size-30 animate-pulse duration-100 ease-in-out' src="/images/logo.png" alt="Loader" />
        </div>
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