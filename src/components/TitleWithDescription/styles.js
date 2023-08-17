import styled from 'styled-components'
import { COLORS } from 'constants/colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 120px;
`;

export const Title = styled.h2`
  font-size: 36px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${COLORS.dark};
`;

export const Line = styled.div`
  background-color: ${COLORS.violet};
  width: 50px;
  height: 5px;
  border-radius: 5px;
  margin: 30px 0;
`;

export const Description = styled.p`
  color: ${COLORS.grayDescription};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.6;
  max-width: 800px;
`;
