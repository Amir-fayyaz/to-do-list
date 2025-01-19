import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Posts')
export class PostEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({nullable : false})
    title : string;

    @Column({nullable : false , default : 'No description yet'})
    description : string;

    @Column({default : false})
    completed : Boolean;
}
