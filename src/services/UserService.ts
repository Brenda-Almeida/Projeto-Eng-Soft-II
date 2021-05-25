import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";


class UserService
{
    async create(name : string, email: string)
    {
        const usersRepository = getCustomRepository(UserRepository);
        //Verificar se o usuario existe

        const emailExists = await usersRepository.findOne(
            {
                email
            }
        )

        const nameExists = await usersRepository.findOne(
            {
                name
            }
        )

        //Se existir, retornar esse user
        if(emailExists)
        {
            return emailExists;
        }

        if(nameExists)
        {
            return nameExists;
        }
        //Se não existir, salvar no BD
        const user = usersRepository.create({
            email,
        });

        await usersRepository.save(user);

        return user;


    }
}

export {UserService};