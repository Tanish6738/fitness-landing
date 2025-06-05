import React from 'react'
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import WhyChooseUs from './Components/WhyChooseUs'
import Testimonials from './Components/Testimonials'
import Team from './Components/Team'
import CTA from './Components/CTA'
import Location from './Components/Location'
import Footer from './Components/Footer'

const Page = () => {
  return (
    <div>
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="team">
        <Team />
      </section>
      <CTA />
      <section id="location">
        <Location />
      </section>
      <Footer />
    </div>
  )
}

export default Page