import {Category} from "./category";

export interface New {
  id: number;
  name: string;
  type: string;
  local:string;
  category: Category;
  date: string;
  description: string;
  address: string;
  cost:number;
  area:number;
  where:string;
  status:string;
}
