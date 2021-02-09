import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ThreadDTO} from "./ThreadDTO";

@Entity({name: 'comments'})
export class CommentDTO {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public text: string;

    @Column()
    public date: Date;

    @Column()
    public author: string;

    @ManyToOne(() => ThreadDTO, thread => thread.comments)
    public thread: ThreadDTO;
}
