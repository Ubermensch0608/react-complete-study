import { FC } from "react";

export interface User {
  id: string;
  name: string;
  age: number | string;
}

interface UsersProps {
  users: User[];
}

const Users: FC<UsersProps> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <span>{user.name}</span>
          <span>({user.age} 세)</span>
        </li>
      ))}
    </ul>
  );
};

export default Users;
