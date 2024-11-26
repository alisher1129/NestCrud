import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

@OneToMany(()=>Product , (product)=> product.company  , { onDelete: "CASCADE"} )
  product: Product[];
}
