import { EntityRepository, Repository } from 'typeorm';
import { Registered } from '../models/Registered';

@EntityRepository(Registered)
class RegisteredRepository extends Repository<Registered> {}

export { RegisteredRepository };
