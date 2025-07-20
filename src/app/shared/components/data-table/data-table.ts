import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-data-table',
  imports: [],
  templateUrl: './data-table.html',
  styleUrl: './data-table.css',
})
export class DataTable {
  readonly data = input<Product[]>([]);
  readonly columns = input<any[]>([]);

  readonly create = output<Product>();
  readonly update = output<Product>();
  readonly delete = output<number>();
}
