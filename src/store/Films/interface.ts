import { Film } from "./../../types/Films/index";
export interface IConfigInitState<T> {
  items: T[];
  item: Film | null;
}
