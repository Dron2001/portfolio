import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: #FAFAFA;
  padding: 120px 0;
`

export const WorkWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: ${props => props.$justifyContent || 'flex-start'};
`

export const Work = styled.div`
  width: 47%;
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 30px 28px;
`

export const Title = styled.h3`
  font-size: 26px;
  font-weight: bold;
  color: #111111;
  margin-bottom: 20px;
`;

export const Description = styled.ul``;

export const Label = styled.li`
  color: #666666;
  line-height: 1.3;
  font-size: 18px;
`;
