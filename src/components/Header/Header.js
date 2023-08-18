import React, { useState } from 'react'
import { scrollToSection } from 'utils/basic'

import { Wrapper, Body, Logo, Menu, Label, CloseIcon, MenuIcon } from './styles'

export const Header = () => {
  const [isMenu, setIsMenu] = useState(false)

  const onChangeIsMenu = () => setIsMenu(prev => !prev)

  return (
    <Wrapper>
      <Body>
        <Logo href='/'>andrii rudiuk</Logo>

        <Menu>
          <Label onClick={() => scrollToSection('home')}>home</Label>
          <Label onClick={() => scrollToSection('about')}>about</Label>
          <Label onClick={() => scrollToSection('projects')}>projects</Label>
          <Label onClick={() => scrollToSection('experience')}>experience</Label>

          {isMenu ? <CloseIcon onClick={onChangeIsMenu} /> : <MenuIcon onClick={onChangeIsMenu} />}
        </Menu>
      </Body>
    </Wrapper>
  )
}
