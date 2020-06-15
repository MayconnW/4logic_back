import Customer from '../infra/typeorm/entities/Customer';

interface ITransformedCustomer extends Customer {
  formatted_created_at: string;
}

export default (list: Customer[]): ITransformedCustomer[] => {
  const result = list.map(item => ({
    ...item,
    formatted_created_at: `${item.created_at
      .getUTCDate()
      .toString()
      .padStart(2, '0')}/${(item.created_at.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${item.created_at.getFullYear()}`,
  }));
  return result;
};
