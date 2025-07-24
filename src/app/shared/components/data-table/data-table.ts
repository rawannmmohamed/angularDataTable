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
import { DialogModule } from 'primeng/dialog';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyForm } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-data-table',
  imports: [
    TableModule,
    NgTemplateOutlet,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FormsModule,
    DialogModule,
    FormlyForm,
    ReactiveFormsModule,
  ],
  templateUrl: './data-table.html',
  styleUrl: './data-table.css',
})
export class DataTable {
  visible: boolean = false;
  searchValue: string = '';
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [];

  readonly data = input<Product[]>([]);
  readonly columns = input<Column[]>([]);
  readonly customBodyTemplate = input<TemplateRef<any> | null>(null);

  readonly create = output<Product>();
  readonly update = output<Product>();
  readonly delete = output<number>();

  ngOnInit(): void {
    this.fields = this.columns().map((col) => ({
      key: col.field,
      type: 'input',
      templateOptions: {
        label: col.header,
        required: true,
      },
      validation: {
        messages: {
          required: () => `${col.header} is required`,
        },
      },
    }));
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }
  handleGlobalFilter(event: Event, table: Table) {
    const input = event.target as HTMLInputElement;
    table.filterGlobal(input.value, 'contains');
  }
  showDialog(): boolean {
    return (this.visible = true);
  }
  onSubmit() {
    if (this.form.valid) {
      this.create.emit(this.model);
      console.log(this.model);
      this.visible = false;
      this.model = {};
      this.form.reset();
    }
  }
}
