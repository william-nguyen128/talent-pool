import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Talent } from './models/talent.model';

@Injectable()
export class TalentsService {
  constructor(
    @InjectModel(Talent.name)
    private readonly talentModel: ReturnModelType<typeof Talent>,
  ) {}

  async getTalents(): Promise<Talent[] | null> {
    return await this.talentModel.find().exec();
  }

  async getTalentById(talentId: string): Promise<Talent> {
    return await this.talentModel.findById(talentId);
  }

  async getTalentBasics(talentId: string): Promise<Talent> {
    return await this.talentModel.findById(talentId, { basics: 1 });
  }

  async updateTalent(talentId: string, updatedTalent: Talent): Promise<Talent> {
    return await this.talentModel.findByIdAndUpdate(talentId, updatedTalent, {
      new: true,
    });
  }

  async deleteTalent(talentId: string): Promise<Talent> {
    return await this.talentModel.findByIdAndDelete(talentId);
  }

  async createTalent(createdTalent: Talent): Promise<Talent> {
    const newTalent = new this.talentModel(createdTalent);
    return await newTalent.save();
  }
}
