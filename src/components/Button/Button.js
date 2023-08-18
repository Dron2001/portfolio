import React from 'react'

import { Wrapper } from './styles'

export const Button = ({ children, size, padding, ...props }) => {
  return (
    <Wrapper $size={size} $padding={padding} {...props}>
      {children}
    </Wrapper>
  )
}
