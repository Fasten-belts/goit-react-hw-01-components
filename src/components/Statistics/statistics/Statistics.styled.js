import styled from 'styled-components';

export const Stats = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
  justify-content: space-between;

  /* :hover {
    background-color: black;
    color: white;
  } */
`;

export const Section = styled.section`
  padding: 10px;
  background-color: #5874af;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
`;
