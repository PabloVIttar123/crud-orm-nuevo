import { Users } from 'src/users/entities/users.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('location')
export class Location {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  pais: string;
  @Column('text')
  provincia: string;
  @Column('text')
  localidad: string;
  @Column('text')
  direccion: string;
  @OneToMany(() => Users, (user) => user.location)
  user: Users;
}
