import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Swiper from '../../components/Swiper'
import ClientsSection from '../../components/ClientsSection'
import WhatsappWidget from "../../components/WhatsappWidget";
import  Footer  from '../../components/Footer'

function index() {
  return (
    <>
    <Header />
    <Hero />
    <Swiper />
    <ClientsSection />
    <Footer />
    </>
  )
}

export default index