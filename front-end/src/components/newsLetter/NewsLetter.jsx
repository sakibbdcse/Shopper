import React from 'react'
import './newsletter.css'
const NewsLetter = () => {
    return (
        <div className='news-letter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscrive to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder='Enter your email address' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter