import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-my-course',
  standalone: true,
  imports: [NgFor],
  templateUrl: './student-my-course.component.html',
  styleUrl: './student-my-course.component.css'
})
export class StudentMyCourseComponent {

}
