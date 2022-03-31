import React, { FC, ReactText } from "react";

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
    <div>
      <label htmlFor={labelTitle}>{labelTitle}</label>
      <input
        id={labelTitle}
        type={inputType}
        value={inputValue}
        onChange={getInputTextHandler}
      />
    </div>
  );
};

export default UserInput;
