import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LikeEntity } from 'src/entities/like.entity';
import { ProductService } from 'src/product/product.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(LikeEntity)
    private readonly like_repository: Repository<LikeEntity>,
    private readonly UserService: UsersService,
    private readonly ProductService: ProductService,
  ) {}
  create = async (product_id: number, user_id: number) => {
    const user = await this.UserService.findUserById(user_id);

    if (!user) {
      throw new NotFoundException('user not found');
    }

    const product = await this.ProductService.findProductById(product_id);

    if (!product) {
      throw new NotFoundException('product not found');
    }

    try {
      let like = new LikeEntity();

      like.product = product;
      like.user = user;

      await this.like_repository.save(like);

      console.log('liked product successfully');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  getLike = async () => {
    const like = await this.like_repository.find({
      select: ['id', 'product'],
      relations: {
        product: true,
      },
    });

    return like;
  };

  remove(id: number) {
    return `This action removes a #${id} like`;
  }
}
