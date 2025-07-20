import { Component, signal } from '@angular/core';
import { DataTable } from './shared/components/data-table/data-table';

@Component({
  selector: 'app-root',
  imports: [DataTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularTask');
}
