import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { LikeEntity } from './entities/like.entity';
import { ProductEntity } from './entities/product.entity';
import { LikeModule } from './like/like.module';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: 'amir8383',
      database: 'tss',
      port: 3306,
      entities: [UserEntity, ProductEntity, LikeEntity],
      synchronize: true,
      // autoLoadEntities: true,
    }),
    LikeModule,
    UsersModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {}
}
