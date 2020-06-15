import ResearchCustomers from '../infra/typeorm/entities/ResearchCustomers';
import ICreateResearchCustomerDTO from '../dtos/ICreateResearchCustomerDTO';

export default interface IResearchCustomersRepository {
  create(data: ICreateResearchCustomerDTO[]): Promise<ResearchCustomers[]>;
}
