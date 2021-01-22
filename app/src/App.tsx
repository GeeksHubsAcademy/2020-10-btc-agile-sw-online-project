import {FunctionComponent, useState} from 'react';
import {createBrowserHistory, History} from 'history';
import Routing from "./routing/Routing";
import Toolbar from "./components/toolbar/Toolbar";

const App: FunctionComponent = () => {
  const [history] = useState<History>(createBrowserHistory());

  return (
      <>
        <Toolbar/>
        <Routing history={history}/>
      </>
  );
};

export default App;
