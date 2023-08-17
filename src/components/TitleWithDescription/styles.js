import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 120px;
`;

export const Title = styled.h2`
  font-size: 36px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #111111;
`;

export const Line = styled.div`
  background-color: #7843e9;
  width: 50px;
  height: 5px;
  border-radius: 5px;
  margin: 30px 0;
`;

export const Description = styled.p`
  color: #555444;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.6;
  max-width: 800px;
`;
