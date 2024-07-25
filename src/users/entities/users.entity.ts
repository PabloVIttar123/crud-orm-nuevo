import { Location } from 'src/location/entities/location.entity';
import { Role } from 'src/roles/entities/role.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  nombre: string;
  @Column('text')
  apellido: string;
  @Column('text')
  edad: string;
  @DeleteDateColumn()
  @ManyToOne(() => Role, (role) => role.user)
  role: Role;
  @ManyToOne(() => Location, (location) => location.user)
  location: Location;
}
