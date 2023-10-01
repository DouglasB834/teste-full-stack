import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Product } from "./product.entitie";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // @OneToMany(() => Product, (Product) => Product.user, {
  //   cascade: true,
  // })
  // product: Product[];
}
