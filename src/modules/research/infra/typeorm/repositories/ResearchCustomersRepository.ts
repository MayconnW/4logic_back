import { getRepository, Repository } from 'typeorm';

import IResearchCustomerRepository from 'modules/research/repositories/IResearchCustomersRepository';
import ICreateResearchCustomerDTO from 'modules/research/dtos/ICreateResearchCustomerDTO';

import ResearchCustomer from '../entities/ResearchCustomers';

class ResearchRepository implements IResearchCustomerRepository {
  private ormRepository: Repository<ResearchCustomer>;

  constructor() {
    this.ormRepository = getRepository(ResearchCustomer);
  }

  public async create(
    data: ICreateResearchCustomerDTO[],
  ): Promise<ResearchCustomer[]> {
    const research = this.ormRepository.create(data);
    await this.ormRepository.save(research);

    return research;
  }
}

export default ResearchRepository;
