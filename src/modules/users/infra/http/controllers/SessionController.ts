import { Request, Response } from 'express';
import CreateSessionService from 'modules/users/services/CreateSessionService';
import GetUser from 'modules/users/services/GetUser';
import { container } from 'tsyringe';

class SessionController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const createSessionService = container.resolve(CreateSessionService);

    const { token, user } = await createSessionService.execute({
      email,
      password,
    });

    return res.json({ user, token });
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const getUser = container.resolve(GetUser);
    const { user } = await getUser.execute(req.user.id);
    delete user.password;
    return res.json(user);
  }
}

export default new SessionController();
