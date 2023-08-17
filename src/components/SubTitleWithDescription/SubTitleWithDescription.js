import React from 'react'
import { Button } from '../Button/Button'
import { Wrapper, Title, Description } from './styles'

export const SubTitleWithDescription = ({ title, description, buttonLabel }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <Description>{description}</Description>

      <Button size={14} padding='20px 40px'>{buttonLabel}</Button>
    </Wrapper>
  )
}
