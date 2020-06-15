import Customer from 'modules/customers/infra/typeorm/entities/Customer';
import { inject, injectable } from 'tsyringe';
import ICustomersRepository from '../repositories/ICustomersRepository';

@injectable()
export default class GetCustomerByIdService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute(id: string): Promise<Customer | undefined> {
    const result = await this.customersRepository.findById(id);
    return result;
  }
}
