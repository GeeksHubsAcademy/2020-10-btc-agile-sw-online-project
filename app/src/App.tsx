import {FunctionComponent, useState} from 'react';
import {createBrowserHistory, History} from 'history';
import Routing from "./routing/Routing";

const App: FunctionComponent = () => {
  const [history] = useState<History>(createBrowserHistory());

  return (
      <Routing history={history}/>
  );
};

export default App;
