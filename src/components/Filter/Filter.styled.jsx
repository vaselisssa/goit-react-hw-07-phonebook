import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 18px;
  font-weight: 700;
  color: #8a9ec1;
`;

export const FilterInput = styled.input`
  padding: 4px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 14px;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    box-shadow: 0px 0px 4px 2px #8a9ec1;
  }

  &:disabled {
    border: 1px solid #8a9ec1;
    box-shadow: none;
  }
`;
