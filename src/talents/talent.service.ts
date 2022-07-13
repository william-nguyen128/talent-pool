import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Talent } from './schemas/talent.schema';

@Injectable()
export class TalentService {
  constructor(
    @InjectModel('Talent')
    private talentModel: ReturnModelType<typeof Talent>,
  ) {}

  async getTalents(): Promise<Talent[]> {
    return this.talentModel.find().exec();
  }

  async getTalentById(talentId: string): Promise<Talent> {
    return this.talentModel.findById(talentId);
  }

  async getTalentBasics(talentId: string): Promise<Talent> {
    return this.talentModel.findById(talentId, { basics: 1 });
  }

  async updateTalent(talentId: string, updatedTalent: Talent): Promise<Talent> {
    return this.talentModel.findByIdAndUpdate(talentId, updatedTalent, {
      new: true,
    });
  }

  async deleteTalent(talentId: string): Promise<Talent> {
    return this.talentModel.findByIdAndDelete(talentId);
  }

  async createTalent(createdTalent: Talent): Promise<Talent> {
    const newTalent = new this.talentModel(createdTalent);
    return newTalent.save();
  }
}
