import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LikeService } from './like.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';

@Controller('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Post()
  create(@Body() createLikeDto: CreateLikeDto) {
    return this.likeService.create(
      createLikeDto.product_id,
      createLikeDto.user_id,
    );
  }

  @Get()
  getAllLikes() {
    return this.likeService.getLike();
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.likeService.remove(+id);
  }
}
