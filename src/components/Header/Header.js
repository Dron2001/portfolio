import React from 'react'

import { Wrapper, Body, Logo, Menu, Label } from './styles'

export const Header = () => {
  const scrollToSection = id => {
    const section = document.querySelector(`#${id}`)

    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Wrapper>
      <Body>
        <Logo href='/'>andrii rudiuk</Logo>

        <Menu>
          <Label onClick={() => scrollToSection('home')}>home</Label>
          <Label onClick={() => scrollToSection('about')}>about</Label>
          <Label onClick={() => scrollToSection('projects')}>projects</Label>
          <Label onClick={() => scrollToSection('experience')}>experience</Label>
        </Menu>
      </Body>
    </Wrapper>
  )
}
