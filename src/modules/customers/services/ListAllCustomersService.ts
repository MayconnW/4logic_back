import Customer from 'modules/customers/infra/typeorm/entities/Customer';
import AppError from 'shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICustomersRepository from '../repositories/ICustomersRepository';

@injectable()
export default class ListAllCustomersService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute(): Promise<Customer[]> {
    const result = await this.customersRepository.findAll();
    return result;
  }
}
