import { Card } from "components/UI";
import { FC } from "react";
import styled from "styled-components";
import OneUser from "./User";

export interface User {
  id?: string;
  name: string;
  age: number;
}

interface UsersProps {
  users: User[];
}

const Users: FC<UsersProps> = ({ users }) => {
  return (
    <UsersWrapper>
      <UserUl>
        {users.map((user) => (
          <OneUser key={user.id} id={user.id} name={user.name} age={user.age} />
        ))}
      </UserUl>
    </UsersWrapper>
  );
};

const UsersWrapper = styled(Card)`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;
`;

const UserUl = styled.ul`
  list-style: none;
  padding: 1rem;
`;

export default Users;
