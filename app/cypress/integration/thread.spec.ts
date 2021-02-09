import {ThreadListPage} from "../pages/thread/ThreadListPage";

describe('Thread module tests', () => {
    let threadListPage: ThreadListPage;

    before(() => {
        threadListPage = new ThreadListPage();
    })

    it('Go to thread detail', () => {
       threadListPage.visit();
       threadListPage.goToThreadDetail();
    });

    it('Create new thread', () => {
        threadListPage.visit();
        threadListPage.addThread();
    });

    it('Delete thread', () => {
        threadListPage.visit();
        threadListPage.deleteThread();
    })
});
