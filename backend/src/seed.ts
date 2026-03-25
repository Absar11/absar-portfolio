import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProjectsService } from './projects/projects.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './projects/project.entity';
import { Repository } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const projectsService = app.get(ProjectsService);
  
  // Directly get repository to clear table
  const moduleRef = app.select(AppModule);
  // This is a bit complex for a script, better to just use the service to find and remove if needed, 
  // but for a seed script we can just use a raw query or similar.
  // Actually, I'll just use the projectsService to find all and remove them.
  
  const existingProjects = await projectsService.findAll();
  console.log(`Cleaning up ${existingProjects.length} existing projects...`);
  for (const p of existingProjects) {
    await projectsService.remove(p.id);
  }

  const sampleProjects = [
    {
      title: 'Mediqlyn - Doctor Consultation Platform',
      description: 'Built a full-stack doctor consultation platform using MERN stack with secure authentication and role-based dashboards. Implemented appointment booking workflows and optimized frontend performance.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind', 'JWT'],
      projectUrl: 'https://mediqlyn-eqmz.vercel.app/',
      githubUrl: 'https://github.com/absar-ahmad/mediqlyn',
    },
    {
      title: 'StudyNotion - Online Learning Platform',
      description: 'Developed a responsive learning platform frontend using React and Redux state management. Implemented secure authentication and session management using JWT.',
      technologies: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      projectUrl: 'https://study-notion-frontend-pink.vercel.app/',
      githubUrl: 'https://github.com/absar-ahmad/studynotion',
    },
    {
      title: 'Wave - Music App',
      description: 'Designed and developed "Wave" — a lightweight, elegant music player using HTML, CSS, and vanilla JavaScript; focused on delivering a minimalistic UI with smooth user interaction. Implemented core playback functionalities including play, pause, next, previous, and shuffle features.',
      technologies: ['HTML', 'CSS', 'Javascript'],
      projectUrl: 'https://github.com/Absar11/Music-App-Wave', // No live link provided, using github for both or just leaving blank if not available
      githubUrl: 'https://github.com/Absar11/Music-App-Wave',
    },
  ];

  console.log('Seeding Absar\'s updated projects...');
  for (const project of sampleProjects) {
    await projectsService.create(project);
    console.log(`Created project: ${project.title}`);
  }

  console.log('Seeding complete!');
  await app.close();
}

bootstrap();
