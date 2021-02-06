import {FunctionComponent} from "react";
import {RouteComponentProps} from "react-router";
import CommentListDataContainer from "./CommentListDataContainer";

interface MatchParams {
    id: string;
}


const CommentListScreen: FunctionComponent<RouteComponentProps<MatchParams>> = (
    {
        match
    }
) => {
    return <CommentListDataContainer id={match.params.id}/>
};

export default CommentListScreen;
