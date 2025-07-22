import { Component, input, output, TemplateRef } from '@angular/core';
import { Product } from '../../models/product';
import { TableModule } from 'primeng/table';
import { Column } from '../../models/column';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-data-table',
  imports: [TableModule,NgTemplateOutlet],
  templateUrl: './data-table.html',
  styleUrl: './data-table.css',
})
export class DataTable {
  readonly data = input<Product[]>([]);
  readonly columns = input<Column[]>([]);
  readonly customBodyTemplate = input<TemplateRef<any> | null>(null);

  readonly create = output<Product>();
  readonly update = output<Product>();
  readonly delete = output<number>();

}
