import React from 'react'
import { Wrapper } from './styles'

export const Button = ({ children, size, padding }) => {
  return (
    <Wrapper $size={size} $padding={padding}>
      {children}
    </Wrapper>
  )
}
