import { useEffect, useRef } from "react"
import Card from "./Card"
import icon1 from "../assets/Bulb.svg"
import icon2 from "../assets/Smartphone.svg"
import icon3 from "../assets/Cloud.svg"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const InfoCards = () => {
  const parentRef = useRef()
  useEffect(() => {
    gsap.from(parentRef.current.children, {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: parentRef.current.children[0],
        start: "center bottom",
      },
    })
  }, [])
  return (
    <div className='info-cards-wrapper container-fluid p-5'>
      <div ref={parentRef} className='container mt-5 row mx-auto justify-content-center'>
        <Card icon={icon1} text='Get inspired instantly' />
        <Card icon={icon2} text='Available on all devices' />
        <Card icon={icon3} text='Unlimited cloud storage' />
      </div>
    </div>
  )
}

export default InfoCards
