import { getRepository, Repository } from 'typeorm';

import IUsersRepository from 'modules/users/repositories/IUsersRepository';
import ICreateUserDTO from 'modules/users/dtos/ICreateUserDTO';

import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const found = await this.ormRepository.findOne({
      where: { email },
    });
    return found || undefined;
  }

  public async findById(id: string): Promise<User | undefined> {
    const found = await this.ormRepository.findOne(id);
    return found || undefined;
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const { email, name, password, avatar_id } = data;
    const user = this.ormRepository.create({
      email,
      name,
      password,
      avatar_id: avatar_id || undefined,
    });

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;
