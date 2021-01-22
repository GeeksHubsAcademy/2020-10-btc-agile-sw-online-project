import {FunctionComponent, useState} from 'react';
import {createBrowserHistory, History} from 'history';
import Routing from "./routing/Routing";
import AppWrapper from "./components/wrapper/AppWrapper";

const App: FunctionComponent = () => {
    const [history] = useState<History>(createBrowserHistory());

    return (
        <AppWrapper>
            <Routing history={history}/>
        </AppWrapper>
    );
};

export default App;
