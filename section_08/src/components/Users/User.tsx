import React, { FC } from "react";
import { User } from "./Users";

const OneUser: FC<User> = ({ name, age }) => {
  return (
    <li>
      <span>{name}</span>
      <span>({age} 세)</span>
    </li>
  );
};

export default OneUser;
