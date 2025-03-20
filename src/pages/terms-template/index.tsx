import React from 'react'
import TermsOfUse from '../../Sections/TermsTemplatePageSection/TermsOfUse'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'


const HomePage = () => {
  return (
    <div>
    <Header isActive={true} />
    <TermsOfUse/>
    <Footer />
    </div>
  )
}

export default HomePage
