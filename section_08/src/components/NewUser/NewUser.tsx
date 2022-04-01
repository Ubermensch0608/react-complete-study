import { Card, UserInput, Button } from "components/UI";
import { User } from "components/Users/Users";
import { useAppDispatch } from "store/hooks";
import { FC, useState } from "react";
import { modalActions } from "store";
import styled from "styled-components";

const NewUser: FC<{ userInfo: (newUser: User) => void }> = ({ userInfo }) => {
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState<string>("");
  const [userAge, setUserAge] = useState<string | number>("");

  const submitUserHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge === "") {
      dispatch(modalActions.errorMessage("정보를 모두 기입해주세요."));
      dispatch(modalActions.openModal());
      setUserName("");
      setUserAge("");
      return;
    }

    if (userAge <= 0) {
      dispatch(
        modalActions.errorMessage("알맞는 나이를 기입해주세요.(0세 이상)")
      );
      dispatch(modalActions.openModal());
      setUserName("");
      setUserAge("");
      return;
    }

    const newUser = {
      id: Math.random().toString(),
      name: userName,
      age: userAge,
    };

    userInfo(newUser);
    setUserName("");
    setUserAge("");
  };

  const userNameHandler = (currentUserName: string) => {
    setUserName(currentUserName);
  };

  const userAgeHandler = (currentUserAge: number) => {
    setUserAge(currentUserAge);
  };

  return (
    <NewUserForm>
      <form onSubmit={submitUserHandler}>
        <UserInput
          labelTitle="유저 이름"
          inputType="text"
          inputValue={userName}
          onChangeInputValue={userNameHandler}
        />
        <UserInput
          labelTitle="나이 (세)"
          inputType="number"
          inputValue={userAge}
          onChangeInputValue={userAgeHandler}
        />
        <Button type="submit">사용자 추가</Button>
      </form>
    </NewUserForm>
  );
};

export const NewUserForm = styled(Card)`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
`;

export default NewUser;
