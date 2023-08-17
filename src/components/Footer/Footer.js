import React from 'react'
import instagramImage from '../../assets/images/instagram.svg'
import linkedinImage from '../../assets/images/linkedin.svg'
import telegramImage from '../../assets/images/telegram.svg'
import githubImage from '../../assets/images/github.svg'
import { Wrapper, Body, Block, Title, Description } from './styles'

export const Footer = () => {
  return (
    <Wrapper>
      <Body>
        <Block>
          <Title>andrii rudiuk</Title>

          <Description>
            A Frontend focused Web Developer building the Frontend of Websites and<br />
            Web Applications that leads to the success of the overall product
          </Description>
        </Block>

        <Block>
          <Title>social</Title>

          <img src={instagramImage} alt='instagram' />
          <img src={linkedinImage} alt='linkedin' />
          <img src={telegramImage} alt='telegram' />
          <img src={githubImage} alt='github' />
        </Block>
      </Body>
    </Wrapper>
  )
}
