import React from 'react'

import FAQ from '../../components/Faq/Faq'
import Footer from '../../components/FooterRental/FooterRental'
import Header from '../../components/HeaderRental/HeaderRental'
import Navbar from '../../components/NavbarRental/NavbarRental'
import OurServices from '../../components/OurServices/OurServices'
import Register from '../Register/Register'
import Testimonial from '../../components/Testimonial/Testimonial'
import WhyUs from '../../components/WhyUs/WhyUs'

export default function LandingPage() {
    return (
        <div>
            <Navbar />
            <Header />
            <OurServices />
            <WhyUs />
            <Testimonial />
            <Register />
            <FAQ />
            <Footer />
        </div>
    )
}
