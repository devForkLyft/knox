import Edge from '@/Sections/HomepageSections/Edge'
import Home from '@/Sections/HomepageSections/Home'
import Program from '@/Sections/HomepageSections/Program'
import Welcome from '@/Sections/HomepageSections/Welcome'
import Footer from '@/Components/Footer/Footer'
import Shop from "@/Sections/HomepageSections/Shop"
import Scoop from "@/Sections/HomepageSections/Scoop"
import HealthGift from '@/Sections/HomepageSections/HealthGift'
import React from 'react'


const HomePage = () => {
  return (
    <div>
      <Home />
      <Welcome />
      <Program />
      <Edge />
      <Shop />
      <Scoop />
      <HealthGift />
      <Footer />
    </div>
  )
}

export default HomePage
