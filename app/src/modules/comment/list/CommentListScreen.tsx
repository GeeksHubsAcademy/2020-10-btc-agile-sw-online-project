import {FunctionComponent} from "react";
import {RouteComponentProps} from "react-router";
import CommentListDataContainer from "./CommentListDataContainer";

interface MatchParams {
    threadId: string;
}


const CommentListScreen: FunctionComponent<RouteComponentProps<MatchParams>> = (
    {
        match
    }
) => {
    return <CommentListDataContainer id={match.params.threadId}/>
};

export default CommentListScreen;
