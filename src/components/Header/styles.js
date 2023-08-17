import styled from 'styled-components'
import { Container } from '../../styles'

export const Wrapper = styled.header`
  box-shadow: 0 10px 100px rgba(0,0,0, 0.1);
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  width: 100%;
  position: fixed;
  top: 0;
`;

export const Body = styled(Container)`
  max-width: 1350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.span`
  color: #333333;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.li`
  font-size: 16px;
  color: #333333;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  margin-left: 50px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #7843e9;
  }
`;
