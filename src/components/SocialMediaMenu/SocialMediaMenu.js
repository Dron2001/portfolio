import React from 'react'
import { ReactComponent as InstagramImage } from '../../assets/images/instagram.svg'
import { ReactComponent as LinkedinImage } from '../../assets/images/linkedin.svg'
import { ReactComponent as TelegramImage } from '../../assets/images/telegram.svg'
import { ReactComponent as GithubImage } from '../../assets/images/github.svg'
import { Wrapper, Link } from './styles'

export const SocialMediaMenu = () => {
  return (
    <Wrapper>
      <Link href='#'>
        <InstagramImage />
      </Link>

      <Link href='#'>
        <LinkedinImage />
      </Link>

      <Link href='#'>
        <TelegramImage />
      </Link>

      <Link href='#'>
        <GithubImage />
      </Link>
    </Wrapper>
  )
}
