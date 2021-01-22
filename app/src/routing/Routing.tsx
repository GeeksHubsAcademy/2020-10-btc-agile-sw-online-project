import {FunctionComponent} from "react";
import {Route, Router, RouterProps} from "react-router";
import {ROUTE_THREADS} from "./Routes";
import ForumThreadListScreen from "../modules/forum/thread/list/ForumThreadListScreen";

const Routing: FunctionComponent<RouterProps> = (
    {
        history
    }
) => {
    return (
        <Router history={history}>
            <Route path={ROUTE_THREADS} component={ForumThreadListScreen}/>
        </Router>
    );
};

export default Routing;
