export interface Cars {
  carId?: string;
  driver: string;
  owner: string;
  make: string;
  model: string;
  year: string;
  vin: string;
}

export interface Parts {
  partId?: string;
  name: string;
  partNumber: string;
  price: number;
}

export interface Service {
  serviceId: string;
  carId: string;
  date: string;
  description: string;
  partsUsed: { partId: string }[];
}
