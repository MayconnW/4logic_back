import Research from '../infra/typeorm/entities/Research';
import ICreateResearchDTO from '../dtos/ICreateResearchDTO';

export default interface IResearchRepository {
  create(data: ICreateResearchDTO): Promise<Research>;
  findAll(): Promise<Research[]>;
}
