import styled from 'styled-components'
import { COLORS } from 'constants/colors'

import { ReactComponent as CloseImage } from '../../assets/images/close.svg'

export const Wrapper = styled.header`
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CloseIcon = styled(CloseImage)`
  cursor: pointer;
  position: absolute;
  right: 30px;
  top: 30px;

  svg {
    width: 40px;
    height: 40px;
  }

  path {
    fill: white;
  }
`;

export const Link = styled.div`
  color: ${COLORS.white};
  font-size: 28px;
  margin-bottom: 40px;
  cursor: pointer;
  text-transform: capitalize;
  transition: 0.3s;

  &:hover {
    color: ${COLORS.violet};
  }
`;
