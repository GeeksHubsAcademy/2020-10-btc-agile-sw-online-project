import {FunctionComponent} from "react";
import ForumThreadDetailView from "./ForumThreadDetailView";

interface ForumThreadDetailDataContainerProps {
    id: string;
}

const ForumThreadDetailDataContainer: FunctionComponent<ForumThreadDetailDataContainerProps> = (
    {
        id
    }
) => {
    return <ForumThreadDetailView/>
};

export default ForumThreadDetailDataContainer;
