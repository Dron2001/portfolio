import React from 'react'
import { socialMedia } from 'constants/constants'

import { ReactComponent as InstagramImage } from 'assets/images/instagram.svg'
import { ReactComponent as LinkedinImage } from 'assets/images/linkedin.svg'
import { ReactComponent as TelegramImage } from 'assets/images/telegram.svg'
import { ReactComponent as GithubImage } from 'assets/images/github.svg'

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

          <a href={socialMedia.instagram} target='blank'>
            <InstagramImage />
          </a>

          <a href={socialMedia.linkedin} target='blank'>
            <LinkedinImage />
          </a>

          <a href={socialMedia.telegram} target='blank'>
            <TelegramImage />
          </a>

          <a href={socialMedia.github} target='blank'>
            <GithubImage />
          </a>
        </Block>
      </Body>
    </Wrapper>
  )
}
