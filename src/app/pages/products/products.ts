import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductsService } from '../../services/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {
  products: Product[] = [];
  mostrarModal = false;
  productoSeleccionado: Product | null = null;

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getProducts();
  }

  abrirModal(producto: Product) {
    this.productoSeleccionado = producto;
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.productoSeleccionado = null;
    this.mostrarModal = false;
  }

  trackById(index: number, item: Product): number {
    return item.id;
  }
}
