import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category?: Category[];
  currentCategory?: Category;
  currentIndex = -1;
  name='';

  constructor(private categoryService: ServicesService) { }

  ngOnInit(): void {
    
  }

  retriveCategory(): void {
    this.categoryService.getAll()
    .subscribe(
      data => {
        this.category = data;
        console.log(data);
      },
      error => {
        console.log(error);
        
      });
    
  }

  refreshList(): void {
    this.retriveCategory();
    this.currentCategory = undefined;
    this.currentIndex = -1;
  }

  saveActiveCategory(category: Category, index: number): void {
    this.currentCategory = category;
    this.currentIndex = index;
  }

  removeAllCategory(): void {
    this.categoryService.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.refreshList();
      },
      error => {
        console.log(error);
      });
  }

}
