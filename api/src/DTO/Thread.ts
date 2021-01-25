import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Comment} from "./Comment";

@Entity({name: 'threads'})
export class Thread {
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

    @OneToMany(() => Comment, comment => comment.thread)
    public comments: Comment[];
}
