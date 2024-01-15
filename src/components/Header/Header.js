import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { scrollToSection } from 'utils/basic'
import { LINKS_MENU } from 'constants/constants'
import { HeaderMenuMobile } from 'components/HeaderMenuMobile/HeaderMenuMobile'

import { Wrapper, Body, Logo, Menu, Label, MenuIcon } from './styles'

export const Header = () => {
  const [isMenu, setIsMenu] = useState(false)
  const { state } = useLocation()
  const navigate = useNavigate()

  const onChangeIsMenu = () => setIsMenu(prev => !prev)

  const goToSection = link => () => {
    navigate('/', { state: link })
    scrollToSection(link)
  }

  return (
    <>
      <Wrapper>
        <Body>
          <Logo href='/'>andrii rudiuk1</Logo>

          <Menu>
            {LINKS_MENU.map(link => (
              <Label key={link} onClick={goToSection(link)} isactive={state === link ? 1 : 0}>
                {link}
              </Label>
            ))}

            {!isMenu && <MenuIcon onClick={onChangeIsMenu} />}
          </Menu>
        </Body>

      </Wrapper>

      {isMenu && <HeaderMenuMobile onClose={onChangeIsMenu} />}
    </>
  )
}
