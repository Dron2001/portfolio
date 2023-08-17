import styled from 'styled-components'
import { COLORS } from 'constants/colors'

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 26px;
  font-weight: bold;
  color: ${COLORS.dark};
  margin-bottom: 30px;
`;

export const Description = styled.p`
  color: ${COLORS.gray};
  line-height: 1.7;
  font-size: 18px;
  margin-bottom: 40px;
`;
