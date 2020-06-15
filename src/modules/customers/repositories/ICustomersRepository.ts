import Customer from '../infra/typeorm/entities/Customer';
import ICreateCustomerDTO from '../dtos/ICreateCustomerDTO';

export default interface ICustomersRepository {
  findById(id: string): Promise<Customer | undefined>;
  findByCnpj(cnpj: string): Promise<Customer | undefined>;
  findAll(): Promise<Customer[]>;
  create(data: ICreateCustomerDTO): Promise<Customer>;
  save(customer: Customer): Promise<Customer>;
}
