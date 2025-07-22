import { Component, inject, signal } from '@angular/core';
import { DataTable } from './shared/components/data-table/data-table';
import { Product } from './shared/models/product';
import { Products } from './core/services/products';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-root',
  imports: [DataTable, ToastModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [MessageService],
})
export class App {
  protected readonly title = signal('angularTask');

  products: Product[] = [];

  columns = [
    { field: 'name', header: 'Name', sortable: false, filterable: true },
    {
      field: 'category',
      header: 'Category',
      sortable: false,
      filterable: true,
    },
    { field: 'price', header: 'Price', sortable: true, filterable: false },
    { field: 'stock', header: 'In Stock', sortable: true, filterable: false },
  ];

  showError(msg: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: msg,
      life: 3000,
    });
  }
  showSuccess(detail: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail,
      life: 3000,
    });
  }

  private productService = inject(Products);
  private messageService = inject(MessageService);

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data) => (this.products = data),
      error: () => this.showError('Failed to load products'),
    });
  }

  handleCreate(product: Product) {
    this.productService.createProduct(product).subscribe({
      next: (createdProduct) => {
        this.products = [...this.products, createdProduct];
        this.showSuccess('Product created');
      },
      error: () => this.showError('Failed to create product'),
    });
  }

  handleUpdate(updatedProduct: Product) {
    this.productService.updateProduct(updatedProduct).subscribe({
      next: () => {
        this.products = this.products.map((p) =>
          p.id === updatedProduct.id ? updatedProduct : p
        );
        this.showSuccess('Product updated');
      },
      error: () => this.showError('Failed to update product'),
    });
  }

  handleDelete(id: number) {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.products.filter((p) => {
          p.id !== id;
        });
        this.showSuccess('Product deleted');
      },
      error: () => this.showError('Failed to delete product'),
    });
  }
}
