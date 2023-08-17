import React from 'react'
import { Wrapper, Title, Line, Description } from './styles'

export const TitleWithDescription = ({ title, description }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <Line />

      <Description>{description}</Description>
    </Wrapper>
  )
}
