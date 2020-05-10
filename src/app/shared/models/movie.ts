import { Url } from 'url';
import { Category } from './category';

export class Movie {
  public title: string;
  public id?: number;
  public url: Url;
  public ytid: string;
  public category: Category;
}
