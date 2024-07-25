import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AutosModule } from './autos/autos.module';
import { typeORM } from './config/typeORM';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './roles/roles.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORM()),
    UsersModule,
    RolesModule,
    AutosModule,
    LocationModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
