import {FunctionComponent, useState} from 'react';
import {createBrowserHistory, History} from 'history';
import Routing from "./routing/Routing";
import AppWrapper from "./components/wrapper/AppWrapper";
import {QueryClient, QueryClientProvider} from 'react-query'

const App: FunctionComponent = () => {
    const [history] = useState<History>(createBrowserHistory());
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <AppWrapper>
                <Routing history={history}/>
            </AppWrapper>
        </QueryClientProvider>
    );
};

export default App;
