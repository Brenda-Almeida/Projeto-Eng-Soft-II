import { getCustomRepository, Repository } from "typeorm";
import { Registered } from "../models/Registered";
import { RegisteredRepository } from "../repositories/RegisteredRepository";

interface IRegisteredCreate {
  id_student: string;
  id_subject: string;
}

class RegisteredService {
  private registeredRepository: Repository<Registered>;

  constructor() {
    this.registeredRepository = getCustomRepository(RegisteredRepository);
  }

  async create({id_student, id_subject }: IRegisteredCreate) {
    const registered = this.registeredRepository.create({
      id_student,
      id_subject     
      
    });

    await this.registeredRepository.save(registered);

    return registered; 
  }
}

export { RegisteredService }