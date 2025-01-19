import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { PostEntity } from './entities/post.entity';
import { dbConfig } from './helpers/env.constants';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: dbConfig.type,
      host: dbConfig.host  as string,
      username: dbConfig.username as string,
      password: dbConfig.password as string,
      database: dbConfig.database as string,
      port: dbConfig.port as number,
      entities: [PostEntity],
      // synchronize: true,
      // autoLoadEntities: true,
    }),
    PostsModule,
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {}
}
