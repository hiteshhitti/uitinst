import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-datascience',
  imports: [MatCardModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './datascience.component.html',
  styleUrl: './datascience.component.css'
})
export class DatascienceComponent {

}
