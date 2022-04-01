import React, { FC, ReactText } from "react";
import styled from "styled-components";

interface UserInputProps {
  labelTitle: string;
  inputType: string;
  onChangeInputValue: (currentUserInputValue: any) => void;
  inputValue?: string | number | undefined;
}

const UserInput: FC<UserInputProps> = ({
  labelTitle,
  inputType,
  onChangeInputValue,
  inputValue,
}) => {
  const getInputTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;

    onChangeInputValue(currentValue);
  };

  return (
    <StyledInput>
      <label htmlFor={labelTitle}>{labelTitle}</label>
      <input
        id={labelTitle}
        type={inputType}
        value={inputValue}
        onChange={getInputTextHandler}
      />
    </StyledInput>
  );
};

const StyledInput = styled.div`
  > label {
    display: block;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  > input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;

    :focus {
      outline: none;
      border-color: #4f005f;
    }
  }
`;

export { UserInput };
