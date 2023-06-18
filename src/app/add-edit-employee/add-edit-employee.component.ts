import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss']
})
export class AddEditEmployeeComponent {

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermidiate',
    'Graduate',
    'Post-graduate'
  ]
}
