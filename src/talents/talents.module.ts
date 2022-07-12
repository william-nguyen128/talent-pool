import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Talent } from './models/talent.model';
import { TalentsController } from './talents.controller';
import { TalentsService } from './talents.service';

@Module({
  imports: [TypegooseModule.forFeature([Talent])],
  controllers: [TalentsController],
  providers: [TalentsService],
})
export class TalentModule {}
