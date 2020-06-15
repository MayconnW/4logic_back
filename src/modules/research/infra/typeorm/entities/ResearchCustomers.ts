import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

interface ICustomer {
  customer_id: string;
  research_id: string;
  rating: number;
  reason: string;
}

@Entity('research_customers')
class Research {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  customer_id: string;

  @Column('uuid')
  research_id: string;

  @Column()
  rating: number;

  @Column()
  reason: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Research;
