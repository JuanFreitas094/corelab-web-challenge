export interface IVehicle {
  id?: number;
  name: string;
  brand: string;
  description?: string;
  plate: string;
  is_favorite: boolean;
  year: number;
  color: string;
  price?: number;
  created_at?: Date;
}

export default class Vehicle implements IVehicle {
  id?: number | undefined;
  name: string = '';
  brand: string = '';
  description?: string | undefined;
  plate: string = '';
  is_favorite: boolean = false;
  year: number = 0;
  color: string = '';
  price?: number | undefined;
  created_at?: Date | undefined;
}
