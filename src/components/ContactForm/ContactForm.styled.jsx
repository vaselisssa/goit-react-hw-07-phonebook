import styled from '@emotion/styled';
import { Form as FormikForm, Field } from 'formik';

export const Form = styled(FormikForm)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #8a9ec1;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 700;

  &:hover,
  &:focus,
  &:active {
    color: #fff;
  }
`;

export const Input = styled(Field)`
  padding: 4px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 14px;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    box-shadow: 0px 0px 4px 2px rgba(255, 255, 255, 0.7);
  }
`;

export const ErrorText = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
`;

export const AddButton = styled.button`
  padding: 4px 10px;
  align-self: flex-end;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #8a9ec1;
  }
`;
