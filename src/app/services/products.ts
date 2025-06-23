import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Edicion Tokio',
      price: 3000,
      description: 'Diseño unico a olimpiadas en Tokio Japon',
      image: '/img/1.jpg'
    },
    {
      id: 2,
      name: 'Edicion Lobo rojo',
      price: 2500,
      description: 'Estilo unico para amantes de colores fuertes y oscuros',
      image: '/img/2.jpg'
    },
    {
      id: 3,
      name: 'Edicion Blancos',
      price: 2900,
      description: 'Estilo elegante y unico en colores',
      image: '/img/3.png'
    },
    {
      id: 4,
      name: 'Edicion Fosforecentes',
      price: 2800,
      description: 'Estilo elegante y vista unica',
      image: '/img/4.jpg'
    },
    {
      id: 5,
      name: 'Edicion Graff',
      price: 2700,
      description: 'Estilo Revelde',
      image: '/img/5.jpg'
    },
    {
      id: 6,
      name: 'Edicion VNL 2024',
      price: 2400,
      description: 'Estilo unico y vistoso amigable y notable',
      image: '/img/Tokio.jpeg'
    },
    {
      id: 7,
      name: 'Edicion discreto y elegante',
      price: 2200,
      description: 'Estilo exsoverante y discreto',
      image: '/img/6.jpg'
    },
    {
      id: 8,
      name: 'Edicion preferida y primera',
      price: 3000,
      description: 'Estilo inspirado a algo frio y resistente',
      image: '/img/7.png'
    }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
