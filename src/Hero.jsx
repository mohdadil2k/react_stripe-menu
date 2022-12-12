import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'

const Hero =()=> {
  const {closeSubmenu}=useGlobalContext()
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className="hero-wrapper">
        <article className='hero-content'>
          <h1>payment <br /> infrastructure <br /> for the internet</h1>
          <p>millions of companies of all sizes-from startups to fortune
            500s-use stripe's software and APIs to accept payments,send
            payouts and manage their businesses online.
          </p>
          <button className='hero-btn'>start now</button>
        </article>
        <article className='phone-image'>
          <img src={phoneImg} alt="phone" />
        </article>
      </div>
    </section>
  )
}

export default Hero