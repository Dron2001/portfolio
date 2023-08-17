import React from 'react'
import { TitleWithDescription } from 'components/TitleWithDescription/TitleWithDescription'
import { SubTitleWithDescription } from 'components/SubTitleWithDescription/SubTitleWithDescription'

import dopefolioImage from 'assets/images/dopefolio.jpeg'

import { Container } from 'styles'
import { Wrapper, Row, Left, Right } from './styles'

export const Projects = () => {
  return (
    <Wrapper id='projects'>
      <Container>
        <TitleWithDescription
          title='projects'
          description='Here you will find some of the personal and clients projects that I created with each project containing its own case study'
        />

        <Row>
          <Left>
            <img src={dopefolioImage} alt='dopefolio' />
          </Left>

          <Right>  
            <SubTitleWithDescription
              title='Dopefolio'
              description='Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally'
              buttonLabel='case study'
            />
          </Right>
        </Row>

        <Row>
          <Left>
            <img src={dopefolioImage} alt='dopefolio' />
          </Left>

          <Right>  
            <SubTitleWithDescription
              title='Dopefolio'
              description='Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally'
              buttonLabel='case study'
            />
          </Right>
        </Row>

        <Row>
          <Left>
            <img src={dopefolioImage} alt='dopefolio' />
          </Left>

          <Right>  
            <SubTitleWithDescription
              title='Dopefolio'
              description='Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally'
              buttonLabel='case study'
            />
          </Right>
        </Row>

        <Row>
          <Left>
            <img src={dopefolioImage} alt='dopefolio' />
          </Left>

          <Right>  
            <SubTitleWithDescription
              title='Dopefolio'
              description='Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally'
              buttonLabel='case study'
            />
          </Right>
        </Row>

        <Row>
          <Left>
            <img src={dopefolioImage} alt='dopefolio' />
          </Left>

          <Right>  
            <SubTitleWithDescription
              title='Dopefolio'
              description='Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally'
              buttonLabel='case study'
            />
          </Right>
        </Row>
      </Container>
    </Wrapper>
  )
}
