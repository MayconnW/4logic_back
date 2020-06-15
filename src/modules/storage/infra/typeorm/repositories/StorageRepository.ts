import { getRepository, Repository } from 'typeorm';

import IStorageRepository from 'modules/storage/repositories/IStorageRepository';
import ICreateStorageDTO from 'modules/storage/dtos/ICreateStorageDTO';

import Storage from '../entities/Storage';

class StorageRepository implements IStorageRepository {
  private ormRepository: Repository<Storage>;

  constructor() {
    this.ormRepository = getRepository(Storage);
  }

  public async findById(id: string): Promise<Storage | undefined> {
    const found = await this.ormRepository.findOne(id);
    return found || undefined;
  }

  public async create(data: ICreateStorageDTO): Promise<Storage> {
    const { filename, mimetype, originalname } = data;
    const storage = this.ormRepository.create({
      filename,
      original_name: originalname,
      mimetype,
    });
    await this.ormRepository.save(storage);

    return storage;
  }

  public async save(storage: Storage): Promise<Storage> {
    return this.ormRepository.save(storage);
  }
}

export default StorageRepository;
