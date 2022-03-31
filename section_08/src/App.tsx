import { useState } from "react";
import NewUser from "components/NewUser/NewUser";
import Users, { User } from "components/Users/Users";

import GlobalStyle from "common/GlobalStyle";
import ErrorModal from "layout/ErrorModal/ErrorModal";
import { useAppSelector } from "store/hooks";

const DUMMY_USERS = [
  {
    id: "u1",
    name: "종원",
    age: 27,
  },
  {
    id: "u2",
    name: "주연",
    age: 24,
  },
];

const App = () => {
  const [userList, setUserList] = useState<User[]>(DUMMY_USERS);
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);

  const addUserHandler = (newUser: User) => {
    setUserList((prevList) => [newUser, ...prevList]);
  };

  return (
    <>
      <GlobalStyle />
      {isModalOpen && <ErrorModal />}
      <NewUser userInfo={addUserHandler} />
      <Users users={userList} />
    </>
  );
};

export default App;
