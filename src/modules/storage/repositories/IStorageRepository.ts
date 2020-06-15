import Storage from '../infra/typeorm/entities/Storage';
import ICreateStorageDTO from '../dtos/ICreateStorageDTO';

export default interface IStorageRepository {
  findById(id: string): Promise<Storage | undefined>;
  create(data: ICreateStorageDTO): Promise<Storage>;
  save(storage: Storage): Promise<Storage>;
}
