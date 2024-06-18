import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css',
})
export class EtudiantComponent {
  studentList: any[] = [];
  http = inject(HttpClient);
  constructor(private dataservice: DataService) {}
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.dataservice.getStudents().subscribe((res: any) => {
      this.studentList = res.message;
    });
  }
}
