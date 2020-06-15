import Customer from 'modules/customers/infra/typeorm/entities/Customer';
import AppError from 'shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICustomersRepository from '../repositories/ICustomersRepository';

interface IRequest {
  name: string;
  responsible_name: string;
  cnpj: string;
}

@injectable()
export default class CreateCustomerService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute({
    name,
    responsible_name,
    cnpj,
  }: IRequest): Promise<Customer | undefined> {
    const cnpjInUse = await this.customersRepository.findByCnpj(cnpj);

    if (cnpjInUse) {
      throw new AppError('Cnpj já cadastrado!');
    }

    const customer = await this.customersRepository.create({
      name,
      responsible_name,
      cnpj,
    });

    return customer;
  }
}
