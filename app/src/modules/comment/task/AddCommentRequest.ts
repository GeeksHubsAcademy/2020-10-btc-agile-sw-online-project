interface AddCommentRequestData {
    author: string;
    text: string;
    threadId: string;
}

export type AddCommentRequest = AddCommentRequestData;
