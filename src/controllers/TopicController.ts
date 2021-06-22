import { Request, Response } from 'express';
import { TopicService } from '../services/TopicService';

class TopicController {
    async create(request: Request, response: Response): Promise<Response> {
        const { subject_id, name, description } = request.body;

        const topicService = new TopicService();

        const topic = await topicService.create({
            subject_id,
            name,
            description,
        });

        return response.json(topic);
    }

    async getTopics(request: Request, response: Response): Promise<Response> {
        const topicService = new TopicService();

        const topic = await topicService.getTopics();

        return response.status(200).json(topic);
    }
}

export { TopicController };
