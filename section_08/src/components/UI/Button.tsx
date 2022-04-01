import styled from "styled-components";

export const Button = styled.button`
  font: inherit;
  border: 1px solid #4f005f;
  background-color: #4f005f;
  color: #fff;
  padding: 0.25rem 1rem;
  cursor: pointer;

  :active,
  :hover {
    background-color: #741188;
    border-color: #741188;
  }

  :focus {
    outline: none;
  }
`;
