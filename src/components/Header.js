import SubscribeForm from "./SubscribeForm"

const Header = () => {
  return (
    <header className='header-wrapper container row mx-auto'>
      <div className='header-content d-flex flex-column'>
        <h1>
          Design. Build. <br></br> Create
        </h1>
        <p className='lead w-25 mt-2'>
          Create your dream website. Use our app to unlock features and earn rewards.
        </p>
        <div className='cto-container d-flex d-md-block w-50 flex-column mt-3'>
          <button className='cto-button cto-button1 btn'>Start now</button>
          <div className='mt-5'>
            <button className='cto-button cto-button2 btn'></button>
            <button className='cto-button cto-button3 btn'></button>
          </div>
        </div>
        <SubscribeForm />
      </div>
      <div className='header-image'></div>
    </header>
  )
}

export default Header
