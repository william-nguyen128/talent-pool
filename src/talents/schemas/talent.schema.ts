import { buildSchema, prop } from '@typegoose/typegoose';
import { Type } from 'class-transformer';
import { IsEmail, IsPhoneNumber, IsUrl, ValidateNested } from 'class-validator';

class Location {
  @prop()
  address: string;

  @prop()
  postalCode: string;

  @prop()
  city: string;

  @prop()
  countryCode: string;

  @prop()
  region: string;
}

class Profile {
  @prop()
  network: string;

  @prop()
  username: string;

  @IsUrl()
  @prop()
  url: string;
}

class Basics {
  @prop({ default: 'Your name', trim: true })
  name: string;

  @prop({ default: 'Your title', trim: true })
  label: string;

  @IsUrl()
  @prop()
  image: string;

  @IsEmail()
  @prop()
  email: string;

  @IsPhoneNumber()
  @prop()
  phone: string;

  @IsUrl()
  @prop()
  url: string;

  @prop()
  summary: string;

  // @ValidateNested()
  // @Type(() => Location)
  @prop()
  location: Location;

  @ValidateNested({ each: true })
  @Type(() => Profile)
  @prop()
  profiles: Profile[];
}

class Work {
  @prop()
  name: string;

  @prop()
  position: string;

  @IsUrl()
  @prop()
  url: string;

  @prop()
  startDate: string;

  @prop()
  endDate: string;

  @prop()
  summary: string;

  @prop({ type: () => [String] })
  highlights: string[];
}

class Volunteer {
  @prop()
  organization: string;

  @prop()
  position: string;

  @IsUrl()
  @prop()
  url: string;

  @prop()
  startDate: string;

  @prop()
  endDate: string;

  @prop()
  summary: string;

  @prop({ type: () => [String] })
  highlights: string[];
}

class Education {
  @prop()
  insititution: string;

  @IsUrl()
  @prop()
  url: string;

  @prop()
  area: string;

  @prop()
  studyType: string;

  @prop()
  startDate: string;

  @prop()
  endDate: string;

  @prop()
  score: string;

  @prop({ type: () => [String] })
  courses: string[];
}

class Award {
  @prop()
  title: string;

  @prop()
  date: string;

  @prop()
  awarder: string;

  @prop()
  summary: string;
}

class Certificate {
  @prop()
  name: string;

  @prop()
  date: string;

  @prop()
  issuer: string;

  @IsUrl()
  @prop()
  url: string;
}

class Publication {
  @prop()
  name: string;

  @prop()
  publisher: string;

  @prop()
  releaseDate: string;

  @IsUrl()
  @prop()
  url: string;

  @prop()
  summary: string;
}

class Skill {
  @prop()
  name: string;

  @prop()
  level: string;

  @prop({ type: () => [String] })
  keywords: string[];
}

class Language {
  @prop()
  language: string;

  @prop()
  fluency: string;
}

class Interest {
  @prop()
  name: string;

  @prop({ type: () => [String] })
  keywords: string[];
}

class Reference {
  @prop()
  name: string;

  @prop()
  reference: string;
}

class Project {
  @prop()
  name: string;

  @prop()
  description: string;

  @prop({ type: () => [String] })
  highlights: string[];

  @prop({ type: () => [String] })
  keywords: string[];

  @prop()
  startDate: string;

  @prop()
  endDate: string;

  @IsUrl()
  @prop()
  url: string;

  @prop({ type: () => [String] })
  roles: string[];

  @prop()
  entity: string;

  @prop()
  type: string;
}

export class Talent {
  @ValidateNested()
  @Type(() => Basics)
  @prop()
  basics: Basics;

  @ValidateNested({ each: true })
  @Type(() => Work)
  @prop()
  work: Work[];

  @ValidateNested({ each: true })
  @Type(() => Volunteer)
  @prop({ type: () => [Volunteer] })
  volunteer: Volunteer[];

  @ValidateNested({ each: true })
  @Type(() => Education)
  @prop({ type: () => [Education] })
  education: Education[];

  @ValidateNested({ each: true })
  @Type(() => Award)
  @prop({ type: () => [Award] })
  awards: Award[];

  @ValidateNested({ each: true })
  @Type(() => Certificate)
  @prop({ type: () => [Certificate] })
  certificates: Certificate[];

  @ValidateNested({ each: true })
  @Type(() => Publication)
  @prop({ type: () => [Publication] })
  publications: Publication[];

  @ValidateNested({ each: true })
  @Type(() => Skill)
  @prop({ type: () => [Skill] })
  skills: Skill[];

  @ValidateNested({ each: true })
  @Type(() => Language)
  @prop({ type: () => [Language] })
  languages: Language[];

  @ValidateNested({ each: true })
  @Type(() => Interest)
  @prop({ type: () => [Interest] })
  interests: Interest[];

  @ValidateNested({ each: true })
  @Type(() => Reference)
  @prop({ type: () => [Reference] })
  references: Reference[];

  @ValidateNested({ each: true })
  @Type(() => Project)
  @prop({ type: () => [Project] })
  projects: Project[];
}

export const TalentSchema = buildSchema(Talent);
