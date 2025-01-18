import React from 'react'
import Hero from './hero/hero'
import Featured from '../home/featured/featured'
import Recent from '../home/recent/recent'
import Awards from '../home/awards/awards'
import Location from '../home/location/location'
import Team from '../home/team/team'


const home = () => {
  return (
   <>
   <Hero/>
   <Featured/>
   <Recent/>
   <Awards/>
   <Location/>
   <Team/>
   </>
  )
}

export default home