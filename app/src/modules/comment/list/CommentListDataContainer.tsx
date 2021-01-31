import {FunctionComponent} from "react";

interface CommentListDataContainerProps {
    id: string;
}

const CommentListDataContainer: FunctionComponent<CommentListDataContainerProps> = (
    {
        id
    }
) => {
    return <p>CommentListDataContainer</p>
};

export default CommentListDataContainer;
