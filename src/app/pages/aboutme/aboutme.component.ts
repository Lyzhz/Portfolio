import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {
  isHovered = false;
  skills: boolean = false;
  disabledBtn = false;

    showKnowledges() {
    this.skills = true;
    this.disabledBtn = true;
    }
}
