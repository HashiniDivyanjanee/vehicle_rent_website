import React from 'react'
import Back from "../common/back";
import img from "../images/cover/bg1.jpg";
import FeaturedCard from '../home/featured/featuredCard';
const services = () => {
  return (
    <>
    <section>
        <Back name = 'Services' title = 'Services -All Services' cover = {img}/>
    <div className="featured container">
        <FeaturedCard/>
    </div>
    </section>
    </>
  )
}

export default services