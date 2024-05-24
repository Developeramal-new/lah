import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountUpDirective } from '../../common/directives/count-up.directive';

@Component({
  selector: 'lah-home',
  standalone: true,
  imports: [CommonModule, CountUpDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
