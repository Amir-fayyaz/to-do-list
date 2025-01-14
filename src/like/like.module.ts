import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikeEntity } from 'src/entities/like.entity';
import { UsersService } from 'src/users/users.service';
import { ProductService } from 'src/product/product.service';
import { UserEntity } from 'src/entities/user.entity';
import { ProductEntity } from 'src/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LikeEntity, UserEntity, ProductEntity])],
  controllers: [LikeController],
  providers: [LikeService, UsersService, ProductService],
})
export class LikeModule {}
