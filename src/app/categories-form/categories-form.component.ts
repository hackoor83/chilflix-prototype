import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css'],
})
export class CategoriesFormComponent implements OnInit {
  public categoryName: string;

  constructor(private readonly categoryService: CategoryService) {}

  public addCategory() {
    const newCategory = {
      name: this.categoryName,
    };

    this.categoryService.addCategory(newCategory).subscribe(() => {
      alert('Category added!');
    });
  }

  ngOnInit(): void {}
}
