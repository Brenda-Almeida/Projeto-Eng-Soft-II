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
}

export { TopicController };
