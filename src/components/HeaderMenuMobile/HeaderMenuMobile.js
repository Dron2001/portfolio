import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { scrollToSection } from 'utils/basic'
import { LINKS_MENU } from 'constants/constants'

import { Wrapper, CloseIcon, Link } from './styles.js'

export const HeaderMenuMobile = ({ onClose }) => {
  const { state } = useLocation()
  const navigate = useNavigate()

  const goToSection = link => () => {
    navigate('/', { state: link })
    scrollToSection(link)
    onClose()
  }

  return (
    <Wrapper onClick={onClose}>
      <CloseIcon width={40} height={40} />

      {LINKS_MENU.map(link => (
        <Link key={link} onClick={goToSection(link)} isactive={state === link ? 1 : 0}>
          {link}
        </Link>
        ))}
    </Wrapper>
  )
}
