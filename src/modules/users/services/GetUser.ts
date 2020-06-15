import { compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import authConfig from 'config/auth';
import AppError from 'shared/errors/AppError';
import User from 'modules/users/infra/typeorm/entities/User';
import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  token: string;
}

interface IResponse {
  user: User;
}

@injectable()
export default class CreateSessionService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(id: string): Promise<IResponse> {
    const userFound = await this.usersRepository.findById(id);
    if (!userFound) {
      throw new AppError('User not found', 401);
    }

    return { user: userFound };
  }
}
