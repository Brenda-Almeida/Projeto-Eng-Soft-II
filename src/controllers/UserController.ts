import {Request, Response} from "express";
import { UserService } from "../services/UserService";

class UserController
{
    async create(request: Request, response: Response): Promise<Response>
    {
        const {email} = request.body;
        const {name} = request.body;
        const {type} = request.body;
        const {password} = request.body;
        
        const userService = new UserService();

        const user = await userService.create({email, name, type, password});

        return response.json(user);
    }
}

export {UserController};