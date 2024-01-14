import React, { useState } from 'react'
import { scrollToSection } from 'utils/basic'
import { LINKS_MENU } from 'constants/constants'
import { HeaderMenuMobile } from 'components/HeaderMenuMobile/HeaderMenuMobile'

import { Wrapper, Body, Logo, Menu, Label, MenuIcon } from './styles'

export const Header = () => {
  const [isMenu, setIsMenu] = useState(false)

  const onChangeIsMenu = () => setIsMenu(prev => !prev)

  return (
    <>
      <Wrapper>
        <Body>
          <Logo href='/'>andrii rudiuk</Logo>

          <Menu>
            {LINKS_MENU.map(link => <Label key={link} onClick={() => scrollToSection(link)}>{link}</Label>)}

            {!isMenu && <MenuIcon onClick={onChangeIsMenu} />}
          </Menu>
        </Body>

      </Wrapper>

      {isMenu && <HeaderMenuMobile onClose={onChangeIsMenu} />}
    </>
  )
}
