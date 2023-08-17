import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 40%;
  left: 0;
  transform: translateY(-50%);
  background: #FFFFFF;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;

  g {
    fill: #000000;
  }
`;

export const Link = styled.a`
  padding: 15px;
  border-radius: 5px;
  transition: 1s ease;

  &:hover {
    background-color: rgba(120, 67, 233, 0.2);
  }
`;
