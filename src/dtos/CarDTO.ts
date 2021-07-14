interface IRent {
  period: string;
  price: string;
}

interface IAccessories {
  type: string;
  name: string;
}

export interface CarDTO {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: IRent;
  fuel_type: string;
  thumbnail: string;
  accessories: IAccessories[];
  photos: string[];
}
