import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>
          Small text
        </p>
        <h3>
          Mid text
        </h3>
        <img src='' alt='motorcycle helmet'  className='hero-banner-image'/>
        <div>
          <Link href='/product/ID'>
            <button type='button'>Button Text</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <>Description</>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroBanner