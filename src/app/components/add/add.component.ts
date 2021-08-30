import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  category: Category = {
    name:'',
    description:''
  };
  submitted = false;
  

  constructor(private categoryService: ServicesService) { }

  ngOnInit(): void {
  }

    saveCategory(): void {
      const data = {
        name: this.category.name,
        description: this.category.description
      };

      this.categoryService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
          
        });


    }

}
