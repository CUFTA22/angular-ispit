import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ProductModel } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: ProductModel[] = [];

  getProducts(): ProductModel[] {
    return [
      {
        id: 1,
        name: 'Badachro, UK',
        price: 100,
        imageUrl:
          'https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720',
        rating: 4,
        status: 'upcoming',
      },
      {
        id: 2,
        name: 'Gildeskal, Norway',
        price: 150,
        imageUrl:
          'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
        rating: 5,
        status: 'upcoming',
      },
      {
        id: 3,
        name: 'Sali, Croatia',
        price: 200,
        imageUrl:
          'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
        rating: 2,
        status: 'upcoming',
      },
      {
        id: 4,
        name: 'Uusikaupunki, Finland',
        price: 120,
        imageUrl:
          'https://a0.muscache.com/im/pictures/177ed8a7-557b-480f-8319-4f8330e2c692.jpg?im_w=720',
        rating: 3,
        status: 'upcoming',
      },
      {
        id: 5,
        name: 'Skalen, Sweden',
        price: 180,
        imageUrl:
          'https://a0.muscache.com/im/pictures/a4550fcc-8aad-4f2a-a602-eabcca3cf3dd.jpg?im_w=720',
        rating: 5,
        status: 'upcoming',
      },
      {
        id: 6,
        name: 'Nordland, Norway',
        price: 230,
        imageUrl:
          'https://a0.muscache.com/im/pictures/765acada-1030-4bf4-908d-1c9e8f0b95bf.jpg?im_w=720',
        rating: 5,
        status: 'upcoming',
      },
      {
        id: 7,
        name: 'Ytteran, Sweden',
        price: 290,
        imageUrl:
          'https://a0.muscache.com/im/pictures/c0e10c8f-d0c3-4875-bae8-0f664a55bbc6.jpg?im_w=720',
        rating: 4,
        status: 'upcoming',
      },
      {
        id: 8,
        name: 'Addison, US',
        price: 320,
        imageUrl:
          'https://a0.muscache.com/im/pictures/acf6a315-410a-43a2-96b5-1470d4d30d68.jpg?im_w=720',
        rating: 3,
        status: 'upcoming',
      },
      {
        id: 9,
        name: 'Walney, UK',
        price: 260,
        imageUrl:
          'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53185589/original/06d45fd0-8dda-41b9-86a6-07e146341109.jpeg?im_w=720',
        rating: 5,
        status: 'upcoming',
      },
      {
        id: 10,
        name: 'Port Medway, Canada',
        price: 240,
        imageUrl:
          'https://a0.muscache.com/im/pictures/66376c59-9db3-4283-ba63-8e3b6e01cd76.jpg?im_w=720',
        rating: 4,
        status: 'upcoming',
      },
    ];
  }
}
