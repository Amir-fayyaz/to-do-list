import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { LikeEntity } from './like.entity';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column()
  price: number;

  @OneToMany(() => LikeEntity, (like) => like.user)
  likes: LikeEntity[];

  // @ManyToOne(() => UserEntity, (user) => user.id)
  // @JoinColumn({ name: 'user_id' })
  // user_id: UserEntity;
}
