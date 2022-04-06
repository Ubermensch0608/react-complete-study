import React, { FC } from "react";
import { User } from "./Users";

import { Button } from "components/UI";
import styled from "styled-components";

const OneUser: FC<User> = ({ id, name, age }) => {
  const getIdHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const test = event.target as Element;
  };

  return (
    <UserLi>
      <div>
        <span>{name}</span>
        <span>({age} 세)</span>
      </div>
      <div>
        <Button id={id} onClick={getIdHandler}>
          ❌
        </Button>
      </div>
    </UserLi>
  );
};

const UserLi = styled.li`
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

export default OneUser;
