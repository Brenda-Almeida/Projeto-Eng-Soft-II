import { getCustomRepository, Repository } from "typeorm";
import { Subject } from "../models/Subject";
import { SubjectRepository } from "../repositories/SubjectRepository";

interface ISubjectCreate {
  name: string;
  // id_teacher?: string;
  period: string;
  status: string;
}

class SubjectsService {
  private subjectRepository: Repository<Subject>;

  constructor() {
    this.subjectRepository = getCustomRepository(SubjectRepository);
  }
  async create({ name, period, status }: ISubjectCreate) {
    const subject = this.subjectRepository.create({
      name,
      // id_teacher,
      period,
      status
    });

    await this.subjectRepository.save(subject);

    return subject; 
  }

  async index() {
    const subjects = await this.subjectRepository.find();

    return subjects;
  }
}

export { SubjectsService }