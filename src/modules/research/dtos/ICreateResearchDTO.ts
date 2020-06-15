interface IRating {
  customer_id: string;
  rating: number;
  reason: string;
}

export default interface ICreateResearchDTO {
  month: number;
  year: number;
  customers: IRating[];
}
