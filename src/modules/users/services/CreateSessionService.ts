import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from 'config/auth';
import AppError from 'shared/errors/AppError';
import User from 'modules/users/infra/typeorm/entities/User';
import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
export default class CreateSessionService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const userFound = await this.usersRepository.findByEmail(email);
    if (!userFound) {
      throw new AppError('User not found', 401);
    }

    const validPassword = await compare(password, userFound.password);
    if (!validPassword) {
      throw new AppError('Password does not match', 401);
    }

    const { secret, expiresIn } = authConfig;
    const token = sign({ id: userFound.id }, secret, {
      subject: userFound.id,
      expiresIn,
    });
    delete userFound.password;

    return { token, user: userFound };
  }
}
