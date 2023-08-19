import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #93ccea;
`;

export const Image = styled.img`
  margin: 0 auto;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  text-align: center;
  color: black;
  font-size: 25px;
  font-weight: 500;
`;

export const Text = styled.p`
  margin-bottom: 10px;
  text-align: center;
  color: grey;
  font-size: 18px;
`;
