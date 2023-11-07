import { Column, OneToMany, Entity, JoinColumn, Generated,ManyToOne, PrimaryColumn,ValueTransformer, PrimaryGeneratedColumn } from 'typeorm';


@Entity('users')
export class Users {

  // @Generated('increment')
  @PrimaryColumn({name:'id'})
  id: number;

  @Column({ name: 'uuid' })
  uuid: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: "mobile_number" })
  mobileNumber?: string;

  @Column({ name: "email" })
  email: string;

  @Column({ name: "salt" })
  salt: string;

  @Column({ name: "pin" })
  pin: string;

  @Column({ name: "user_name" })
  userName: string;

  @Column({ name: "password_exp" })
  passwordExp: Date

  @Column({ name: "token" })
  token: string

  @Column({ name: 'active' })
  active: boolean;

  @Column({ name: 'is_deleted' })
  isDeleted?: boolean;

  @Column({ name: 'deleted_on' })
  deletedOn?: Date;

  @Column({ name: 'deleted_by' })
  deletedBy?: number;

  @Column({ name: 'created_by' })
  createdBy: number;

  @Column({ name: 'created_on' })
  createdOn: Date;

  @Column({ name: 'updated_by' })
  updatedBy: string;

  @Column({ name: 'updated_on' })
  updatedOn: Date;

  // @Column({ name: 'image' })
  // image: string;
  
}
