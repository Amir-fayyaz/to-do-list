import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from 'src/entities/post.entity';
import { ILike, Repository } from 'typeorm';
import { Post } from 'src/types/Post.type';
import { NotFound } from 'src/types/NotFound.interface';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly Post_Repository: Repository<PostEntity>,
  ) {}

  create = async (createPostDto: CreatePostDto) => {
    try {
      const new_post: Post = this.Post_Repository.create(createPostDto);

      await this.Post_Repository.save(new_post);

      return new_post;
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  };

  findAll = async (): Promise<Post[] | null> => {
    return await this.Post_Repository.find();
  };

  findOne = async (id: number): Promise<Post | NotFound> => {
    const post: Post = await this.Post_Repository.findOne({
      where: { id: id },
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return post;
  };

  update = async (
    id: number,
    updatePostDto: UpdatePostDto,
  ): Promise<Post | NotFound> => {
    const post: Post = await this.Post_Repository.findOne({
      where: {
        id: id,
      },
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    try {
      post.title = updatePostDto.title;
      post.description = updatePostDto.description;

      await this.Post_Repository.save(post);

      return post;
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  };

  remove = async (id: number): Promise<number | NotFound> => {
    const post: Post = await this.Post_Repository.findOne({
      where: {
        id: id,
      },
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    try {
      await this.Post_Repository.remove(post);

      return post.id;
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  };
}
