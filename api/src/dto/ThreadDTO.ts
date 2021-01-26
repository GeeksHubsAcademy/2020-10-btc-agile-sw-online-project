import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CommentDTO} from "./CommentDTO";

@Entity({name: 'threads'})
export class ThreadDTO {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string;

    @Column()
    public description: string;

    @Column()
    public date: Date;

    @Column()
    public author: string;

    @OneToMany(() => CommentDTO, comment => comment.thread)
    public comments: Comment[];
}
