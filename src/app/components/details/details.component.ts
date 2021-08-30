import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  currentCategory: Category =  {
    name: '',
    description:''
  }

  messagge = '';

  constructor(
    private categoryServices: ServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.messagge = '';
    this.getCategory(this.route.snapshot.params.id);
  }

  getCategory(id: string): void {
    this.categoryServices.get(id)
    .subscribe(
      data => {
        this.currentCategory = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  updateCategory(): void {
    this.categoryServices.update(this.currentCategory.id, this.currentCategory)
    .subscribe(
      response => {
        console.log(response);
        this.messagge = response.messagge;
      },
      error => {
        console.log(error);
      });
  }

  deleteCategory(): void {
    this.categoryServices.delete(this.currentCategory.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/category'])
      },
      error => {
        console.log(error);
      });
    }
}
