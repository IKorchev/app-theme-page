import React from "react"

const Card = ({ title, paragraph }) => {
  return (
    <div className='card p-2 my-5'>
      <h1 className='card-title'>{title}</h1>
      <div className='card-content'>
        <p className='lead'>{paragraph}</p>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <div className='container-fluid about-wrapper'>
      <div className='about-content-wrapper d-flex '>
        <div className='container-fluid'>
          <Card title='Reliable' paragraph='We make your ideas reality' />
          <Card title='Reliable' paragraph='We make your ideas reality' />
          <Card title='Reliable' paragraph='We make your ideas reality' />
        </div>
      </div>
    </div>
  )
}

export default About
