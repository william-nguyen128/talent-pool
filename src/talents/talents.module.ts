import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Talent, TalentSchema } from './models/talent.model';
import { TalentsController } from './talents.controller';
import { TalentsService } from './talents.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Talent.name, schema: TalentSchema }]),
  ],
  controllers: [TalentsController],
  providers: [TalentsService],
})
export class TalentModule {}
