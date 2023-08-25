import {Category} from "./category";

export interface Product {
  id: number;
  name: string;
  email: string;
  category: Category;
  dateOfBirthday: string;
  phoneNumber: string;
  address: string;
}
