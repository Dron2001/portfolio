import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #7843e9;
  text-transform: uppercase;
  color: #FFFFFF;
  letter-spacing: 1px;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  padding: ${props => props.$padding || '20px 80px'};
  cursor: pointer;
  transition: transform 0.3s;
  display: inline-block;
  font-size: ${props => props.$size || 18}px;

  &:hover {
    transform: translateY(-3px);
  }
`;
