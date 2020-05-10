import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../shared/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  @Input()
  public category: Category;

  @Output()
  public delete = new EventEmitter<Category>();

  public onClickDelete() {
    this.delete.emit(this.category);
  }
}
