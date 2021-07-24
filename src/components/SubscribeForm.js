import React from "react"

const SubscribeForm = () => {
  return (
    <div className='form-wrapper mt-5'>
      <form className='mt-5'>
        <label htmlFor='subscribe' className='fs-4'>
          Subscribe
        </label>
        <div className='input-group'>
          <input
            placeholder='email'
            id='subscribe'
            type='text'
            className='form-control'
            aria-label="Recipient's username"
            aria-describedby='button-addon2'
          />
          <button
            className='btn cto-button text-black border border-2'
            type='button'
            id='button-addon2'>
            Subscribe
          </button>
        </div>
      </form>
    </div>
  )
}

export default SubscribeForm
