import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-python',
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './python.component.html',
  styleUrl: './python.component.css'
})
export class PythonComponent {

}
