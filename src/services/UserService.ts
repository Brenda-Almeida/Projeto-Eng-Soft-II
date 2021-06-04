import { getCustomRepository, Repository } from "typeorm";
import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";

interface IUserCreate {
    name: string;
    email: string;
    password: string;
    type: number;
}

class UserService
{
    private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }
  async create({ email, name, type, password}: IUserCreate) {

    const emailExists = await this.userRepository.findOne({
      email,
    });

    if (emailExists){
      return emailExists;
    }

    const user = this.userRepository.create({
     
      email,
      name,
      type,
      password,
    });

    await this.userRepository.save(user);

    return user; 
  }
}

export {UserService};