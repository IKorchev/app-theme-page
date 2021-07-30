import { useEffect, useRef } from "react"
import linkImg from "../assets/link.svg"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const SectionItem = ({ id, className, image, title, subtitle, paragraph, link }) => {
  const parentRef = useRef()
  useEffect(() => {
    const childrenEls = parentRef.current.children[1].children
    const sectionImage = parentRef.current.children[0]
    gsap.from(sectionImage, {
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: parentRef.current,
        start: "10% bottom",
      },
    })
    gsap.from(childrenEls, {
      opacity: 0,
      y: 100,
      delay: 0.5,
      duration: 1.2,
      stagger: 0.1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top bottom",
      },
    })
  }, [])

  return (
    <section
      ref={parentRef}
      id={id}
      className={`${className} container d-flex justify-content-around`}>
      <img className='section-image' src={image} alt='Section background' />
      <div className='main-section-content'>
        <h1 className='h2'>
          <b>{title}</b>
        </h1>
        <h5 className='mb-4 text-muted'>{subtitle}</h5>
        <p>{paragraph}</p>
        <a href={link || "https://google.com/"} target='_blank' rel='noreferrer'>
          <b>
            Learn more <img src={linkImg} alt='arrow' />
          </b>
        </a>
      </div>
    </section>
  )
}

export default SectionItem
