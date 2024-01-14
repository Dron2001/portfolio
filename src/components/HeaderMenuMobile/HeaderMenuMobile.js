import React from 'react'
import { LINKS_MENU } from 'constants/constants'

import { Wrapper, CloseIcon, Link } from './styles.js'

export const HeaderMenuMobile = ({ onClose }) => {
  return (
    <Wrapper onClick={onClose}>
      <CloseIcon width={40} height={40} />

      {LINKS_MENU.map(link => <Link key={link}>{link}</Link>)}
    </Wrapper>
  )
}
