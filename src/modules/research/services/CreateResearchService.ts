import { inject, injectable } from 'tsyringe';
import Research from 'modules/research/infra/typeorm/entities/Research';
import IResearchRepository from '../repositories/IResearchRepository';
import IResearchCustomerRepository from '../repositories/IResearchCustomersRepository';

interface IRating {
  customer_id: string;
  rating: number;
  reason: string;
}

interface IRequest {
  year: number;
  month: number;
  rating: IRating[];
}

@injectable()
class CreateResearchService {
  constructor(
    @inject('ResearchRepository')
    private researchRepository: IResearchRepository,
    @inject('ResearchCustomersRepository')
    private researchCustomerRepository: IResearchCustomerRepository,
  ) {}

  public async execute({ year, month, rating }: IRequest): Promise<Research> {
    const research = await this.researchRepository.create({
      year,
      month,
      customers: rating,
    });

    const customers = rating.map(item => ({
      customer_id: item.customer_id,
      rating: item.rating,
      reason: item.reason,
      research_id: research.id,
    }));

    await this.researchCustomerRepository.create(customers);

    return research;
  }
}

export default CreateResearchService;
