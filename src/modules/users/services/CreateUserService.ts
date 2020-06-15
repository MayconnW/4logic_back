import { hash } from 'bcryptjs';
import User from 'modules/users/infra/typeorm/entities/User';
import AppError from 'shared/errors/AppError';
import IStorageRepository from 'modules/storage/repositories/IStorageRepository';
import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  avatar_id: string;
}

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('StorageRepository')
    private storageRepository: IStorageRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
    avatar_id,
  }: IRequest): Promise<User | undefined> {
    const emailAlreadyTaken = await this.usersRepository.findByEmail(email);

    if (emailAlreadyTaken) {
      throw new AppError('Email already taken');
    }

    if (avatar_id) {
      const avatarExist = await this.storageRepository.findById(avatar_id);
      if (!avatarExist) {
        throw new AppError('Informed avatar_id does not exist');
      }
    }

    const cryptedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: cryptedPassword,
      avatar_id,
    });

    return user;
  }
}
