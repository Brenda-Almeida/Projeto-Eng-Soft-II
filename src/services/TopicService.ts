import { getCustomRepository } from 'typeorm';
import { TopicRepository } from "../repositories/TopicRepository";

interface ITopicCreate {
    subject_id: string;
    name: string;
    description: string;
}

interface ITopicEdit {
    id: string;
    subject_id: string;
    name: string;
    description: string;
}

class TopicService {
    async create({ subject_id, name, description }: ITopicCreate) {
        const topicRepository = getCustomRepository(TopicRepository);

        const topic = topicRepository.create({
            subject_id,
            name,
            description
        })

        await topicRepository.save(topic);
        return topic;
    }

    async edit({ id, subject_id, name, description }: ITopicEdit) {
        const topicRepository = getCustomRepository(TopicRepository);

        const topic = topicRepository.create({
            subject_id,
            name,
            description
        })

        await topicRepository.save(topic);
        return topic;
    }
}


export { TopicService }