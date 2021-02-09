import {FunctionComponent} from "react";
import {Route, Router, RouterProps} from "react-router";
import {ROUTE_THREAD_DETAIL, ROUTE_THREADS} from "./Routes";
import ForumThreadListScreen from "../modules/thread/list/ForumThreadListScreen";
import CommentListScreen from "../modules/comment/list/CommentListScreen";

const Routing: FunctionComponent<RouterProps> = (
    {
        history
    }
) => {
    return (
        <Router history={history}>
            <Route path={ROUTE_THREADS} component={ForumThreadListScreen}/>
            <Route path={ROUTE_THREAD_DETAIL} component={CommentListScreen}/>
        </Router>
    );
};

export default Routing;
