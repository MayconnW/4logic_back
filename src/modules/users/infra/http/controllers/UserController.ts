import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import CreateUserService from 'modules/users/services/CreateUserService';
import { container } from 'tsyringe';

import User from '../../typeorm/entities/User';

class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password, avatar_id } = req.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      name,
      email,
      password,
      avatar_id,
    });

    return res.json({ user });
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const repo = getRepository(User);
    const users = await repo.find({ relations: ['avatar'] });

    return res.json({ users });
  }
}

export default new UserController();
