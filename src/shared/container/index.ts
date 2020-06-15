import { container } from 'tsyringe';

import IResearchRepository from 'modules/research/repositories/IResearchRepository';
import ResearchRepository from 'modules/research/infra/typeorm/repositories/ResearchRepository';

import IResearchCustomersRepository from 'modules/research/repositories/IResearchCustomersRepository';
import ResearchCustomersRepository from 'modules/research/infra/typeorm/repositories/ResearchCustomersRepository';

import IUsersRepository from 'modules/users/repositories/IUsersRepository';
import UsersRepository from 'modules/users/infra/typeorm/repositories/UsersRepository';

import IStorageRepository from 'modules/storage/repositories/IStorageRepository';
import StorageRepository from 'modules/storage/infra/typeorm/repositories/StorageRepository';

import ICustomersRepository from 'modules/customers/repositories/ICustomersRepository';
import CustomersRepository from 'modules/customers/infra/typeorm/repositories/CustomersRepository';

container.registerSingleton<IResearchRepository>(
  'ResearchRepository',
  ResearchRepository,
);

container.registerSingleton<IResearchCustomersRepository>(
  'ResearchCustomersRepository',
  ResearchCustomersRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IStorageRepository>(
  'StorageRepository',
  StorageRepository,
);

container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  CustomersRepository,
);
