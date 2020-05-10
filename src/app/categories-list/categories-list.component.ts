import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/category';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
})
export class CategoriesListComponent implements OnInit {
  public categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  public onDelete(categoryToDelete: Category) {
    if (
      confirm(
        `Deleting this category will also delete any movie associated with it. Are you sure you want to delete the category ${categoryToDelete.name}?`
      )
    ) {
      this.categoryService.removeCategory(categoryToDelete).subscribe(() => {
        this.categories = this.categories.filter(
          (category) => category.id !== categoryToDelete.id
        );
        alert('Category deleted!');
      });
    }
  }

  ngOnInit(): void {
    const categories$ = this.categoryService.getCategories();
    categories$.subscribe((categories) => {
      this.categories = categories;
    });
  }
}
