import { getCustomRepository, Repository } from 'typeorm';
import { hash } from 'bcryptjs';
import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';
import AppError from '../errors/AppError';

interface IUserCreate {
    name: string;
    email: string;
    password: string;
    type: number;
}

class UserService {
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = getCustomRepository(UserRepository);
    }

    async create({ email, name, type, password }: IUserCreate) {
        const emailExists = await this.userRepository.findOne({
            email,
        });

        if (emailExists) {
            throw new AppError('Email address already used.');
        }
        const hashedPassword = await hash(password, 8);

        const user = this.userRepository.create({
            email,
            name,
            type,
            password: hashedPassword,
        });

        await this.userRepository.save(user);

        return user;
    }
}

export { UserService };
