import { EntityRepository, Repository } from 'typeorm';
import { Content } from '../models/Content';

@EntityRepository(Content)
class ContentRepository extends Repository<Content> {}

export { ContentRepository };
