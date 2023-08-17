import React from 'react'

import { Wrapper, Body, Logo, Menu, Label } from './styles'

export const Header = () => {
  return (
    <Wrapper>
      <Body>
        <Logo>andrii rudiuk</Logo>

        <Menu>
          <Label>home</Label>
          <Label>about</Label>
          <Label>project</Label>
          <Label>contanct</Label>
        </Menu>
      </Body>
    </Wrapper>
  )
}
