const Card = ({ icon, text }) => {
  return (
    <div className='card mx-2 p-2 my-5 flex-row justify-content-center align-items-center'>
      <img src={icon} alt='Small card' />
      <span className='px-4 fs-6 text-center text-black'>{text}</span>
    </div>
  )
}

export default Card
