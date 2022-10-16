import styled from "styled-components";

export const DefaultButton = styled.button`
  cursor: pointer;
  padding: 12px 24px;
  outline: none;
  border-radius: 3px;
  border: none;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.2s linear;
  font-weight: 400;

  :hover {
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }
`;
