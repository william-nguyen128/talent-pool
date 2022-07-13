import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from '@nestjs/common';
import { Talent } from './schemas/talent.schema';
import { TalentService } from './talent.service';

@Controller('talent')
export class TalentController {
  constructor(private talentsService: TalentService) {}

  @Get()
  async getAllTalent(): Promise<Talent[]> {
    return await this.talentsService.getTalents();
  }

  @Get(':id')
  async getSingleTalent(@Param('id') talentId: string): Promise<Talent> {
    return await this.talentsService.getTalentById(talentId);
  }

  @Get(':id/basics')
  async getTalentBasics(@Param('id') talentId: string): Promise<Talent> {
    return await this.talentsService.getTalentBasics(talentId);
  }

  @Put(':id')
  async updateTalent(
    @Body() updatedTalent: Talent,
    @Param('id') talentId: string,
  ): Promise<Talent> {
    return await this.talentsService.updateTalent(talentId, updatedTalent);
  }

  @Delete(':id')
  async deleteTalent(@Param('id') talentId: string): Promise<Talent> {
    return await this.talentsService.deleteTalent(talentId);
  }

  @Post('create')
  async createTalent(@Body() newTalent: Talent): Promise<Talent> {
    return await this.talentsService.createTalent(newTalent);
  }
}
