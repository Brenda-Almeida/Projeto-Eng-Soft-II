import { Request, Response } from "express";
import { ContentService } from "../services/ContentService";


class ContentController {
  async create(request: Request, response: Response) {
    const { id, title, video_link, archives, topics_id } = request.body;
    const contentService = new ContentService();

    const content = await contentService.create({
      id,
      title,
      video_link,
      archives,
      topics_id
    })

    return response.json(content);
  }

  async getContent(request: Request, response: Response): Promise<Response> {
    const contentService = new ContentService();

    const content = await contentService.getContent();

    return response.status(200).json(content);
  }
}

export { ContentController }