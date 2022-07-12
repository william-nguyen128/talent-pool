import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TalentModule } from './talents/talents.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/ehiring'),
    TalentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
