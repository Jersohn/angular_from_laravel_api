import { Routes } from '@angular/router';
import { EtudiantComponent } from './Pages/etudiant/etudiant.component';
import { HomeComponent } from './Pages/home/home.component';
import { AddStudentComponent } from './Pages/add-student/add-student.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'etudiant-list', component: EtudiantComponent, title: 'Etudiant' },
  {
    path: 'etudiant-add',
    component: AddStudentComponent,
    title: 'ajout-etudiant',
  },
  // Ajoutez d'autres routes ici si nécessaire
];
