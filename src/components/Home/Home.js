import React from 'react'
import { Button } from '../Button/Button'
import { Wrapper, Body, Title, SubTitle } from './styles'

export const Home = () => {
  return (
    <Wrapper>
      <Body>
        <Title>hey, i'm andrii rudiuk</Title>
        <SubTitle>
          A Frontend focused Web Developer building the Frontend of Websites and Web <br />
          Applications that leads to the success of the overall product
        </SubTitle>

        <Button>project</Button>
      </Body>
    </Wrapper>
  )
}
