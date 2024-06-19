import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
})
export class AddStudentComponent {
  studentForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    class: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.email, Validators.required]),
  });

  http = inject(HttpClient);
  constructor(private dataService: DataService) {}
  ngOnInit(): void {}
  formValue: any;
  onSave() {
    this.formValue = this.studentForm.value;
    this.dataService.addStudent(this.formValue).subscribe((res: any) => {
      if (res.status == 201) {
        alert(res.message);
        this.studentForm.reset(); // Réinitialisez le formulaire ici
      } else if (res.status == 500) {
        alert(res.message);
      } else {
        alert('une erreur est survenue');
      }
    });
  }
}
