import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import Customer from 'modules/customers/infra/typeorm/entities/Customer';
import ResearchCustomers from './ResearchCustomers';

interface ICustomer {
  customer_id: string;
  research_id: string;
  rating: number;
  reason: string;
}

@Entity('research')
class Research {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  month: number;

  @Column()
  year: number;

  @ManyToMany(type => ResearchCustomers)
  @JoinTable()
  customers: ResearchCustomers[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Research;
