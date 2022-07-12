import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TalentModule } from './talents/talents.module';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/ehiring'),
    TalentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
