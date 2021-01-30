import {ThreadDTO} from "../../dto/ThreadDTO";
import {ThreadModel} from "../../models/ThreadModel";
import {ThreadMapper} from "./ThreadMapper";

describe('ThreadMapper tests', () => {
    it('should return ThreadDTO when create from Model', () => {
        const threadModel: ThreadModel = {
            title: "Text",
            author: "Elías",
            description: "Description"
        };

        ThreadMapper.fromModel(threadModel)
            .then(comment => expect(comment).toBeInstanceOf(ThreadDTO))
    })
})
