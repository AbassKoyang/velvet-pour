import React from 'react'
import { openingHours, socials } from '../../constant'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

const Footer = () => {
    useGSAP(()=> {
        const titleSplit = SplitText.create('#contact h2', {type: 'words'});

       const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#contact',
            start: 'top center',
        },
        ease: 'power1.inOut'
       }) 

       tl
       .from(titleSplit.words, {
        opacity: 0, yPercent: 100, stagger: 0.02
       })
       .from('#contact h3, #contact p', {
        opacity: 0, yPercent: 100, stagger: 0.02
       })
       .to('#f-right-leaf', {
        y: '-50', duration: 0.7, ease: 'power1.inOut'
       })
       .to('#f-left-leaf', {
        y: '-50', duration: 0.7, ease: 'power1.inOut'
       }, '<')
    }, [])
  return (
    <footer id="contact">
        <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
        <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

        <div className="content">
            <h2>Where to Find Us</h2>

            <div>
                <h1>Visit Our Bar</h1>
                <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
            </div>
            <div>
                <h3>Contact Us</h3>
                <p>(555) 987-6543</p>
                <p>hello@velvetpour.com</p>
            </div>
            <div>
                <h3>Open Every Day</h3>
                {openingHours.map((time) => (
                    <p key={time.day}>
                        {time.day} : {time.time}
                    </p>
                ))}
            </div>
            <div>
                <h3>Socials</h3>

                <div className="flex-center gap-5">
                    {socials.map((social) => (
                        <a key={social.className} target='_blank' href="#" aria-label={social.name}>
                            <img src={social.icon}  alt={social.name}/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer