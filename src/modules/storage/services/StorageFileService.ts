import { inject, injectable } from 'tsyringe';
import Storage from 'modules/storage/infra/typeorm/entities/Storage';
import IStorageRepository from 'modules/storage/repositories/IStorageRepository';

interface IRequest {
  filename: string;
  originalname: string;
  mimetype: string;
}

@injectable()
export default class StorageFileService {
  constructor(
    @inject('StorageRepository')
    private storageRepository: IStorageRepository,
  ) {}

  public async execute({
    filename,
    originalname,
    mimetype,
  }: IRequest): Promise<Storage> {
    const file = await this.storageRepository.create({
      filename,
      originalname,
      mimetype,
    });

    return file;
  }
}
