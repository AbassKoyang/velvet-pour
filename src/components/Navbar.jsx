import React, { useState } from 'react'
import { navLinks } from '../../constant'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    window.addEventListener('scroll', () => {
        let currentScrollPosition = window.scrollY;
        if (currentScrollPosition > lastScrollPosition) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }

        setLastScrollPosition(currentScrollPosition <= 0 ? 0 : currentScrollPosition);
    });
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
            }
        })

        navTween.fromTo('nav', {
            backgroundColor: 'transparent'
        }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration:1,
            ease: 'power1.inOut'
        })
    }, [])

    
  return (
    <nav className={`${scrolling ? 'opacity-0' : 'opacity-100'}`}>
        <div>
            <a href="#home" className='flex items-center gap-2'>
                <img src="/images/logo.png" alt="logo" />
                <p className=''>Velvet Pour</p>
            </a>
            <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar