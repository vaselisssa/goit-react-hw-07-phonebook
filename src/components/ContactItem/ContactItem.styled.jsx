import styled from '@emotion/styled';

export const Contact = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Text = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: space-between;

  font-size: 14px;
  font-weight: 700;
`;

export const DeleteButton = styled.button`
  padding: 2px 10px;
  border: 1px solid #8a9ec1;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #fff;
    background-color: #8a9ec1;
  }
`;
