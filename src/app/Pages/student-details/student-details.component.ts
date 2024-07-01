import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css',
})
export class StudentDetailsComponent {
  studentData: any = {};

  http = inject(HttpClient);
  constructor(
    private dataservice: DataService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getStudentData();
  }

  getStudentData() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dataservice.getStudent(id).subscribe((res: any) => {
        this.studentData = res.message;
      });
    }
  }
}
