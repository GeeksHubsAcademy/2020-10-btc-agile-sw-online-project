import {FunctionComponent} from "react";
import ForumThreadDetailDataContainer from "./ForumThreadDetailDataContainer";
import {RouteComponentProps} from "react-router";

interface MatchParams {
    id: string;
}

const ForumThreadDetailScreen: FunctionComponent<RouteComponentProps<MatchParams>> = (
    {
        match
    }
) => {
    return <ForumThreadDetailDataContainer id={match.params.id}/>;
};

export default ForumThreadDetailScreen;
