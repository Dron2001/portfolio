import styled from 'styled-components'
import { Container } from '../../styles'

export const Wrapper = styled.footer`
  background-color: #000000;
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

  img {
    cursor: pointer;
    margin-right: 20px;
  }
`;

export const Title = styled.h4`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  color: #FFFFFF;
  margin-bottom: 25px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #FFFFFF;
  line-height: 1.7;
`;
