import { Request, Response } from 'express';
import CreateCustomerService from 'modules/customers/services/CreateCustomerService';
import ListAllCustomersService from 'modules/customers/services/ListAllCustomersService';
import GetCustomerByIdService from 'modules/customers/services/GetCustomerByIdService';
import transform from 'modules/customers/transformers/customersListTransform';
import { container } from 'tsyringe';

// import Customer from '../../typeorm/entities/Customer';

class CustomersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, responsible_name, cnpj } = req.body;

    const createCustomerService = container.resolve(CreateCustomerService);

    const customer = await createCustomerService.execute({
      name,
      responsible_name,
      cnpj,
    });

    return res.json(customer);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const listAllCustomersService = container.resolve(ListAllCustomersService);
    const customers = await listAllCustomersService.execute();
    const t = transform(customers);

    return res.json({ customers: t });
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const getCustomerByIdService = container.resolve(GetCustomerByIdService);
    const customer = await getCustomerByIdService.execute(id);
    return res.json(customer);
  }
}

export default new CustomersController();
