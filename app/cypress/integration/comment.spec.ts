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

   it('Delete comment', () => {
      commentListPage.visit();
      commentListPage.deleteComment();
   });
});
