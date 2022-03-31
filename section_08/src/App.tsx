import NewUser from "components/NewUser/NewUser";
import Users from "components/Users/Users";

import GlobalStyle from "common/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NewUser />
      <Users />
    </>
  );
};

export default App;
