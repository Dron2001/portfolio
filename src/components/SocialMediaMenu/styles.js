import styled from 'styled-components'

import { COLORS } from 'constants/colors'

export const Wrapper = styled.div`
  position: fixed;
  top: 35%;
  right: 0;
  transform: translateY(-50%);
  background: ${COLORS.white};
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;

  g {
    fill: ${COLORS.black};
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }

  @media only screen and (max-width: 1000px) {
    top: 124px;
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
