import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home, data: { animation: 'HomePage' } },
  { path: 'about', component: About, data: { animation: 'AboutPage' } },
  { path: 'skills', component: Skills, data: { animation: 'SkillsPage' } },
  { path: 'projects', component: Projects, data: { animation: 'ProjectsPage' } },
  { path: 'contact', component: Contact, data: { animation: 'ContactPage' } }
];