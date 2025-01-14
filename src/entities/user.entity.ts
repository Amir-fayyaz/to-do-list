import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LikeEntity } from './like.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @OneToMany(() => LikeEntity, (like) => like.user)
  likes: LikeEntity[];
}
