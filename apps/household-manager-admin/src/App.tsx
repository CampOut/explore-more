import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { HouseholdList } from "./household/HouseholdList";
import { HouseholdCreate } from "./household/HouseholdCreate";
import { HouseholdEdit } from "./household/HouseholdEdit";
import { HouseholdShow } from "./household/HouseholdShow";
import { CorkBoardList } from "./corkBoard/CorkBoardList";
import { CorkBoardCreate } from "./corkBoard/CorkBoardCreate";
import { CorkBoardEdit } from "./corkBoard/CorkBoardEdit";
import { CorkBoardShow } from "./corkBoard/CorkBoardShow";
import { ThreadList } from "./thread/ThreadList";
import { ThreadCreate } from "./thread/ThreadCreate";
import { ThreadEdit } from "./thread/ThreadEdit";
import { ThreadShow } from "./thread/ThreadShow";
import { NoteList } from "./note/NoteList";
import { NoteCreate } from "./note/NoteCreate";
import { NoteEdit } from "./note/NoteEdit";
import { NoteShow } from "./note/NoteShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Household Manager"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Household"
          list={HouseholdList}
          edit={HouseholdEdit}
          create={HouseholdCreate}
          show={HouseholdShow}
        />
        <Resource
          name="CorkBoard"
          list={CorkBoardList}
          edit={CorkBoardEdit}
          create={CorkBoardCreate}
          show={CorkBoardShow}
        />
        <Resource
          name="Thread"
          list={ThreadList}
          edit={ThreadEdit}
          create={ThreadCreate}
          show={ThreadShow}
        />
        <Resource
          name="Note"
          list={NoteList}
          edit={NoteEdit}
          create={NoteCreate}
          show={NoteShow}
        />
      </Admin>
    </div>
  );
};

export default App;
