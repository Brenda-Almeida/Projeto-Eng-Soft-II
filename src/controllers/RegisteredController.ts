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
  async getRegistered(request: Request, response: Response): Promise<Response> {
  
    const registeredService = new RegisteredService();
  
    const registers = await registeredService.getRegisters();
  
    return response.status(200).json(registers);
  }

}

export { RegisteredController }