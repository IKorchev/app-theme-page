import React from "react"

const SubscribeForm = () => {
  return (
    <div className='form-wrapper mt-5'>
      <form className='mt-5 p-4'>
        <label htmlFor='subscribe' className='fs-4'>
          Subscribe
        </label>
        <div className='input-group '>
          <div className='form-floating w-100 d-flex'>
            <input
              id='subscribe'
              type='text'
              placeholder='Email'
              className='form-control '
              aria-label="Recipient's email"
              aria-describedby='button-addon2'
            />
            <label htmlFor='subscribe'>Email</label>
            <button
              className='btn cto-button text-black border border-2'
              type='button'
              id='button-addon2'>
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SubscribeForm
