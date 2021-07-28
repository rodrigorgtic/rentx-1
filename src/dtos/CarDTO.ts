interface IAccessories {
  id: string;
  type: string;
  name: string;
}

export interface IPhotos {
  id: string;
  photo: string;
}

export interface CarDTO {
  id: string;
  brand: string;
  name: string;
  about: string;
  period: string;
  price: string;
  fuel_type: string;
  thumbnail: string;
  accessories: IAccessories[];
  photos: IPhotos[];
}
