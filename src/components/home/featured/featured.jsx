import React from 'react'
import './featured.css'
import Heading from '../../common/heading'
import FeaturedCard from './featuredCard'
const featured = () => {
  return (
   <>
   <section className='featured background'>
    <div className="container">
        <Heading title='Featured Property Types' subtitle='Find all type of Property'/>
        <FeaturedCard/>
        </div>
   </section>
   </>
  )
}

export default featured