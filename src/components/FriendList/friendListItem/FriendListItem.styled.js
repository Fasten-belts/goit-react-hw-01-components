import styled from 'styled-components';

export const List = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px 0;
  background-color: #93ccea;
  width: 350px;
`;

const getStatusBcgColor = ({ isOnline }) => {
  return isOnline ? 'green' : 'red';
};

export const Status = styled.span`
  color: ${getStatusBcgColor};
`;
