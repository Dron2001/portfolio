import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { scrollToSection } from 'utils/basic'
import { Header } from 'components/Header/Header'
import { Home } from 'components/Home/Home'
import { About } from 'components/About/About'
import { Projects } from 'components/Projects/Projects'
import { Experience } from 'components/Experience/Experience'
import { Footer } from 'components/Footer/Footer'
import { SocialMediaMenu } from 'components/SocialMediaMenu/SocialMediaMenu'

import './index.css'

export const App = () => {
  const { state } = useLocation()

  useEffect(() => {
    scrollToSection(state || 'home')
  }, [state])

  return (
    <>
      <SocialMediaMenu />

      <Header />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </>
  )
}
