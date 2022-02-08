import React from 'react'

import images from './constants/images'
import './OrderSummary.css'

const OrderSummary = () => {
  return (
    <div className='app__orderSummary-card'>
        <img className='app__orderSummary-hero' src={images.hero} alt='hero' />
        <div className='app__orderSummary-info'>
            <header>
                <h1>Order Summary</h1>
                <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            </header>
            <div className='app__orderSummary-subscription-card'>
                <div className='app__orderSummary-subscription-plan'>
                    <img src={images.music} alt='music icon' />
                    <div className='app__orderSummary-subscription-info'>
                        <h2>Annual Plan</h2>
                        <p>$59.99/year</p>
                    </div>
                </div>
                <button type='button' className='app__orderSummary-change-subscription'>Change</button>
            </div>
            <div className='app__orderSummary-buttons'>
                <button type='button' className='app__orderSummary-payment-button'>Proceed to Payment</button>
                <button type='button' className='app__orderSummary-cancel-button'>Cancel Order</button>
            </div>
        </div>
    </div>
  )
}


export default OrderSummary