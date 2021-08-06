import { getCustomRepository, Repository } from "typeorm";
import { Content } from "../models/content";
import { ContentRepository } from "../repositories/ContentRepository";

interface IContentCreate {
  id: string;
  title: string;
  video_link : string;
  archives : string;
  topics_id : string;
}

class ContentService {
  private contentRepository: Repository<Content>;

  constructor() {
    this.contentRepository = getCustomRepository(ContentRepository);
  }

  async create({id, title, video_link, archives, topics_id }: IContentCreate) {
    const content = this.contentRepository.create({
      id,
      title,
      video_link,
      archives,
      topics_id    
      
    });

    await this.contentRepository.save(content);

    return content; 
  }

  async getContent() {
    const contentRepository = getCustomRepository(ContentRepository);

    const content = contentRepository.find();

    return content;
}
}

export { ContentService }