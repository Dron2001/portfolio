import styled from 'styled-components'

import { COLORS } from 'constants/colors'

export const Wrapper = styled.section`
  padding: 120px 30px;
  background-color: ${COLORS.white2};
`;

export const Bottom = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const AboutMe = styled.div`
  width: 47%;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Skills = styled.div`
  width: 47%;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    margin-top: 80px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Skill = styled.div`
  color: ${COLORS.gray};
  font-weight: 600;
  background: rgba(153, 153, 153, 0.2);
  border-radius: 5px;
  margin-right: 20px;
  font-size: 18px;
  padding: 8px 28px;
  margin-bottom: 20px;
`;
