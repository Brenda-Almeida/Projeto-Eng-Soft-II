import { Request, Response } from "express";

import { RegisteredService } from "../services/RegisteredService";


class RegisteredController {
  async create(request: Request, response: Response){
    const { id_student, id_subject} = request.body;
    const registeredService = new RegisteredService();

    const registered = await registeredService.create({
      id_student,
      id_subject
    })

    return response.json(registered);
  }
}

export { RegisteredController }