import styled from 'styled-components'

export const Wrapper = styled.section`
  padding: 120px 30px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 130px;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    margin-top: 80px;
  }
`;

export const Left = styled.div`
  width: 47%;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;

    @media only screen and (max-width: 1000px) {
      width: 80%;
      margin-bottom: 30px;
    }

    @media only screen and (max-width: 750px) {
      width: 100%;
    }
  }
`;

export const Right = styled.div`
  width: 47%;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    display: flex;
    text-align: center;
  }
`;
