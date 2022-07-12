import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Talent } from './models/talent.model';
import { TalentsService } from './talents.service';

@Controller('talents')
export class TalentsController {
  constructor(private readonly talentsService: TalentsService) {}

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
    try {
      return await this.talentsService.updateTalent(talentId, updatedTalent);
    } catch (err) {
      console.log('ERRORRR', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async deleteTalent(@Param('id') talentId: string): Promise<Talent> {
    return await this.talentsService.deleteTalent(talentId);
  }

  @Post('createtalent')
  async createTalent(@Body() newTalent: Talent): Promise<Talent> {
    try {
      return await this.talentsService.createTalent(newTalent);
    } catch (err) {
      console.log('ERRORRR', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
