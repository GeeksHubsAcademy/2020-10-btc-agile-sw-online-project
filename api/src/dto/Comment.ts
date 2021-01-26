import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Thread} from "./Thread";

@Entity({name: 'comments'})
export class Comment {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public text: string;

    @Column()
    public date: Date;

    @Column()
    public author: string;

    @ManyToOne(() => Thread, thread => thread.comments)
    public thread: Thread;
}
