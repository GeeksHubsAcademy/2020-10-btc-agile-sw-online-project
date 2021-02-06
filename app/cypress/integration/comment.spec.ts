import {CommentListPage} from "../pages/comment/CommentListPage";

describe('Comment module tests', () => {
   let commentListPage: CommentListPage;

   before(() => {
      commentListPage = new CommentListPage();
   });

   it('Add comment', () => {
      commentListPage.visit();
      commentListPage.addComment();
   });

   it.only('Delete comment', () => {
      commentListPage.visit();
      commentListPage.deleteComment();
   });
});
