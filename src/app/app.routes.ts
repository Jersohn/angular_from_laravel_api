import { Routes } from '@angular/router';
import { EtudiantComponent } from './Pages/etudiant/etudiant.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'etudiant-list', component: EtudiantComponent, title: 'Etudiant' },
  // Ajoutez d'autres routes ici si nécessaire
];
