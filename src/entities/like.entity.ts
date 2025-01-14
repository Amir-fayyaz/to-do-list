import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { ProductEntity } from './product.entity';

@Entity('like')
export class LikeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  productId: string;

  @ManyToOne(() => UserEntity, (user) => user.likes)
  user: UserEntity;

  @ManyToOne(() => ProductEntity, (product) => product.likes)
  product: ProductEntity;
}
