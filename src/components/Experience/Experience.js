import React from 'react'
import { TitleWithDescription } from '../TitleWithDescription/TitleWithDescription'
import { Container } from '../../styles'
import { Wrapper, WorkWrapper, Work, Title, Description, Label } from './styles'

export const Experience = () => {
  return (
    <Wrapper>
      <Container>
        <TitleWithDescription
          title='professional experience'
          description='Here you will learn about my work'
        />

        <WorkWrapper>
          <Work>
            <Title>Company Name | Front-End developer</Title>

            <Description>
              <Label>- Develop and implement shaders, algorithms and optimize object models for the application lifecycle</Label><br />
              <Label>- Collaborate with the team to develop components and logic for an application for a beauty salon</Label><br />
              <Label>- Create adaptive layouts and React components using Typescript/React with styled components</Label><br />
              <Label>- Style layouts using CSS/Sass and add functionality with CRUD API and data storage in Redux</Label>
            </Description>
          </Work>
        </WorkWrapper>

        <WorkWrapper $justifyContent='flex-end'>
          <Work>
            <Title>Company Name | Front-End developer</Title>

            <Description>
              <Label>- Develop and implement shaders, algorithms and optimize object models for the application lifecycle</Label><br />
              <Label>- Collaborate with the team to develop components and logic for an application for a beauty salon</Label><br />
              <Label>- Create adaptive layouts and React components using Typescript/React with styled components</Label><br />
              <Label>- Style layouts using CSS/Sass and add functionality with CRUD API and data storage in Redux</Label>
            </Description>
          </Work>
        </WorkWrapper>

        <WorkWrapper>
          <Work>
            <Title>Company Name | Front-End developer</Title>

            <Description>
              <Label>- Develop and implement shaders, algorithms and optimize object models for the application lifecycle</Label><br />
              <Label>- Collaborate with the team to develop components and logic for an application for a beauty salon</Label><br />
              <Label>- Create adaptive layouts and React components using Typescript/React with styled components</Label><br />
              <Label>- Style layouts using CSS/Sass and add functionality with CRUD API and data storage in Redux</Label>
            </Description>
          </Work>
        </WorkWrapper>

        <WorkWrapper $justifyContent='flex-end'>
          <Work>
            <Title>Company Name | Front-End developer</Title>

            <Description>
              <Label>- Develop and implement shaders, algorithms and optimize object models for the application lifecycle</Label><br />
              <Label>- Collaborate with the team to develop components and logic for an application for a beauty salon</Label><br />
              <Label>- Create adaptive layouts and React components using Typescript/React with styled components</Label><br />
              <Label>- Style layouts using CSS/Sass and add functionality with CRUD API and data storage in Redux</Label>
            </Description>
          </Work>
        </WorkWrapper>
      </Container>
    </Wrapper>
  )
}
