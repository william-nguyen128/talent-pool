import { buildSchema, prop } from '@typegoose/typegoose';

class FieldValidation {
  static email = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  };

  static phone = (phone) => {
    const re =
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return re.test(phone);
  };
}

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

  @prop()
  url: string;
}

class Basics {
  @prop({ required: [true, 'Name required'], trim: true })
  name!: string;

  @prop({ required: [true, 'Label required'], trim: true })
  label!: string;

  @prop()
  image?: string;

  @prop({
    required: [true, 'Email required'],
    validate: [FieldValidation.email, 'Invalid email address'],
  })
  email!: string;

  @prop({
    required: [true, 'Phone number required'],
    validate: [FieldValidation.phone, 'Invalid phone number'],
  })
  phone!: string;

  @prop()
  url: string;

  @prop()
  summary: string;

  @prop({ type: Location })
  location: Location;

  @prop({ type: () => [Profile] })
  profiles: Profile[];
}

class Work {
  @prop()
  name: string;

  @prop()
  position: string;

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
  @prop({ required: true, type: Basics })
  basics: Basics;

  @prop({ type: () => [Work] })
  work: Work[];

  @prop({ type: () => [Volunteer] })
  volunteer: Volunteer[];

  @prop({ type: () => [Education] })
  education: Education[];

  @prop({ type: () => [Award] })
  awards: Award[];

  @prop({ type: () => [Certificate] })
  certificates: Certificate[];

  @prop({ type: () => [Publication] })
  publications: Publication[];

  @prop({ type: () => [Skill] })
  skills: Skill[];

  @prop({ type: () => [Language] })
  languages: Language[];

  @prop({ type: () => [Interest] })
  interests: Interest[];

  @prop({ type: () => [Reference] })
  references: Reference[];

  @prop({ type: () => [Project] })
  projects: Project[];
}

export const TalentSchema = buildSchema(Talent);
