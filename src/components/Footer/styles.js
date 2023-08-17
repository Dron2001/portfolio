import styled from 'styled-components'
import { COLORS } from 'constants/colors'

import { Container } from 'styles'

export const Wrapper = styled.footer`
  background-color: ${COLORS.black};
  padding: 80px 0;
`;

export const Body = styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Block = styled.div`
  width: 55%;

  &:last-child {
    width: 20%;
  }

  a {
    cursor: pointer;
    margin-right: 20px;
  }
`;

export const Title = styled.h4`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  color: ${COLORS.white};
  margin-bottom: 25px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${COLORS.white};
  line-height: 1.7;
`;
