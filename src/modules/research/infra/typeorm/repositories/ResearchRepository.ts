import { getRepository, Repository } from 'typeorm';

import IResearchRepository from 'modules/research/repositories/IResearchRepository';
import ICreateResearchDTO from 'modules/research/dtos/ICreateResearchDTO';

import Research from '../entities/Research';

class ResearchRepository implements IResearchRepository {
  private ormRepository: Repository<Research>;

  constructor() {
    this.ormRepository = getRepository(Research);
  }

  public async create(data: ICreateResearchDTO): Promise<Research> {
    const research = this.ormRepository.create(data);
    await this.ormRepository.save(research);

    return research;
  }

  public async findAll(): Promise<Research[]> {
    return this.ormRepository.find();
  }
}

export default ResearchRepository;
