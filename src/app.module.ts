import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
   
    TypeOrmModule.forRoot({
      type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'mahesh',
    password: 'mahesh',
    database: 'mahesh',
    logging: true,
    autoLoadEntities: true,
    synchronize: false,
    //entities: [__dirname + '/modules/**/*{entity.ts,entity.js}'],
  }),
UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
