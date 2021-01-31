import {ThreadDAO} from "./ThreadDAO";
import {ThreadDTO} from "../../dto/ThreadDTO";
import {ThreadMapper} from "../../mappers/thread/ThreadMapper";

describe('ThreadDAO tests', () => {
   let threadDAO: ThreadDAO;

   beforeAll(() => {
      threadDAO = new ThreadDAO();
   });

   it('should return all threads in the database', async () => {
      const threads: Array<ThreadDTO> = await threadDAO.fetchThreads();
      expect(threads.length).toBeGreaterThan(0);
   });

   it('should be able to create new thread', async () => {
      const currentThreads: Array<ThreadDTO> = await threadDAO.fetchThreads();

      const threadDTO: ThreadDTO = await ThreadMapper.fromModel({
         title: "New thread title",
         description: "New thread description",
         author: "New thread author"
      });

      threadDAO.addThread(threadDTO)
          .then(() => {
             threadDAO.fetchThreads()
                 .then(threads => expect(threads).toHaveLength(currentThreads.length + 1));
          });
   });

   it('should be able to delete thread', async () => {
      const threadDTO: ThreadDTO = await ThreadMapper.fromModel({
         title: "Thread to delete",
         description: "New thread description",
         author: "New thread author"
      });

      threadDAO.addThread(threadDTO)
          .then(newThread => {
             threadDAO.deleteThread(newThread.id);
          });
   });
});
