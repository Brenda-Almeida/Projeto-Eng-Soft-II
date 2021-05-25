import { Request, Response } from "express";

import { SubjectsService } from "../services/SubjectsService";


class SubjectsController {
  async create(request: Request, response: Response){
    const { name, period, status } = request.body;
    const subjectService = new SubjectsService();

    const subject = await subjectService.create({
      name,
      // id_teacher,
      period,
      status,
    })

    return response.json(subject);
  }
}

export { SubjectsController }