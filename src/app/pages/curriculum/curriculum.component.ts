import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
})
export class CurriculumComponent {
  isHovered = false;
  skills: boolean = false;
  disabledBtn = false;
}
