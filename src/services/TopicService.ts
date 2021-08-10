import { getCustomRepository, Repository } from 'typeorm';
import { Topic } from '../models/Topic';
import { TopicRepository } from "../repositories/TopicRepository";

interface ITopicCreate {
    subject_id: string;
    name: string;
    description: string;
}

class TopicService {
    private topicRepository: Repository<Topic>

    constructor() {
        this.topicRepository = getCustomRepository(TopicRepository);
    }
    async create({ subject_id, name, description }: ITopicCreate) {

        const topic = this.topicRepository.create({
            subject_id,
            name,
            description
        })

        await this.topicRepository.save(topic);
        return topic;
    }

    async getTopics() {

        const topic = this.topicRepository.find()
        
        return topic;
    }  
}


export { TopicService }