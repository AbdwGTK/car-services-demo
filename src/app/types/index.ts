export interface Cars {
  carId?: number;
  driver: string;
  owner: string;
  make: string;
  model: string;
  year: string;
  vin: string;
}

export interface Parts {
  partId?: number;
  name: string;
  partNumber: string;
  price: number;
}

export interface Service {
  serviceId: number;
  carId: string;
  date: string;
  description: string;
  partsUsed: { partId: string }[];
}
