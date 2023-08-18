import React from 'react'
import { Button } from 'components/Button/Button'
import { scrollToSection } from 'utils/basic'

import { Wrapper, Body, Title, SubTitle } from './styles'

export const Home = () => {
  return (
    <Wrapper id='home'>
      <Body>
        <Title>hey, i'm andrii rudiuk</Title>

        <SubTitle>
          A Frontend focused Web Developer building the Frontend of Websites and Web
          Applications that leads to the success of the overall product
        </SubTitle>

        <Button onClick={() => scrollToSection('projects')}>projects</Button>
      </Body>
    </Wrapper>
  )
}
