import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ nullable: true })
  projectUrl: string;

  @Column({ nullable: true })
  githubUrl: string;

  @Column('simple-array', { nullable: true })
  technologies: string[];

  @CreateDateColumn()
  createdAt: Date;
}
