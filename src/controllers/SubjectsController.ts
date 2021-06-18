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

  async index(req: Request, response: Response) {
    const subjectService = new SubjectsService();
    const subjects = await subjectService.index();
    
    return response.json(subjects);
  }
}

export { SubjectsController }