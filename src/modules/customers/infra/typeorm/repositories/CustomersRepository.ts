import { getRepository, Repository } from 'typeorm';

import ICustomersRepository from 'modules/customers/repositories/ICustomersRepository';
import ICreateCustomerDTO from 'modules/customers/dtos/ICreateCustomerDTO';

import Customer from '../entities/Customer';

class CustomersRepository implements ICustomersRepository {
  private ormRepository: Repository<Customer>;

  constructor() {
    this.ormRepository = getRepository(Customer);
  }

  public async findByCnpj(cnpj: string): Promise<Customer | undefined> {
    const found = await this.ormRepository.findOne({
      where: { cnpj },
    });
    return found || undefined;
  }

  public async findById(id: string): Promise<Customer | undefined> {
    const found = await this.ormRepository.findOne(id);
    return found || undefined;
  }

  public async findAll(): Promise<Customer[]> {
    return this.ormRepository.find();
  }

  public async create(data: ICreateCustomerDTO): Promise<Customer> {
    const { name, responsible_name, cnpj } = data;
    const customer = this.ormRepository.create({
      name,
      responsible_name,
      cnpj,
    });
    await this.ormRepository.save(customer);

    return customer;
  }

  public async save(customer: Customer): Promise<Customer> {
    return this.ormRepository.save(customer);
  }
}

export default CustomersRepository;
