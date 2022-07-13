import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Talent, TalentSchema } from './schemas/talent.schema';
import { TalentController } from './talent.controller';
import { TalentService } from './talent.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Talent.name, schema: TalentSchema }]),
  ],
  controllers: [TalentController],
  providers: [TalentService],
})
export class TalentModule {}
