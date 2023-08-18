import styled from 'styled-components'
import { COLORS } from 'constants/colors'

export const Wrapper = styled.section`
  background-color: ${COLORS.white2};
  padding: 120px 30px;
`

export const WorkWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: ${props => props.$justifyContent || 'flex-start'};
`

export const Work = styled.div`
  width: 47%;
  background-color: ${COLORS.white};
  border-radius: 5px;
  padding: 30px 28px;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`

export const Title = styled.h3`
  font-size: 26px;
  font-weight: bold;
  color: ${COLORS.dark};
  margin-bottom: 20px;
`;

export const Description = styled.ul``;

export const Label = styled.li`
  color: ${COLORS.gray};
  line-height: 1.3;
  font-size: 18px;
`;
