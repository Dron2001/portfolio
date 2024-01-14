import React from 'react'
import { TitleWithDescription } from 'components/TitleWithDescription/TitleWithDescription'

import { Container } from 'styles'
import { Wrapper, WorkWrapper, Work, Title, Description, Label } from './styles'

export const Experience = () => {
  return (
    <Wrapper id='experience'>
      <Container>
        <TitleWithDescription
          title='professional experience'
          description='Here you will learn about my work'
        />

        <WorkWrapper>
          <Work>
            <Title>My-Cowork | JavaScript developer</Title>

            <Description>
              <Label>- Support company's projects</Label><br />
              <Label>- Implement new features, fix bugs etc</Label><br />
              <Label>- Creating social network (React, Redux, TypeScript)</Label><br />
              <Label>- Creating Web UI Elements- Developing an app (React Native)</Label><br />
              <Label>- Creating react components</Label><br />
              <Label>- Styling layouts using css/sass</Label><br />
              <Label>- Adding functionality by attaching crud api, storing data in redux</Label>
            </Description>
          </Work>
        </WorkWrapper>

        <WorkWrapper $justifyContent='flex-end'>
          <Work>
            <Title>Dual Education Ukraine | JavaScript developer</Title>

            <Description>
              <Label>- Development of web applications using React (Mobx), React Native technologies</Label><br />
              <Label>- Development of mobile applications for Android and IOS using real technology</Label><br />
              <Label>- Working with Wordpress and React</Label><br />
              <Label>- Creation of cross-browser, semantic and correct code</Label><br />
              <Label>- Working with a database (SQL, MySQL)</Label><br />
              <Label>- Integration and editing of scripts on sites</Label>
            </Description>
          </Work>
        </WorkWrapper>

        <WorkWrapper>
          <Work>
            <Title>Decision Mapper | Front-End developer</Title>

            <Description>
              <Label>- Work to support the international trading platform</Label><br />
              <Label>- Participation in the implementation of various modules. Most of them were developed using React with Redux</Label><br />
              <Label>- Participation in the development of methods for analyzing the structure of entire social objects</Label><br />
              <Label>- Developing a secure web application for preparing, sending, and receiving client relationships</Label><br />
              <Label>- Created informational trade blocks of panels with the current price, size, total amount</Label><br />
              <Label>- Information desk of previous transactions and others</Label>
            </Description>
          </Work>
        </WorkWrapper>

        <WorkWrapper $justifyContent='flex-end'>
          <Work>
            <Title>Groxxy | Front-End developer</Title>

            <Description>
              <Label>- Writing shaders, algorithms translation and optimization objects model, implementation and interaction with them in the application life cycle, query processing</Label><br />
              <Label>- Working in a team, involving in developing the сomponents and logic for app beauty salon</Label><br />
              <Label>- Worked by using Typescript/React/Redux + styled components</Label><br />
              <Label>- Creating react components, creating adaptive layouts</Label><br />
              <Label>- Styling layouts using css/sass</Label><br />
              <Label>- Adding functionality by attaching crud api, storing data in redux</Label>
            </Description>
          </Work>
        </WorkWrapper>
      </Container>
    </Wrapper>
  )
}
