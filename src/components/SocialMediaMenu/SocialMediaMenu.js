import React from 'react'
import { SOCIAL_MEDIA } from 'constants/constants'

import { ReactComponent as InstagramImage } from 'assets/images/instagram.svg'
import { ReactComponent as LinkedinImage } from 'assets/images/linkedin.svg'
import { ReactComponent as TelegramImage } from 'assets/images/telegram.svg'
import { ReactComponent as GithubImage } from 'assets/images/github.svg'

import { Wrapper, Link } from './styles'

export const SocialMediaMenu = () => {
  return (
    <Wrapper>
      <Link href={SOCIAL_MEDIA.instagram} target='blank'>
        <InstagramImage />
      </Link>

      <Link href={SOCIAL_MEDIA.linkedin} target='blank'>
        <LinkedinImage />
      </Link>

      <Link href={SOCIAL_MEDIA.telegram} target='blank'>
        <TelegramImage />
      </Link>

      <Link href={SOCIAL_MEDIA.github} target='blank'>
        <GithubImage />
      </Link>
    </Wrapper>
  )
}
