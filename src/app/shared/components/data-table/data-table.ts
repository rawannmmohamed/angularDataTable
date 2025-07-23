import { Component, input, output, TemplateRef } from '@angular/core';
import { Product } from '../../models/product';
import { Table, TableModule } from 'primeng/table';
import { Column } from '../../models/column';
import { NgTemplateOutlet } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-data-table',
  imports: [
    TableModule,
    NgTemplateOutlet,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FormsModule
  ],
  templateUrl: './data-table.html',
  styleUrl: './data-table.css',
})
export class DataTable {
  searchValue = '';

  readonly data = input<Product[]>([]);
  readonly columns = input<Column[]>([]);
  readonly customBodyTemplate = input<TemplateRef<any> | null>(null);

  readonly create = output<Product>();
  readonly update = output<Product>();
  readonly delete = output<number>();

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }
  handleGlobalFilter(event: Event, table: Table) {
    const input = event.target as HTMLInputElement;
    table.filterGlobal(input.value, 'contains');
  }
}
