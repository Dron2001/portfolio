import styled from 'styled-components'
import { COLORS } from 'constants/colors'

import bgImage from 'assets/images/bg.svg'

import { Container } from 'styles'

export const Wrapper = styled.section`
  background: linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(${bgImage});
  height: 100vh;
  padding: 0 30px;
`;

export const Body = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 65px;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  color: ${COLORS.dark};
  font-weight: bold;
  margin-top: -100px;

  @media only screen and (max-width: 1000px) {
    font-size: 50px;
  }
`;

export const SubTitle = styled.p`
  color: ${COLORS.grayLabel};
  font-size: 20px;
  text-align: center;
  width: 100%;
  line-height: 1.6;
  margin-top: 40px;
  margin-bottom: 50px;
  max-width: 800px;
`;
