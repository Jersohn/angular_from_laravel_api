import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css',
})
export class EditStudentComponent {
  studentForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    class: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.email, Validators.required]),
  });
  constructor(
    private route: ActivatedRoute,
    private studentService: DataService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.studentService.getStudent(id).subscribe((res: any) => {
        const student = res.message;
        this.studentForm.patchValue({
          name: student.name,
          class: student.class,
          email: student.email,
        });
      });
    } else {
      alert("Aucun ID d'étudiant n'a été fourni.");
    }
  }

  onUpdate() {
    if (this.studentForm.valid) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        const student = this.studentForm.value;
        student.id = id; // Ajoutez l'ID à l'objet student
        this.studentService.updateStudent(student).subscribe(() => {
          // Affichez un message de succès
          alert("L'étudiant a été mis à jour avec succès.");
        });
      } else {
        alert("Aucun ID d'étudiant n'a été fourni.");
      }
    }
  }
}
